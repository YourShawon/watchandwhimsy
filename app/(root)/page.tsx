import Products from '@/components/shared/products/products'

import HeroSlider from "./_components/_hero/hero-slider";
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
    </>
  );
}
