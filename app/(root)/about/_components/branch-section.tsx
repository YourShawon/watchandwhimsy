import SectionHeader from '@/components/shared/section-header'
import { branches } from '@/constants/about'
import Image from 'next/image'
import React from 'react'

const BranchSection = () => {
  return (
    <section className='container py-[50px]'>
      <SectionHeader
        title='Evara Coporation'
        des='At vero eos et accusamus et iusto odio dignissimos ducimus
            quiblanditiis praesentium. ebitis <br /> nesciunt voluptatum dicta
            reprehenderit accusamus'
        header='Our main branches
            <br />
            around the world'
      />
      <div className='grid-cols-3 sm:grid'>
        {branches.map(branch => (
          <div
            key={branch.id}
            className='mb-4 px-3 text-center sm:col-span-1 sm:mb-0'
          >
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
  )
}

export default BranchSection
