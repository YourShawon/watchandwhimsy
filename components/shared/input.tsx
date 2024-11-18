import { cn } from '@/lib/utils';
import React from 'react';

interface InputProps {
    type: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; 
    className?: string;
 
}
const Input = ({type, placeholder, onChange, onFocus, onBlur, className}: InputProps) => {
    return (
        <>
            <input
                type={type}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                className={cn('h-[45px] w-full rounded border border-green-1x py-[1px] pl-5 pr-[2px] text-[13px] text-black-1x outline-none', className)}
                placeholder={placeholder}
              />
        </>
    );
};

export default Input;