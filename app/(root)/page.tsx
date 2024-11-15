import Products from '@/app/(root)/_components/products/products'

import HeroSlider from "./_components/_hero/hero-slider";
import Summary from './_components/summary';

import SellInformation from './_components/_sell-section';
import Ads from './_components/_ads';
import Feature from './_components/_feature';

export default function Home() {
  return (
    <>
    <HeroSlider/>
    <SellInformation/>
    <Products />
    <Ads/>
    <Feature/>
    <Summary />
    </>
  );
}
