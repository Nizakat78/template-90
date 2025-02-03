/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs"; // Assuming you're using Clerk for authentication
import { useRouter } from "next/navigation"; // For navigation after actions

const OrderHistoryPage = () => {
  const { user } = useUser(); // Get the logged-in user details
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch user orders when component mounts
    if (!user) {
      router.push("/login"); // Redirect to login page if the user is not logged in
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await fetch(`/api/getUserOrders?userId=${user.id}`);
        const data = await res.json();

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

              <h3 className="font-semibold mt-4">Items:</h3>
              <ul className="space-y-2">
                {order.items.map((item: any, index: number) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <p className="font-semibold">Shipping Information</p>
                <p>{order.shippingName}, {order.shippingPhone}</p>
                <p>{order.shippingAddress}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistoryPage;
