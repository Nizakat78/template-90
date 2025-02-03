import { NextResponse } from "next/server";
import { client } from "../../../lib/sanityClient"; // Use your actual client import

export async function GET(req: Request) {
  try {
    // Extract userId from the query string
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");

    // If userId is missing, return an error
    if (!userId) {
      return NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      );
    }

    // Fetch orders from your data source (e.g., Sanity or your DB)
    const orders = await client.fetch(
      `*[_type == "order" && userId == $userId]`,
      { userId }
    );

    // If no orders are found, return an empty response
    if (!orders || orders.length === 0) {
      return NextResponse.json(
        { success: true, message: "No orders found for this user", orders: [] },
        { status: 200 }
      );
    }

    // Return the orders data
    return NextResponse.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
