import Image from 'next/image'

export default function FoodCategory() {
  return (
    <section className="relative py-12 bg-cover bg-center">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 py-12 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          <span className="text-orange-500">Food Category</span>
          <br />
          Choose Food Item
        </h2>

        {/* Flexbox for the food items */}
        <div className="flex flex-wrap justify-items-start gap-4">

          {/* Food Item 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white rounded-md shadow-lg relative overflow-hidden">
            <Image
              src="/item1.svg" 
              alt="Food Item 1"
              width={350}
              height={328}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Food Item 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white rounded-md shadow-lg relative overflow-hidden">
            <Image
              src="/item2.svg" 
              alt="Food Item 2"
              width={306}
              height={328}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Food Item 3 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white rounded-md shadow-lg relative overflow-hidden">
            <Image
              src="/item3.svg" 
              alt="Food Item 3"
              width={308}
              height={328}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Food Item 4 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white rounded-md shadow-lg relative overflow-hidden">
            <Image
              src="/item4.svg" 
              alt="Food Item 4"
              width={308}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Right side image (rotated and positioned correctly) */}
        <div className="w-full md:w-1/3 lg:w-1/4 absolute bottom-0 right-0 transform rotate-90 md:rotate-0">
          <div className="overflow-hidden">
            <Image
              src="/bg2.svg" 
              alt="Food Item"
              width={444}
              height={532}
              className="object-cover w-full h-[330px] md:h-[400px] lg:h-[450px] object-right-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
