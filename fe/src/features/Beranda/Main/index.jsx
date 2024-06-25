import React, { useState, useEffect } from "react";
import Button from "../../../components/Button"; // Ensure this path is correct
import img1 from "../../../assets/img.png"; // Ensure these paths are correct
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";

const slides = [img1, img2, img3];

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full my-[-40px] md:my-5">
      <div className="flex h-[500px] justify-center items-center mx-10 relative">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="rounded-3xl w-full h-[400px] md:h-[500px] lg:h-full object-cover transition-opacity duration-1000"
        />
        <div className="kata justify-center poppins text-white font-bold items-center text-center h-28 flex flex-col gap-y-8 max-w-full absolute my-1/2 mx-20">
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-5xl">
            GEBRAKAN DI ERA DIGITAL
          </h2>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl max-w-[800px]">
            Memanfaatkan Teknologi Untuk Mempermudah dan Mempercepat Proses
            Pembookingan lapangan Futsal.
          </h2>
          <Button
            className="bg-blue-950 mt-10 md:mt-20 h-8 md:h-10 lg:h-12 w-40 lg:w-56 text-xs md:text-sm lg:text-lg hover:bg-blue-700"
            text="Booking Sekarang"
            color="white"
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-2 rounded-full ${
              currentSlide === index ? "bg-blue-950" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Main;
