import { NextResponse } from "next/server";
import Stripe from "stripe";
import { client } from "../../../lib/sanityClient"; // Import your Sanity client

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const { paymentMethodId, amount, orderId } = await req.json();

    // Validate amount
    if (!amount || isNaN(amount)) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    // Validate orderId to update the order status in Sanity
    if (!orderId) {
      return NextResponse.json({ error: "Order ID is required" }, { status: 400 });
    }

    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(parseFloat(amount) * 100), // Convert to cents
      currency: "usd",
      payment_method: paymentMethodId,
      confirm: true,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never", // Disable redirect-based methods
      },
    });

    // If payment is successful, update order status to "completed" in Sanity
    if (paymentIntent.status === 'succeeded') {
      // Update the order in Sanity to 'completed' status
      await client
        .patch(orderId) // Pass the orderId to update the correct order
        .set({ status: 'completed' }) // Set the status as completed
        .commit();
    }

    return NextResponse.json(
      { clientSecret: paymentIntent.client_secret, success: true },
      { status: 200 }
    );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
