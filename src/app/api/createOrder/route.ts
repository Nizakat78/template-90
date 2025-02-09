import { client } from "../../../lib/sanityClient"; // Your Sanity client setup
import { v4 as uuidv4 } from 'uuid'; // Use uuid to generate unique keys for each item

export async function POST(req: Request) {
  try {
    // Step 1: Parse and log incoming request data
    const { userId, items, total, shippingDetails } = await req.json();
    console.log("Received order data:", { userId, items, total, shippingDetails });

    // Step 2: Prepare the order object for Sanity
    const order = {
      _type: 'order', // This is crucial for Sanity to know what type of document you're creating
      userId,
      items: items.map(item => ({
        _type: 'orderItem', // Add the _type to the orderItem to indicate it's an order item
        _key: uuidv4(), // Generate a unique key for each item
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image, // Ensure the image URL is passed
      })),
      shippingDetails: {
        _type: 'shippingDetails', // Link to the shipping details schema
        firstName: shippingDetails.firstName,
        lastName: shippingDetails.lastName,
        email: shippingDetails.email,
        phone: shippingDetails.phone,
        company: shippingDetails.company,
        country: shippingDetails.country,
        city: shippingDetails.city,
        zipCode: shippingDetails.zipCode,
        address1: shippingDetails.address1,
        address2: shippingDetails.address2,
      },
      total,
      createdAt: new Date().toISOString(),
      status: 'pending', // Default status
    };

    // Step 3: Log the order data being sent to Sanity
    console.log("Order data being sent to Sanity:", order);

    // Create the order document in Sanity
    const createdOrder = await client.create(order);

    // Step 4: Log the response from Sanity
    console.log("Order successfully created in Sanity with ID:", createdOrder._id);

    return new Response(JSON.stringify({ orderId: createdOrder._id }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return new Response(JSON.stringify({ message: "Failed to create order." }), {
      status: 500,
    });
  }
}
