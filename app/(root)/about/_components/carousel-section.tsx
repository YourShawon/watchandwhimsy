import React from 'react';
import AboutCarousel from './about-carousel';

const CarouselSection = () => {
    return (
        <section className='container py-[50px]'>
        <div className='mb-5 flex items-center justify-center gap-1'>
          <h5 className='font-spartan text-[22px] font-semibold text-green-0x'>
            Featured
          </h5>
          <h5 className='font-spartan text-[22px] font-semibold'>Clients</h5>
        </div>
        <AboutCarousel />
      </section>
    );
};

export default CarouselSection;