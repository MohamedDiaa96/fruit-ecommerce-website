import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles

// If using navigation or pagination:
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

function MySlider({ children }) {
  return (
    <Swiper
      // Configure Swiper to use modules if needed
      modules={[Navigation]}
      spaceBetween={0}
      breakpoints={{
            640: { // sm
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: { // md
          slidesPerView: 3,
          spaceBetween: 30,
        },

        1024: { // lg
          slidesPerView: 4,
          spaceBetween: 50,
        },
    
      }}
      slidesPerView={4} // Or adjust as needed
      navigation={{ clickable: true }} // Enable navigation arrows
      loop={true} // Enable looping
      autoplay={{ delay: 3000 }} // Enable autoplay with a 3-second delay
      className="w-[64vw] h-[100%] min-sm:max-xl:w-[100%] flex min-sm:max-xl:gap-5 ">
      {children}
    </Swiper>
  );
}

export default MySlider;