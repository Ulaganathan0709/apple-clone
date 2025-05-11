import Button from "./Button";

function Section() {
  return (
    <>
      {/* Full Width Section - Watch */}
<div className="w-full bg-white relative text-white">
  <div className="relative w-full">
    <img src="images/products/Apple_watch.jpg" alt="Apple Watch" className="w-full h-auto" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-semibold mb-2 drop-shadow-md">Apple Watch</h2>
      <p className="text-lg drop-shadow-sm">Live healthier. Train better. Stay connected.</p>
      <div className="flex gap-4 mt-4">
        <Button label="Learn more" primary />
        <Button label="Shop Watch" />
      </div>
    </div>
  </div>
</div>

{/* Full Width Section - MacBook Air */}
<div className="w-full bg-[#f5f5f7] relative text-white pt-4">
  <div className="relative w-full">
    <img src="images/products/MacBookAirBanner.jpg" alt="MacBook Air" className="w-full h-auto" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-semibold mb-2 text-black">MacBook Air</h2>
      <p className="text-lg text-white">Sky blue colour. Sky high performance with M4.</p>
      <div className="flex gap-4 mt-4">
        <Button label="Learn more" primary />
        <Button label="Buy" />
      </div>
      <p className="mt-2 text-sm">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 font-semibold">
          Built for Apple Intelligence.
        </span>
      </p>
    </div>
  </div>
</div>

      {/* Grid Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
        {[
          {
            img: "images/products/AirPod4.jpeg",
            title: "AirPods 4",
            desc: "Iconic. Now supersonic.",
          },
          {
            img: "images/products/IpadPro.jpg",
            title: "iPad Pro",
            desc: "Unbelievably thin. Incredibly powerful.",
          },
          {
            img: "images/products/IpdadAir.jpg",
            title: "iPad Air",
            desc: "Now supercharged by the M3 chip.",
          },
          {
            img: "images/products/MacBookPro.jpg",
            title: "MacBook Pro",
            desc: "More power. More performance.",
          },
          {
            img: "images/products/Offer.webp",
            title: "Offer for Students",
            desc: "Get AirPods free with Mac.",
          },
          {
            img: "images/products/Trade.jpeg",
            title: "Apple Trade-In",
            desc: "Upgrade and save. It's that easy.",
          },
        ].map((item, i) => (
          <div key={i} className="relative w-full h-[400px] overflow-hidden rounded-lg">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 text-white flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-2xl font-semibold drop-shadow">{item.title}</h3>
              <p className="text-sm drop-shadow">{item.desc}</p>
              <div className="flex gap-4 mt-4">
                <Button label="Learn more" primary />
                <Button label="Buy" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Section;
