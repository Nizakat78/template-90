import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-4 sm:p-8 bg-black text-white">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3 lg:w-1/2">
        <div>
          <Image src="/dish1.svg" alt="Tacos" width={300} height={200} className="rounded-lg" />
        </div>
        <div>
          <Image src="/dish2.svg" alt="Burger" width={300} height={200} className="rounded-lg" />
        </div>
        <div>
          <Image src="/dish3.svg" alt="Fried Chicken" width={300} height={200} className="rounded-lg" />
        </div>
        <div>
          <Image src="/dish4.svg" alt="Sandwich" width={300} height={200} className="rounded-lg" />
        </div>
        <div>
          <Image src="/dish5.svg" alt="Salad" width={300} height={200} className="rounded-lg" />
        </div>
        <div>
          <Image src="/dish6.svg" alt="Salad" width={300} height={200} className="rounded-lg" />
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 text-center lg:text-left">
        <h1 className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-500">Why Choose Us</h1>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          <span className="text-yellow-500">Extra</span>ordinary taste<br />And Experienced
        </h2>
        <p className="mb-6 text-gray-300 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
          Utama augue urna, vitae feugiat pretium donec id elementum.
        </p>

        <div className="flex justify-center lg:justify-start gap-6 mb-6">
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl">🍔</div>
            <p className="text-sm sm:text-base">Fast Food</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl">🥗</div>
            <p className="text-sm sm:text-base">Lunch</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl">🍷</div>
            <p className="text-sm sm:text-base">Dinner</p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <span className="text-5xl sm:text-6xl font-bold text-yellow-500">30+</span>
          <p className="text-sm sm:text-base">Years of Experienced</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;