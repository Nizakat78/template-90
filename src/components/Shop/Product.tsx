import { client, urlFor } from '../../lib/sanityClient';
import { MdArrowCircleRight } from "react-icons/md";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";

// Define TypeScript type for Food data
interface Food {
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
      _ref: string;
    };
  };
}

// Fetch food data from Sanity
async function getFoods(): Promise<Food[]> {
  const query = `*[_type == "food"]{
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
  const foods = await client.fetch(query);
  return foods;
}

// Foods page component
export default async function FoodsPage() {
  const foods = await getFoods();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Products Grid */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {foods.map((food) => (
              <div
                key={food._id}
                className="bg-white shadow-md rounded-md overflow-hidden"
              >
                {food.image && food.image.asset ? (
                  <img
                    src={urlFor(food.image).width(300).url()} // Generate image URL
                    alt={food.name}
                    className="w-full h-40 object-cover"
                  />
                ) : (
                  <img
                    src="/placeholder.jpg" // Fallback image
                    alt="Placeholder"
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{food.name}</h2>
                  <div className="flex items-center justify-between mt-2">
                    {food.originalPrice && (
                      <span className="text-gray-500 line-through">
                        ₹{food.originalPrice}
                      </span>
                    )}
                    <span className="text-xl font-bold">₹{food.price}</span>
                  </div>
                  {food.available ? (
                    <span className="text-sm text-green-500">Available</span>
                  ) : (
                    <span className="text-sm text-red-500">Unavailable</span>
                  )}
                  <p className="text-sm text-gray-500">{food.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1 bg-gray-100 p-4 rounded-md">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full p-2 pl-10 border border-gray-300 rounded-md"
              />
              <LiaSearchSolid className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            </div>

            <h3 className="text-lg font-bold mt-6 mb-4">Categories</h3>
            <ul>
              {[
                "Sandwiches",
                "Burger",
                "Chicken Chup",
                "Drink",
                "Pizza",
                "Thi",
                "Non Veg",
                "Uncategorized",
              ].map((category) => (
                <li key={category} className="mb-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> {category}
                  </label>
                </li>
              ))}
            </ul>

            {/* Background with Text */}
            <div
              className="relative bg-cover bg-center rounded-md mb-4"
              style={{ backgroundImage: "url('/Sidebar1.svg')", height: "300px" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-center p-4">
                <div className="text-white">
                  <h4 className="text-2xl font-bold">Perfect Taste</h4>
                  <p className="text-sm mt-2">Classic Restaurant</p>
                  <p className="text-sm mt-2 text-yellow-600">45.00$</p>
                  <p className="text-sm mt-28">
                    Shop Now <span>
                      <MdArrowCircleRight />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Filter By Price</h3>
              <input type="range" min="0" max="100" className="w-full" />
              <p>From $0 to $8000</p>
            </div>

            <div className="mt-6 gap-10">
              <h1 className="text-xl font-bold">Latest Products</h1>
            </div>

            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex items-start mb-4 bg-white shadow-md rounded-md overflow-hidden"
              >
                <img
                  src={`/Sidebar2.svg`}
                  alt={`Product ${i + 1}`}
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4">
                  <h5 className="font-semibold">{`Product ${i + 1}`}</h5>
                  <p className="text-sm text-gray-600">
                    {`Description for Product ${i + 1}`}
                  </p>
                  <span className="text-lg font-bold">${10 + i * 5}</span>
                </div>
              </div>
            ))}

            <div>
              <div className="text-lg font-bold p-4">Product Tags</div>
              <div className="m-2 gap-6">
                <p>Service Our Menu Pizza</p>
                <p>
                  Cupcake <span className="text-yellow-600">Burger</span> Cookies
                </p>
                <p>Our Shop Tandoori Chicken</p>
              </div>
            </div>
          </aside>
        </div>

        {/* Pagination Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md border-yellow-500">
            <FaAnglesLeft />
          </button>
          <button className="px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md border-yellow-500">
            1
          </button>
          <button className="px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md border-yellow-500">
            2
          </button>
          <button className="px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md border-yellow-500">
            3
          </button>
          <button className="px-4 py-2 bg-white text-yellow-500 rounded-md shadow-md border-yellow-500">
            <FaAngleDoubleRight />
          </button>
        </div>
      </div>
    </div>
  );
}
