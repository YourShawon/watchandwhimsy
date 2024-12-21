import Products from '@/app/(root)/_components/products/products'

import HeroSlider from "./_components/_hero/hero-slider";
import Summary from './_components/summary';

import SellInformation from './_components/_sell-section';
import Ads from './_components/_ads';
import Feature from './_components/_feature';
import Test from './_components/test';

export default function Home() {
  return (
    <>
      <HeroSlider/>
      <Products />
      <SellInformation/>
      <Ads/>
      <Feature/>
      <Summary />
      <Test />
    </>
  );
}
