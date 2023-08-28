import React, {useState} from 'react'
import { RxChevronLeft, RxChevronRight, RxDotFilled } from "react-icons/rx";


const ImageSlider = () => {
  const images = [
    { url: "https://i.pinimg.com/564x/02/e1/df/02e1df987255eb82b2c9a2d22b2f12f2.jpg",
      title: "Jasmine", 
    },
    {
      url: "https://i.pinimg.com/564x/cb/77/48/cb774825bf061af3f81f7d8f4c94e222.jpg",
      title: "Purple",
    },
    {
      url: "https://i.pinimg.com/564x/12/a2/32/12a2328273b38a915e35d96a7c5a9bfb.jpg",
      title: "Blue",
    },
    {
      url: "https://i.pinimg.com/564x/4d/4c/b4/4d4cb4fa06ed01efa275e4e700effefb.jpg", 
      title: "Matcha",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length -1 : currentIndex -1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) =>
  setCurrentIndex(slideIndex);

  return (
    <div className="max-w-[500px] h-[680px] w-full m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div>
        <RxChevronLeft
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/10 cursor-pointer"
          onClick={prevSlide}
          size={70}
        />
      </div>
      {/* Right Arrow */}
      <div>
        <RxChevronRight
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/10 cursor-pointer"
          onClick={nextSlide}
          size={80}
        />
      </div>
      <div className="flex top-4 justify-center py-2">
         {images.map((images, slideIndex) => ( <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>

        <RxDotFilled />
        </div>
         ))}
      </div>
    </div>
  );
}

export default ImageSlider