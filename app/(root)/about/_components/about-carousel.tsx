'use client'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import { aboutCarousel } from '@/constants/about'
import Image from 'next/image'
const AboutCarousel = () => {
  return (
    <>
      <Carousel
      opts={{
        loop: true,
        
      }}
        plugins={[
          Autoplay({
            delay: 3000
          }), 
        ]}
      >
        <CarouselContent>
            {
                aboutCarousel.map(item => (
                     <CarouselItem key={item.id} className='basis-1/5'>
                        <Image className='py-[10px] grayscale transition-all duration-150 hover:grayscale-0 cursor-pointer' src={item.image} alt='carousel image'/>
                     </CarouselItem>
                ))
            }
         
        </CarouselContent>
      </Carousel>
    </>
  )
}

export default AboutCarousel
