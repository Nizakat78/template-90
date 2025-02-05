/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs"; // Assuming you're using Clerk for authentication
import { useRouter } from "next/navigation"; // For navigation after actions

const OrderHistoryPage = () => {
  const { user } = useUser(); // Get the logged-in user details
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [orders, setOrders] = useState<any[]>([]); // Stores orders
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false); // For showing confirmation dialog
  const [orderToCancel, setOrderToCancel] = useState<string | null>(null); // To store order id for cancellation

  useEffect(() => {
    // Fetch user orders when component mounts
    if (!user) {
      router.push("/"); // Redirect to login page if the user is not logged in
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await fetch(`/api/getUserOrders?userId=${user.id}`);
        const data = await res.json();

        console.log("Fetched Orders:", data); // Check the data structure in the console

        if (data.success) {
          setOrders(data.orders);
        } else {
          setError(data.message);
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to load order history");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, router]);

  const cancelOrder = async (orderId: string) => {
    try {
      const res = await fetch(`/api/cancelOrder?orderId=${orderId}`, {
        method: 'POST', // Assuming POST for cancellation
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId }), // Pass the orderId
      });

      const data = await res.json();
      if (data.success) {
        // If the cancellation is successful, remove the canceled order from the state
        setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error("Error canceling the order:", err);
      setError("Failed to cancel the order.");
    }
  };

  // Handle showing the dialog when the user clicks "Cancel Order"
  const handleCancelClick = (orderId: string) => {
    setOrderToCancel(orderId); // Set the order id to cancel
    setShowDialog(true); // Show the confirmation dialog
  };

  // Handle the cancellation confirmation
  const handleCancelConfirmation = () => {
    if (orderToCancel) {
      cancelOrder(orderToCancel); // Cancel the order
    }
    setShowDialog(false); // Close the dialog
  };

  const handleCancelDecline = () => {
    setShowDialog(false); // Close the dialog without doing anything
  };

  if (loading) return <div className="text-white text-center">⏳ Loading order history...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-6">Order History</h1>

      {orders.length === 0 ? (
        <div className="text-center text-white">You have no past orders.</div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className="border p-4 rounded-md border-gray-600">
              <h2 className="text-xl font-bold mb-4">Order ID: {order._id}</h2>
              <p className="mb-2">Total Paid: ${order.total.toFixed(2)}</p>
              <p className="mb-2">Status: {order.status}</p>
              <p className="mb-2">Shipping Address: {order.address}</p>

              {/* Display customer information */}
              <div className="mt-4">
                <p className="font-semibold">Customer Information:</p>
                <p>Name: {order.customerName}</p>
                <p>Email: {order.email}</p>
                <p>Phone: {order.phone}</p>
              </div>

              <h3 className="font-semibold mt-4">Items:</h3>
              <ul className="space-y-2">
                {order.items.map((item: any, index: number) => (
                  <li key={index} className="flex items-center space-x-4">
                    {/* Displaying the item image if available */}
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-500 rounded">No Image</div>
                    )}
                    <div className="flex-1">
                      <span>{item.name} x {item.quantity}</span>
                    </div>
                    <div>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <p className="font-semibold">Shipping Information</p>
                <p>{order.shippingName}, {order.shippingPhone}</p>
                <p>{order.shippingAddress}</p>
              </div>

              {/* Cancel Button */}
              {order.status !== 'Cancelled' && (
                <button
                  onClick={() => handleCancelClick(order._id)}
                  className="mt-4 text-red-500 hover:text-red-700"
                >
                  Cancel Order
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Confirmation Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Are you sure you want to cancel this order?</h3>
            <div className="flex justify-between">
              <button
                onClick={handleCancelConfirmation}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Yes, Cancel
              </button>
              <button
                onClick={handleCancelDecline}
                className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-500"
              >
                No, Keep it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistoryPage;
