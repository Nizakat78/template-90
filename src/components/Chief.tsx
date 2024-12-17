import Image from 'next/image';

export default function FoodCategory() {
  return (
    <section className="relative py-15 bg-cover bg-center">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 py-12 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          <span className="text-orange-500">Chefs</span>
          <br />
          <span className="text-yellow-500">Me</span>et Our Chef
        </h2>

        {/* Flexbox for the chef items */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Chef 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white rounded-md shadow-lg relative overflow-hidden">
            <Image
              src="/Chef1.svg"
              alt="D.Estwood"
              width={250}
              height={250}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-90 p-3">
              <h3 className="text-lg font-bold text-black text-left">D.Estwood</h3>
              <p className="text-sm text-gray-600 text-left">Chief Chef</p>
            </div>
          </div>

          {/* Chef 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white rounded-md shadow-lg relative overflow-hidden">
            <Image
              src="/Chef2.svg"
              alt="D.Scoriesh"
              width={250}
              height={250}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-90 p-3">
              <h3 className="text-lg font-bold text-black text-left">D.Scoriesh</h3>
              <p className="text-sm text-gray-600 text-left">Assistant Chef</p>
            </div>
          </div>

          {/* Chef 3 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white rounded-md shadow-lg relative overflow-hidden">
            <Image
              src="/Chef3.svg"
              alt="M. William"
              width={250}
              height={250}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-90 p-3 ">
              <h3 className="text-lg font-bold text-black text-left">M. William</h3>
              <p className="text-sm text-gray-600 text-left">Advertising Chef</p>
            </div>
          </div>

          {/* Chef 4 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white rounded-md shadow-lg relative overflow-hidden">
            <Image
              src="/Chef4.svg"
              alt="W.Readfroad"
              width={250}
              height={250}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-90 p-3">
              <h3 className="text-lg font-bold text-black text-left">W.Readfroad</h3>
              <p className="text-sm text-gray-600 text-left">Chef</p>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/3 lg:w-1/4 absolute bottom-0 left-0 transform rotate-40 md:rotate-0">
          <div className="overflow-hidden">
            <Image
              src="/bg3.svg"
              alt="Food Item"
              width={444}
              height={532}
              className="object-cover w-full h-[330px] md:h-[400px] lg:h-[450px] object-left-bottom"
            />
          </div>
        </div>

        {/* See More Button */}
        <div className="mt-8">
          <button className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}
