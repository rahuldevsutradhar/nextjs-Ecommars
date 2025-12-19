import React from 'react'
import Banner from "./component/Banner";
import IconText from "./component/IconText";
import RecommendationSlider from "./component/RecommendationSlider";
import { MdOutlineLocalShipping } from 'react-icons/md';
import Image from 'next/image';
import BannerTwo from './bannerTwo.png'

const page = () => {
  
  const products = [];
  
  return (
    <div >
      <Banner/>
      <div className="container mt-[80px] flex justify-between items-center">
        <IconText
          icon={<MdOutlineLocalShipping />} size={34}
          title='Free shipping'
          subtitle='On orders over $50.00'
        />
        <IconText
          icon={<MdOutlineLocalShipping />} size={34}
          title='Free shipping'
          subtitle='On orders over $50.00'
        />
        <IconText
          icon={<MdOutlineLocalShipping />} size={34}
          title='Free shipping'
          subtitle='On orders over $50.00'
        />
        <IconText
          icon={<MdOutlineLocalShipping />} size={34}
          title='Free shipping'
          subtitle='On orders over $50.00'
        />
      </div>
      <div className='my-[90px]'>
          <main className="container mx-auto px-4">
            <RecommendationSlider 
             text=' Best matching products for you'
              products={products} />
           </main>

        </div>
        
      <div className='my-[90px]'>
          <main className="container mx-auto px-4">
            <RecommendationSlider 
             text=' Best Sellers. Best selling of the month'
              products={products} />
           </main>
        </div>
        <div className="container">
          <Image src={BannerTwo}
           alt='BannerTwo'
            className="w-full h-[600px] object-cover">           
            </Image>
        </div>

    </div>
  )
}

export default page