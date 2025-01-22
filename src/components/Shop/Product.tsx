"use client";
import { useState, useEffect } from "react";
import { client, urlFor } from "../../lib/sanityClient";
import { useRouter } from "next/navigation";
import { LiaSearchSolid } from "react-icons/lia";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

interface Food {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
  available: boolean;
  image?: {
    asset: {
      _ref: string;
    };
  };
}

export default function FoodsPage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [latestProducts, setLatestProducts] = useState<Food[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tags, setTags] = useState<string[]>([]);
  const itemsPerPage = 9;

  const router = useRouter();

  useEffect(() => {
    const fetchFoods = async () => {
      const query = `*[_type == "food"]{
        _id,
        name,
        category,
        price,
        originalPrice,
        tags,
        available,
        image {
          asset -> {
            _id,
            url
          }
        }
      }`;
      const fetchedFoods = await client.fetch(query);
      setFoods(fetchedFoods);
  
      // Ensure allTags is typed as string[]
      const allTags: string[] = fetchedFoods.flatMap((food) => food.tags || []);
      const uniqueTags: string[] = Array.from(new Set(allTags));
      setTags(uniqueTags);
    };
  
    const fetchLatestProducts = async () => {
      const query = `*[_type == "food"] | order(_createdAt desc) [0..3]{
        _id,
        name,
        category,
        price,
        originalPrice,
        tags,
        available,
        image {
          asset -> {
            _id,
            url
          }
        }
      }`;
      const fetchedLatestProducts = await client.fetch(query);
      setLatestProducts(fetchedLatestProducts);
    };
  
    fetchFoods();
    fetchLatestProducts();
  }, []);
  

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((item) => item !== category)
        : [...prevCategories, category]
    );
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((item) => item !== tag)
        : [...prevTags, tag]
    );
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setPriceRange([0, value]);
  };

  const handleProductClick = (id: string) => {
    router.push(`/food/${id}`);
  };

  const filteredFoods = foods
    .filter((food) => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(
      (food) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(food.category)
    )
    .filter(
      (food) =>
        selectedTags.length === 0 ||
        (food.tags && food.tags.some((tag) => selectedTags.includes(tag)))
    )
    .filter((food) => food.price >= priceRange[0] && food.price <= priceRange[1]);

  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
  const currentFoods = filteredFoods.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Products Grid */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentFoods.map((food) => (
              <div
                key={food._id}
                className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer"
                onClick={() => handleProductClick(food._id)}
              >
                {food.image && food.image.asset ? (
                  <img
                    src={urlFor(food.image).width(300).url()}
                    alt={food.name}
                    className="w-full h-40 object-cover"
                  />
                ) : (
                  <img
                    src="/placeholder.jpg"
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
                onChange={handleSearchChange}
              />
              <LiaSearchSolid className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            </div>

            <h3 className="text-lg font-bold mt-6 mb-4">Categories</h3>
            <ul>
              {["Sandwiches", "Burger", "Pizza", "Drink"].map((category) => (
                <li key={category} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="mr-2"
                    />
                    {category}
                  </label>
                </li>
              ))}
            </ul>
            <div>
              <h3 className="text-lg font-bold mb-4">Filter By Price</h3>
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="w-full"
              />
              <p>From ₹0 to ₹{priceRange[1]}</p>
            </div>

            {/* Tags */}
            <h3 className="text-lg font-bold mt-6 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`text-xs rounded-full px-4 py-2 ${
                    selectedTags.includes(tag)
                      ? "bg-yellow-500 text-white"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Latest Products */}
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-4">Latest Products</h3>
              {latestProducts.map((product) => (
                <div
                  key={product._id}
                  className="flex items-start mb-4 bg-white shadow-md rounded-md overflow-hidden cursor-pointer"
                  onClick={() => handleProductClick(product._id)}
                >
                  {product.image && product.image.asset ? (
                    <img
                      src={urlFor(product.image).width(100).url()}
                      alt={product.name}
                      className="w-24 h-24 object-cover"
                    />
                  ) : (
                    <img
                      src="/placeholder.jpg"
                      alt="Placeholder"
                      className="w-24 h-24 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h5 className="font-semibold">{product.name}</h5>
                    <span className="text-lg font-bold">₹{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center gap-4">
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="p-2 bg-gray-200 rounded-full"
            >
              <FaAnglesLeft />
            </button>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="p-2 bg-gray-200 rounded-full"
            >
              <FaAnglesRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
