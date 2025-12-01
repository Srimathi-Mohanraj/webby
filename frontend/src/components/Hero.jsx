import React from "react";

export default function Hero({
  title = `Beauty That Speaks\nConfidence`,
  subtitle = "Step into new-season styles made for confidence and comfort. Elevate your wardrobe with modern design.",
  image = "/images/beauty.png"
}) {
  return (
    <section >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
     
        <div
          className="w-full bg-[#0039B3] rounded-2xl overflow-hidden my-10"
          style={{
           
            padding: "56px 56px",
            
            boxShadow: "inset 0 8px 36px rgba(3,13,102,0.12), 0 18px 40px rgba(3,13,102,0.22)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* LEFT: headline & subtitle */}
            <div className="md:col-span-7">
              <h1 className="text-white text-4xl sm:text-6xl md:text-6xl lg:text-[70px] leading-tight">
                {title.split("\n").map((line, i) => (
                  <span key={i} className="block">"{line}"</span>
                ))}
              </h1>

              <p className="text-blue-100 mt-5 text-base sm:text-lg max-w-xl">
                {subtitle}
              </p>

             
              <div className="w-full flex justify-center md:justify-start mt-10">
                <button
                  className="text-white bg-blue-700 px-7 py-3 rounded-full  shadow-md hover:shadow-lg transition "
                  style={{ boxShadow: "0 8px 18px rgba(3,13,102,0.22)" }}
                >
                  View More
                </button>
              </div>
            </div>

            {/* RIGHT: white rounded illustration box */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg max-w-[420px] w-full">
                <img src={image} alt="hero illustration" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
