import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles

// If using navigation or pagination:
import { Autoplay, EffectCards, EffectCoverflow, EffectCreative, EffectFade, EffectFlip, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { productdata } from "../data/ProductData";

export const selectedorderIDs = [34, 37, 33, 35, 38, 40, 39]
export const selectedproductorder = selectedorderIDs.map((id) => productdata.find((item) => item.id === id))

function MySlider({ children, swipertype }) {
  return (
    <>  {swipertype === "A" ?
      <Swiper
        // Configure Swiper to use modules if needed
        modules={[Navigation, Autoplay]}
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
      </Swiper> : swipertype === "B" ?
        <Swiper
          // Configure Swiper to use modules if needed
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          breakpoints={{
            640: { // sm
              slidesPerView: 1,
              spaceBetween: 0,
              centeredSlides: true,
              centeredSlidesBounds:true,
            },
            768: { // md
              slidesPerView: 2,
              spaceBetween: 0,
              centeredSlides: false
            },
            1164: { // lg
              slidesPerView: 3,
              spaceBetween: 0,

            },
            1430: { // xl
              slidesPerView: 4,
              spaceBetween: 0,

            },

          }}
          slidesPerView={4} // Or adjust as needed
          navigation={{ clickable: true }} // Enable navigation arrows
          loop={true} // Enable looping
          autoplay={{ delay: 3000 }} // Enable autoplay with a 3-second delay
          className="w-[85vw] min-[1430px]:w-[86vw] min-sm:max-xl:justify-center flex min-sm:max-xl:gap-15 ">
          {children}
        </Swiper> : ""} </>
  );
}

export default MySlider;