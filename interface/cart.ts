import { StaticImageData } from "next/image";

export interface ShortCartProps {
    image: StaticImageData;
    alt: string;
    name: string;
    price: number;
    quantity: number;
  }