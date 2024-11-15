import Products from '@/app/(root)/_components/products/products'

import HeroSlider from "./_components/_hero/hero-slider";
import Summary from './_components/summary';


export default function Home() {
  return (
    <>
      <HeroSlider/>
      <Products />
      <Summary />
    </>
  );
}
