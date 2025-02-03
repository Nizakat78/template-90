"use client";
import React, { useState } from "react";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";

interface CheckoutFormProps {
  total: string;
  orderId: string; // Added orderId to fetch order details after payment
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ total, orderId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter(); // Router to redirect
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsProcessing(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setErrorMessage(error.message || "An error occurred.");
      setIsProcessing(false);
      return;
    }

    // Send paymentMethod.id and amount to backend
    const response = await fetch("/api/payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentMethodId: paymentMethod.id,
        amount: total,
      }),
    });

    const paymentIntent = await response.json();

    if (paymentIntent.error) {
      setErrorMessage(paymentIntent.error.message);
      setIsProcessing(false);
      return;
    }

    // Confirm the payment with Stripe
    const { error: confirmError } = await stripe.confirmCardPayment(paymentIntent.clientSecret);

    if (confirmError) {
      setErrorMessage(confirmError.message || "An error occurred while confirming payment.");
      setIsProcessing(false);
      return;
    }

    setSuccessMessage("Payment successful! Thank you for your purchase.");
    setIsProcessing(false);

    // Redirect to the order confirmation page with orderId and total
    router.push(`/order-confirmation?orderId=${orderId}&total=${total}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-2 border border-gray-700 rounded bg-black">
        <CardElement
          options={{
            hidePostalCode: true,
            style: {
              base: {
                color: "#ffffff",
                fontSize: "16px",
                "::placeholder": { color: "#bbbbbb" },
              },
              invalid: { color: "#ff6b6b" },
            },
          }}
        />
      </div>

      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      {successMessage && <div className="text-green-500">{successMessage}</div>}

      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg">Total: ${total}</span>
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="px-4 py-2 bg-orange-500 text-white rounded"
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
