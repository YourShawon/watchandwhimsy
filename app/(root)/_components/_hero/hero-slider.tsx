import { Carousel } from 'flowbite-react'
import SliderIcon from './slider-icon'
import SlideItem from './slide-item'
import { slideData } from '@/constants/hero-slider'

const HeroSlider = () => {
  return (
    <div className='h-56 sm:h-64 xl:h-80 2xl:h-96 px-5'>
      <Carousel slideInterval={5000} leftControl={<SliderIcon left/>} rightControl={<SliderIcon right/>} >
      {
        slideData.map(item => (
            <SlideItem key={item.id} item={item}/>
        ))
      }
      </Carousel>
    </div>
  )

}

export default HeroSlider
