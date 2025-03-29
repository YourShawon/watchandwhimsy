import { sellData } from '@/constants/sell-data';
import React from 'react';
import SellItem from './sell-item';

const SellInformation = () => {
    return (
        <div className='container grid grid-rows-3 md:grid-rows-1 gap-2 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-5'>
            {
                sellData.map((item, index) => (
                    <SellItem key={item.id} item={item} index={index}/>
                ))
            }
        </div>
    );
};

export default SellInformation;