import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
    <div className="container mx-auto">
      <Carousel infiniteLoop={true} emulateTouch={true}>
        <div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[600px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black opacity-20">
              <h2 className="text-white text-4xl mb-4 font-bold"></h2>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[600px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black opacity-20">
              <h2 className="text-white text-4xl mb-4 font-bold"></h2>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-[600px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black opacity-20">
              <h2 className="text-white text-4xl mb-4 font-bold"></h2>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[600px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black opacity-20">
              <h2 className="text-white text-4xl mb-4 font-bold"></h2>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3735718/pexels-photo-3735718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[600px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black opacity-20">
              <h2 className="text-white text-4xl mb-4 font-bold"></h2>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
