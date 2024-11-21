import Image from 'next/image'
import About1 from '@/public/image/about-1.png'
import DynamicBreadcrumb from '@/components/shared/dynamic-breadcrumb'
import CarouselSection from './_components/carousel-section'
import TestimonialSection from './_components/testimonial-section'
import BranchSection from './_components/branch-section'
import TeamSection from './_components/team-section'
import NewsLetter from '@/components/shared/news-letter'

const About = () => {
  return (
    <>
      <section className='bg-white-2x'>
        <DynamicBreadcrumb />
      </section>
      <section className='container lg:grid lg:grid-cols-2 items-center gap-3 py-12'>
        <div className='lg:col-span-1 mb-4 lg:mb-0'>
          <h6 className='mb-[15px] font-spartan text-sm font-semibold uppercase text-green-0x'>
            Our Company
          </h6>
          <h2 className='mb-10 font-spartan text-4xl font-semibold text-black-solid'>
            We are Building The Destination For Getting Things Done
          </h2>
          <p className='mb-[5px] text-green-7x'>
            Tempus ultricies augue luctus et ut suscipit. Morbi arcu, ultrices
            purus dolor erat bibendum sapien metus.
          </p>
          <p className='text-green-7x'>
            Tempus ultricies augue luctus et ut suscipit. Morbi arcu, ultrices
            purus dolor erat bibendum sapien metus. Sit mi, pharetra, morbi arcu
            id. Pellentesque dapibus nibh augue senectus.
          </p>
        </div>
        <div className='lg:col-span-1'>
          <Image src={About1} alt='about-image' />
        </div>
      </section>
      <TeamSection/>
      <hr className='mb-6 mt-3' />
       <BranchSection/>
      <hr />
      <TestimonialSection/>
      <CarouselSection/>
     <NewsLetter/>
    </>
  )
}

export default About
