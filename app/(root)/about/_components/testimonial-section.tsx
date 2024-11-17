import { demos } from '@/constants/about';
import Image from 'next/image';
import React from 'react';

const TestimonialSection = () => {
    return (
        <section className='container py-[50px]'>
        <div className='mb-[50px] text-center'>
          <h6 className='mb-[5px] font-spartan text-sm font-semibold uppercase text-green-0x'>
            some facts
          </h6>
          <h2 className='mb-[15px] font-spartan text-3xl font-semibold text-black-solid'>
            Take a look what
            <br />
            our clients say about us
          </h2>
          <p className='mb-[5px] text-green-7x'>
            At vero eos et accusamus et iusto odio dignissimos ducimus
            quiblanditiis praesentium. ebitis <br /> nesciunt voluptatum dicta
            reprehenderit accusamus
          </p>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          {demos.map(demo => (
            <div
              key={demo.id}
              className='col-span-1 flex cursor-default rounded-[10px] border border-white-3x bg-white p-[30px] shadow-demoShadow transition-all duration-300 hover:translate-y-[-4px] hover:border-green-0x'
            >
              <Image
                src={demo.photo}
                alt={demo.name}
                className='h-[86px] w-[70px] cursor-pointer rounded-[5px] border border-transparent object-cover shadow-demoShadow transition-all duration-300 hover:translate-y-[-4px] hover:border-green-0x'
              />
              <div className='pl-[30px]'>
                <h5 className='mb-[5px] font-spartan text-sm font-semibold text-black-solid'>
                  {demo.name}
                </h5>
                <p className='mb-[5px] text-sm font-normal text-white-6x'>
                  {demo.title}
                </p>
                <p className='text-base font-normal text-green-7x'>
                  {demo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default TestimonialSection;