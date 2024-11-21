import React from 'react';
import { SplitBr } from './splite-br';

interface SectionHeaderProps {
    title: string;
    header: string;
    des: string;
}
const SectionHeader = ({title, header, des}: SectionHeaderProps) => {
    return (
        <>
            <div className='mb-[50px] text-center'>
          <h6 className='mb-[5px] font-spartan text-sm font-semibold uppercase text-green-0x'>
            {title}
          </h6>
          <h2 className='mb-[15px] font-spartan text-3xl font-semibold text-black-solid'>
          <SplitBr data={header}/>
          </h2>
          <p className='mb-[5px] text-green-7x'>
        <SplitBr data={des}/>
          </p>
        </div>
        </>
    );
};

export default SectionHeader;