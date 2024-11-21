import { TimerProps } from '@/interface/ads';
import React, { FC } from 'react';

const Timer: FC<TimerProps> = ({timerCounter, timerText}) => {
    return (
        <div className='flex gap-1 items-center flex-col'>
            <span className='font-medium text-[20px] text-white bg-green-0x py-[10px] px-2 md:py-3 md:px-5 rounded-sm'>{timerCounter}</span>
            <span className='text-xs text-gray-3x uppercase'>{timerText}</span>
        </div>
    );
};

export default Timer;