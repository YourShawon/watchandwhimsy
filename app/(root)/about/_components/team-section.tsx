import { Button } from '@/components/ui/button';
import React from 'react';
import Team from './team';

const TeamSection = () => {
    return (
        <section className='container grid grid-cols-2 items-center gap-3 py-6'>
        <div className='col-span-1'>
          <h6 className='mb-[15px] font-spartan text-sm font-semibold uppercase text-green-0x'>
            Our Team
          </h6>
          <h2 className='mb-[15px] font-spartan text-3xl font-semibold text-black-solid'>
            Top team of experts
          </h2>
          <p className='text-green-7x'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            optio perferendis sequi mollitia quis autem ea cupiditate possimus!
          </p>
        </div>
        <div className='col-span-1 justify-self-end'>
          <Button variant={'customOutline'} size={'outline'}>
            All Members
          </Button>
        </div>
        <div className='col-span-2'>
          <Team />
        </div>
      </section>
    );
};

export default TeamSection;