"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../app/payment/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

const PaymentPage: React.FC = () => {
  const searchParams = useSearchParams();
  const total = parseFloat(searchParams.get("total") || "0").toFixed(2);
  const orderId = searchParams.get("orderId"); // Pass orderId as a query parameter

  return (
    <div className="p-6 bg-black text-white min-h-screen flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white text-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Payment</h2>
        <div className="mb-4">
          <p className="text-lg font-medium">Total Amount: ${total}</p>
        </div>
        {stripePromise && (
          <Elements
            stripe={stripePromise}
            options={{ appearance: { theme: "stripe" } }}
          >
            <CheckoutForm total={total} orderId={orderId || ""} />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
