import { featureItem } from '@/constants/feature';
import React from 'react';
import FeaturedItem from './featured-item';


const Feature = () => {
    return (
        <div className='container py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 rounded-[6px]'>
            {
                featureItem.map(item => <FeaturedItem key={item.id} item={item}/>)
            }
        </div>
    );
};

export default Feature;