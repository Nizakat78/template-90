// components/AboutSection.js
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* About Us Heading */}
        <div className="lg:w-1/2">
          <h3 className="italic text-orange-500 text-lg mb-4">About us!</h3>
          {/* Main Content */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-yellow-500">We</span> Create the best foody product
          </h2>
          <p className="mb-6 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae risus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">✔</span>
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">✔</span>
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">✔</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul>
          <button className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 transition">
            Read More
          </button>
        </div>

        {/* Images */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-end gap-4">
          <div className="w-full">

            <Image
              src="/pic1.svg"
              alt="Main Dish"
              width={660}
              height={330}
              className="rounded-md"
              priority={true}
            />
          </div>
          <div className="flex gap-4 top-[1416px] left-[960px] rounded-6xl">
            <Image
              src="/pic2.svg"
              alt="Dish 1"
              width={330}
              height={164}
              className="rounded-md"
            />
            <Image
              src="/pic3.svg"
              alt="Dish 2"
              width={330}
              height={164}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
