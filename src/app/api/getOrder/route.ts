import { NextResponse } from "next/server";
import { client } from "../../../lib/sanityClient"; // Assuming you have sanityClient.js to interact with Sanity or your database

export async function GET(req: Request) {
  try {
    // Extract the orderId from the query string
    const url = new URL(req.url);
    const orderId = url.searchParams.get("orderId");

    // If orderId is not provided, return an error
    if (!orderId) {
      return NextResponse.json(
        { success: false, message: "Order ID is required" },
        { status: 400 }
      );
    }

    // Fetch the order from your data source (e.g., Sanity, MongoDB, etc.)
    const order = await client.fetch(`*[_type == "order" && _id == $orderId]`, {
      orderId,
    });

    if (!order || order.length === 0) {
      return NextResponse.json(
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    }

    // Return the order details
    return NextResponse.json({
      success: true,
      order: order[0],
    });
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
