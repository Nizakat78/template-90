/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const OrderConfirmation = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const total = searchParams.get("total");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [order, setOrder] = useState<any | null>(null); // Define type of order to be more specific
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Error handling

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) return;
      try {
        const res = await fetch(`/api/getOrder?orderId=${orderId}`);
        const data = await res.json();

        if (!data.success) {
          setError(data.message || "Unable to fetch order details");
        } else {
          setOrder(data.order);
        }
      } catch (error) {
        console.error("Failed to fetch order:", error);
        setError("An error occurred while fetching order details.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (!orderId) {
    return <div className="text-red-500 text-center mt-10">⚠️ Order ID not found!</div>;
  }

  if (loading) {
    return <div className="text-white text-center mt-10">⏳ Loading order details...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  if (!order) {
    return <div className="text-red-500 text-center mt-10">⚠️ Order not found!</div>;
  }

  // Destructure order details
  const { customerName, items, total: orderTotal } = order;

  return (
    <div className="text-center text-white p-6">
      <h1 className="text-2xl font-bold mb-4">🎉 Order Confirmed!</h1>
      
      {/* Displaying order summary */}
      <div className="mb-6">
        <p className="text-lg">Order ID: <strong>{orderId}</strong></p>
        <p className="text-lg">Total Paid: <strong>${total || orderTotal}</strong></p>
      </div>

      {/* Displaying customer details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Customer Details:</h2>
        <p>{customerName}</p>
      </div>

      {/* Displaying items in the order */}
      <h2 className="text-lg font-semibold mt-4">Order Details:</h2>
      <ul className="list-none mt-4">
        {items?.map((item: any, index: number) => (
          <li key={index} className="mt-2">
            <div className="flex justify-between">
              <span>{item.quantity}x {item.name}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </li>
        ))}
      </ul>

      {/* Showing order total */}
      <div className="mt-4 font-semibold text-lg">
        <p className="flex justify-between">
          <span>Total:</span>
          <span>${(orderTotal || total)?.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
