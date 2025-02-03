import { NextResponse } from "next/server";
import { client } from "../../../lib/sanityClient";
import { v4 as uuidv4 } from 'uuid'; // Use UUID to generate unique order IDs

export async function POST(req: Request) {
  try {
    // Parse the incoming JSON body
    const {
      userId,
      customerName,
      email,
      phone,
      address,
      items,
      total,
    } = await req.json();

    // Log the incoming data for debugging purposes
    console.log("Incoming order data:", { userId, customerName, email, phone, address, items, total });

    // Validate required fields
    if (!userId || !customerName || !email || !phone || !address || !items || !total) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Generate a unique order ID
    const orderId = uuidv4();  // Generate a unique order ID

    // Create the order document in Sanity
    const order = await client.create({
      _type: "order",
      _id: orderId,  // Set the unique order ID
      userId,
      customerName,
      email,
      phone,
      address,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items: items.map((item: any) => ({
        _type: "orderItem", // Make sure the "orderItem" type exists in Sanity schema
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total,
      status: "pending", // Initial status set to "pending"
    });

    // Log the created order (optional)
    console.log("Order created successfully:", order);

    // Return the order data and success response, including the order ID
    return NextResponse.json({ success: true, orderId }, { status: 201 });

  } catch (error) {
    // Handle any errors that occur during the request processing
    console.error("Error creating order:", error);
    if (error.response) {
      // If there's an error from the Sanity API, log and handle it
      console.error("Sanity API error:", error.response.body);
    }
    return NextResponse.json(
      { success: false, message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
