import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-4 sm:p-8 bg-black text-white">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:w-1/2">
        {['dish1.svg', 'dish2.svg', 'dish3.svg', 'dish4.svg', 'dish5.svg', 'dish6.svg'].map((src, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <Image
              src={`/${src}`}
              alt={`Dish ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 text-center lg:text-left">
        <h1 className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-500">Why Choose Us</h1>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          <span className="text-yellow-500">Extra</span>ordinary Taste<br />And Experienced
        </h2>
        <p className="mb-6 text-gray-300 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
          fringilla bibendum. Utama augue urna, vitae feugiat pretium donec id elementum.
        </p>

        {/* Categories */}
        <div className="flex justify-center lg:justify-start gap-6 mb-6">
          {[
            { emoji: '🍔', label: 'Fast Food' },
            { emoji: '🥗', label: 'Lunch' },
            { emoji: '🍷', label: 'Dinner' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl">{item.emoji}</div>
              <p className="text-sm sm:text-base">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-5xl sm:text-6xl font-bold text-yellow-500">30+</span>
          <p className="text-sm sm:text-base">Years of Experience</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
