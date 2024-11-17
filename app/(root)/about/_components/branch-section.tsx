import { branches } from '@/constants/about';
import Image from 'next/image';
import React from 'react';

const BranchSection = () => {
    return (
        <section className='container py-[50px]'>
        <div className='mb-[50px] text-center'>
          <h6 className='mb-[5px] font-spartan text-sm font-semibold uppercase text-green-0x'>
            Evara Coporation
          </h6>
          <h2 className='mb-[15px] font-spartan text-3xl font-semibold text-black-solid'>
            Our main branches
            <br />
            around the world
          </h2>
          <p className='mb-[5px] text-green-7x'>
            At vero eos et accusamus et iusto odio dignissimos ducimus
            quiblanditiis praesentium. ebitis <br /> nesciunt voluptatum dicta
            reprehenderit accusamus
          </p>
        </div>
        <div className='grid grid-cols-3'>
          {branches.map(branch => (
            <div key={branch.id} className='col-span-1 px-3 text-center'>
              <Image
                src={branch.image}
                alt={branch.title}
                className='cursor-pointer rounded-[10px] border border-white-2x shadow transition-all duration-150 ease-linear hover:translate-y-[-4px] hover:border-green-0x'
              />
              <h4 className='mb-[15px] mt-[30px] font-spartan text-lg font-semibold text-black-solid'>
                {branch.title}
              </h4>
              <p className='text-green-7x'>{branch.address}</p>
              <p className='text-green-7x'>{branch.address2}</p>
            </div>
          ))}
        </div>
      </section>
    );
};

export default BranchSection;