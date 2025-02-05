import { NextResponse } from "next/server";
import { client } from "../../../lib/sanityClient"; // Assuming you have this setup for your Sanity client

export async function POST(req) {
  try {
    // Get the orderId from the request body
    const { orderId } = await req.json();

    if (!orderId) {
      return NextResponse.json(
        { success: false, message: "Order ID is required" },
        { status: 400 }
      );
    }

    // Find the order from the Sanity database
    const order = await client.fetch(
      `*[_type == "order" && _id == $orderId][0]`, 
      { orderId }
    );

    if (!order) {
      return NextResponse.json(
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    }

    // Proceed to update the order status to "Cancelled"
    const updatedOrder = await client
      .patch(order._id) // Specify the order ID to update
      .set({ status: "Cancelled" }) // Set the new status
      .commit(); // Commit the update

    if (updatedOrder) {
      return NextResponse.json(
        { success: true, message: "Order successfully cancelled" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Failed to cancel order" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error canceling order:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
