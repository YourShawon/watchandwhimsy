import AdsItem from './ads-item'

const Ads = () => {
  return (
    <div className='container grid grid-rows-2 gap-4 lg:grid-rows-1 lg:grid-cols-2 py-6'>
      <AdsItem
        bgImage={
          'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/menu-banner-7.jpg'
        }
        headerTop={'Deal of the Day.'}
        headerPara={'Limited quantities.'}
        heading={'Summer Collection New Morden Design'}
        newPrice={'139.00'}
        oldPrice={'160.99'}
        count1={'03'}
        count2={'09'}
        count3={'45'}
        count4={'51'}
        
      />
      <AdsItem
        bgImage={
          'https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/menu-banner-8.jpg'
        }
        headerTop={'Men Clothing'}
        diffColor
        headerPara={'Shirt & Bag'}
        heading={'Try something new on vacation'}
        newPrice={'178.00'}
        oldPrice={'256.99'}
        count1={'10'}
        count2={'08'}
        count3={'32'}
        count4={'54'}
        
      />
    </div>
  )
}

export default Ads
