import React from "react";

export default function Hero({
  title = `Beauty That\nSpeaks\nConfidence`,
  subtitle = "Step into new-season styles made for confidence and comfort. Elevate your wardrobe with modern design.",
  image = "/images/beauty.png"
}) {
  return (
    <section className="w-full pt-10 pb-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SINGLE HERO CARD  */}
        <div
          className="w-full bg-[#002E99] rounded-[32px]"
          style={{
            padding: "56px",
            boxShadow:
              "inset 0 8px 36px rgba(3,13,102,0.12), 0 20px 44px rgba(3,13,102,0.24)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* LEFT TEXT */}
            <div className="md:col-span-7">
              <h1 className="text-white  text-4xl sm:text-6xl md:text-[64px] lg:text-[66px] leading-tight">
                {title.split("\n").map((line, i) => (
                  <span key={i} className="block">"{line}"</span>
                ))}
              </h1>

              <p className="text-blue-100 mt-6 text-lg max-w-xl">
                {subtitle}
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="bg-white rounded-[83px] p-8 shadow-xl max-w-[450px] w-full">
                <img
                  src={image}
                  alt="Hero Visual"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/*  BUTTON */}
          <div className="w-full flex justify-center mt-10">
            <button
              className="bg-white text-[#0039B3] px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
              style={{ boxShadow: "0 8px 22px rgba(3,13,102,0.25)" }}
            >
              View More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
