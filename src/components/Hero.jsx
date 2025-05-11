

function Hero() {
  return (
    <section className="bg-[#f5f5f7] text-center py-16 px-4 pt-32">
      <h1 className="text-9xlxl md:text-5xl font-semibold text-gray-900 mb-4">iPhone</h1>
      <p className="text-lg md:text-xl text-gray-800 mb-6">Meet the iPhone 16 family.</p>

      <div className="flex justify-center space-x-4 mb-6">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition">
          Learn more
        </button>
        <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full text-sm hover:bg-blue-50 transition">
          Shop iPhone
        </button>
      </div>

      <p className="text-sm md:text-base text-gray-700 mb-10">
        Built for <span className="text-purple-500 font-medium">Apple Intelligence.</span>
      </p>

      {/* ✅ Centered iPhone Image */}
      <div className="flex justify-center">
        <img src="/images/AppleHeroBanner.png" alt="Apple Hero" className="w-full max-w-4xl mx-auto object-contain"/>

      </div>
    </section>
  );
}

export default Hero;
