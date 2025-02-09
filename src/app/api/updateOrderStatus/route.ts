import { client } from "../../../lib/sanityClient"; // Your Sanity client setup

export async function POST(req: Request) {
  try {
    const { orderId, status } = await req.json();

    // Validate the input
    if (!orderId || status !== "completed") {
      return new Response(JSON.stringify({ message: "Invalid data or status" }), {
        status: 400,
      });
    }

    // Update the order status to "completed" in Sanity
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const updatedOrder = await client
      .patch(orderId) // Find the order by ID
      .set({ status: "completed" }) // Set the new status to "completed"
      .commit(); // Commit the change to Sanity

    // Return a success response
    return new Response(JSON.stringify({ message: "Order status updated" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating order status:", error);
    return new Response(JSON.stringify({ message: "Failed to update order status" }), {
      status: 500,
    });
  }
}
