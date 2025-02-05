"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client, urlFor } from "../../../lib/sanityClient";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { useCart } from "../../../app/Context/Cartcontext"; // Import the useCart hook

interface FoodDetails {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
  description?: string;
  available: boolean;
  image?: {
    asset: {
      url: string;
      _ref: string;
    };
  };
}

export default function FoodDetailsPage() {
  const { id } = useParams(); // Get the ID from the URL
  const [food, setFood] = useState<FoodDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // For quantity of food item
  const router = useRouter();
  const { addToCart } = useCart(); // Access addToCart from context

  useEffect(() => {
    const fetchFoodDetails = async () => {
      const query = `*[_type == "food" && _id == $id][0]{
        _id,
        name,
        category,
        price,
        originalPrice,
        tags,
        description,
        available,
        image {
          asset -> {
            _id,
            url
          }
        }
      }`;

      try {
        const fetchedFood = await client.fetch(query, { id }, { cache: "force-cache" }); // 🚀 Fast fetch with caching
        setFood(fetchedFood);
      } catch (error) {
        console.error("Error fetching food details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchFoodDetails();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (food) {
      const item = {
        ...food,
        quantity,
        image: food.image?.asset?.url || "/placeholder.jpg", // Use the image URL
      };

      addToCart(item); // Add the item using the global context

      alert(`${food.name} has been added to the cart!`);
    }
  };

  const increaseQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }

  if (!food) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 text-lg">Food not found!</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <button
          className="flex items-center text-yellow-500 mb-6"
          onClick={() => router.back()}
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>

        <div className="bg-white shadow-md rounded-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Section */}
          <div>
            {food.image && food.image.asset ? (
              <img
                src={urlFor(food.image).width(500).url()}
                alt={food.name}
                className="rounded-md w-full h-auto"
                loading="lazy" // 🚀 Faster image loading
              />
            ) : (
              <img
                src="/placeholder.jpg"
                alt="Placeholder"
                className="rounded-md w-full h-auto"
              />
            )}
          </div>

          {/* Details Section */}
          <div>
            <h1 className="text-2xl font-bold mb-4">{food.name}</h1>
            <p className="text-sm text-gray-600 mb-2">
              Category: <span className="text-yellow-500">{food.category}</span>
            </p>

            <div className="flex items-center mb-4">
              {food.originalPrice && (
                <span className="text-gray-500 line-through mr-2">
                  ${food.originalPrice}
                </span>
              )}
              <span className="text-3xl font-bold text-yellow-500">
                ${food.price}
              </span>
            </div>

            {food.available ? (
              <p className="text-green-600 font-semibold">Available</p>
            ) : (
              <p className="text-red-600 font-semibold">Unavailable</p>
            )}

            {food.description && (
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-2">Description</h3>
                <p className="text-gray-700">{food.description}</p>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center mt-4">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 bg-gray-200 rounded-full text-xl"
              >
                -
              </button>
              <span className="mx-4 text-xl">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 bg-gray-200 rounded-full text-xl"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full py-2 bg-yellow-500 text-white rounded-full text-lg font-semibold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
