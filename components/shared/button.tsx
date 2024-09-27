import { ButtonComponentProps } from "@/interface/shared";
import { FC } from "react";



const Button:FC<ButtonComponentProps> = ({text, outline=false}) => {
    return (
        <>
        { outline ? <button className="rounded-[5px] border-2 border-green-0x px-5 py-[10px] text-base text-green-0x duration-200 hover:bg-green-0x hover:text-white">{text}</button> : <button className="rounded-[5px] bg-green-0x px-5 py-[10px] text-base text-white font-light duration-300 hover:bg-green-8x active:scale-95">{text}</button>}
        </>
    );
};

export default Button;