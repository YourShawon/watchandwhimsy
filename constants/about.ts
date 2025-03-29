import { createId } from "@paralleldrive/cuid2";
import About1 from "@/public/image/branch1.jpg"
import About2 from "@/public/image/branch2.jpg"
import About3 from "@/public/image/branch3.jpg"
import Demo1 from "@/public/image/demo1.jpg";
import Brand1 from "@/public/image/brand-1.png"
import Brand2 from "@/public/image/brand-2.png"
import Brand3 from "@/public/image/brand-3.png"
import Brand4 from "@/public/image/brand-4.png"
import Brand5 from "@/public/image/brand-5.png"
import Brand6 from "@/public/image/brand-6.png"
import { StaticImageData } from "next/image";

export interface BranchProps {
    id: string;
    image: StaticImageData;
    title: string;
    address: string;
    address2: string;
}
export const branches: BranchProps[] = [
    {
        id: createId(),
        image: About1,
        title: "New York, USA",
        address: "27 Division St, New York",
        address2: "NY 10002, USA"
    },
    {
        id: createId(),
        image: About2,
        title: "Paris, France",
        address: "22 Rue des Carmes",
        address2: "75005 Paris"
    },
    {
        id: createId(),
        image: About3,
        title: "Jakarta, Indonesia",
        address: "2476 Raya Yogyakarta,",
        address2: "89090 Indonesia"
    },
]

export const demos = [
    {
        id: createId(),
        photo: Demo1,
        name: "J. Bezos",
        title: "Adobe Jsc",
        description: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas."`
    },
    {
        id: createId(),
        photo: Demo1,
        name: "J. Bezos",
        title: "Adobe Jsc",
        description: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas."`
    },
    {
        id: createId(),
        photo: Demo1,
        name: "J. Bezos",
        title: "Adobe Jsc",
        description: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas."`
    },
    {
        id: createId(),
        photo: Demo1,
        name: "J. Bezos",
        title: "Adobe Jsc",
        description: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas."`
    },
    {
        id: createId(),
        photo: Demo1,
        name: "J. Bezos",
        title: "Adobe Jsc",
        description: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas."`
    },
    {
        id: createId(),
        photo: Demo1,
        name: "J. Bezos",
        title: "Adobe Jsc",
        description: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas."`
    },
]

export const aboutCarousel = [
    {
        id: createId(),
        image: Brand1
    },
    {
        id: createId(),
        image: Brand2
    },
    {
        id: createId(),
        image: Brand3
    },
    {
        id: createId(),
        image: Brand4
    },
    {
        id: createId(),
        image: Brand5
    },
    {
        id: createId(),
        image: Brand6
    },
    {
        id: createId(),
        image: Brand1
    },
    {
        id: createId(),
        image: Brand2
    },
    {
        id: createId(),
        image: Brand3
    },
    {
        id: createId(),
        image: Brand4
    },
    {
        id: createId(),
        image: Brand5
    },
    {
        id: createId(),
        image: Brand6
    },
]


