import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { NewArrivalProducts } from '../../mockData/data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
// import slide3 from '../../assets/slide3.jpg';
import airpods from '../../assets/airpods.jpg'
import partybox from '../../assets/partybox.png'

const images = [slide1, slide2, ];
const imageMap = {
    'oneplus.jpg': airpods,
    'insta360.jpg': airpods,
    'vacuum.jpg': airpods,
    'speaker.jpg': airpods,
  };
const Home = () => {
  return (
    <div className="bg-gray-50">
        {/* slider section */}
        <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full">
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      {/* card section */}
      <div className="flex justify-center mt-8 mb-10 gap-8">
    <div className="bg-gray-50 rounded-xl shadow-md flex items-center justify-between p-4 w-full max-w-sm">
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        All New Apple Airpods 4
      </h2>
      <a
        href="#"
        className="text-blue-600 font-medium text-sm flex items-center"
      >
        Explore <span className="ml-1"></span>
      </a>
    </div>
    <div className="w-20 h-20 bg-white rounded-xl  shadow-sm flex items-center justify-center">
      <img
        src={airpods}
        alt="Apple Airpods"
        className="w-full h-full rounded-xl object-contain"
      />
    </div>
  </div>

  <div className="bg-gray-50 rounded-xl shadow-md flex items-center justify-between p-4 w-full max-w-sm">
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        All New Apple Airpods 4
      </h2>
      <a
        href="#"
        className="text-blue-600 font-medium text-sm flex items-center"
      >
        Explore <span className="ml-1"> </span>
      </a>
    </div>
    <div className="w-20 h-20 bg-white rounded-xl  shadow-sm flex items-center justify-center">
      <img
        src={partybox}
        alt="Apple Airpods"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
  <div className="bg-gray-50 rounded-xl shadow-md flex items-center justify-between p-4 w-full max-w-sm">
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        All New Apple Airpods 4
      </h2>
      <a
        href="#"
        className="text-blue-600 font-medium text-sm flex items-center"
      >
        Explore <span className="ml-1"></span>
      </a>
    </div>
    <div className="w-20 h-20 bg-white rounded-xl  shadow-sm flex items-center justify-center">
      <img
        src={partybox}
        alt="Apple Airpods"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</div>


{/* new ariaval */}

<div className="px-4 lg:px-20 py-8">
  <div className="max-w-7xl mx-auto relative">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-900">New Arrivals</h2>
      <a
        href="#"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium"
      >
        Shop New Arrivals &nbsp;›
      </a>
    </div>

    {/* Custom Navigation Buttons */}
    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10">
      <button className="swiper-button-prev-custom bg-white border shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
    <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
      <button className="swiper-button-next-custom bg-white border shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <Swiper
      spaceBetween={24}
      slidesPerView={4}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }}
      modules={[Navigation]}
    >
      {NewArrivalProducts.map((product) => (
        <SwiperSlide key={product.id}>
        <div className="flex flex-col items-start">
          {/* White image card */}
          <div className="w-full bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition mb-3 h-54 flex items-center justify-center">
            <img
              src={imageMap[product.image]}
              alt={product.name}
              className="max-h-full object-contain"
            />
          </div>
      
          {/* Text content below image card */}
          <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.name}</h3>
          <p className="text-base text-gray-900 font-bold mb-1">{product.price}</p>
          <p className="text-xs text-gray-600 mb-1">
            or pay in 3 × <span className="font-semibold">{product.installment}</span> with{' '}
            <span className="text-blue-500 font-bold">KOKO</span>{' '}
            <span className="text-gray-400">• T&C Apply</span>
          </p>
          <p
            className={`text-sm font-medium flex items-center gap-1 ${
              product.stockType === 'in' ? 'text-green-600' : 'text-orange-500'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${
              product.stockType === 'in' ? 'bg-green-500' : 'bg-orange-500'
            }`}></span>
            {product.stock}
          </p>
        </div>
      </SwiperSlide>
      
      ))}
    </Swiper>
  </div>
</div>

    </div>
  );
};

export default Home;
