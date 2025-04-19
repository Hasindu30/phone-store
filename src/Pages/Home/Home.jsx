import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { NewArrivalProducts,BackProducts } from '../../mockData/data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
// import slide3 from '../../assets/slide3.jpg';
import airpods from '../../assets/airpods.jpg'
import partybox from '../../assets/partybox.png'
import apple from '../../assets/apple.jpg'
import speakers from '../../assets/speakers.jpg'
import cameras from '../../assets/cameras.jpg'
import acc from '../../assets/acc.jpg'
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
          <div className="w-full bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition mb-3 h-52 flex items-center justify-center">
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



{/* Back in Stock Section */}
<div className="px-4 lg:px-20 py-8">
  <div className="max-w-7xl mx-auto relative">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-900">Back in Stock</h2>
      <a
        href="#"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium"
      >
        Shop Back in Stocks &nbsp;›
      </a>
    </div>

    {/* Custom Navigation Buttons */}
    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10">
      <button className="swiper-button-prev-back bg-white border shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
    <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
      <button className="swiper-button-next-back bg-white border shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    {/* Swiper for Back Products */}
    <Swiper
      spaceBetween={24}
      slidesPerView={4}
      navigation={{
        nextEl: '.swiper-button-next-back',
        prevEl: '.swiper-button-prev-back',
      }}
      modules={[Navigation]}
    >
      {BackProducts.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="flex flex-col items-start w-full">
            {/* Image Box */}
            <div className="relative w-full bg-white rounded-xl p-4 h-60 shadow-sm flex items-center justify-center mb-3">
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Save {product.discount}%
                </span>
              )}
              <img
                src={imageMap[product.image]}
                alt={product.name}
                className="max-h-full object-contain"
              />
            </div>

            {/* Product Title */}
            <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>

            {/* Price */}
            <div className="text-sm mb-1">
              {product.oldPrice && (
                <span className="text-gray-400 line-through mr-1">{product.oldPrice}</span>
              )}
              <span className="text-red-600 font-bold">{product.price}</span>
            </div>

            {/* Installment Line */}
            <p className="text-xs text-gray-600 mb-1">
              or pay in 3 × <span className="font-semibold">{product.installment}</span> with{' '}
              <span className="text-blue-500 font-bold">KOKO</span>{' '}
              <span className="text-gray-400">• T&C Apply</span>
            </p>

            {/* Additional Details */}
            {product.colors && (
              <p className="text-xs text-gray-600 mb-1">Available in {product.colors} colors</p>
            )}
            {product.rating && (
              <p className="text-sm flex items-center gap-1 text-yellow-500 mb-1">
                ★ {product.rating}
              </p>
            )}
            <p
              className={`text-sm font-medium flex items-center gap-1 mb-1 ${
                product.stockType === 'in' ? 'text-green-600' : 'text-orange-500'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${
                product.stockType === 'in' ? 'bg-green-500' : 'bg-orange-500'
              }`}></span>
              {product.stock}
            </p>

            {/* Optional Badge */}
            {product.badge && (
              <span className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full">
                {product.badge}
              </span>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>
{/* category */}
<div className="px-4 lg:px-20 py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-900">
        Popular <span className="relative inline-block underline decoration-blue-600">Categories</span>
      </h2>
      <p className="text-gray-600 mt-2">Shop electronics in every department</p>
    </div>

    {/* Categories Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Large Category Card */}
      <div className="col-span-1 sm:col-span-2 row-span-2 relative rounded-xl overflow-hidden">
        <img
          src={apple}
          alt="Apple Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-6">
          <h3 className="text-white text-2xl font-bold mb-2">Apple Products</h3>
          <a href="#" className="text-white text-sm underline hover:opacity-80">Explore &gt;</a>
        </div>
      </div>

      {/* Small Cards */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={speakers}
          alt="Speakers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-4">
          <h3 className="text-white text-lg font-bold mb-1">Speakers</h3>
          <a href="#" className="text-white text-sm underline hover:opacity-80">Explore &gt;</a>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden">
        <img
          src={cameras}
          alt="Cameras"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-4">
          <h3 className="text-white text-lg font-bold mb-1">Cameras</h3>
          <a href="#" className="text-white text-sm underline hover:opacity-80">Explore &gt;</a>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden">
        <img
          src={acc}
          alt="Accessories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-4">
          <h3 className="text-white text-lg font-bold mb-1">Accessories</h3>
          <a href="#" className="text-white text-sm underline hover:opacity-80">Explore &gt;</a>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default Home;
