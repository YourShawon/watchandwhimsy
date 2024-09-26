import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const SliderIcon = ({right=false, left=false}) => {
    return (
        <>
            <span className="hidden group-hover:inline-block cursor-pointer p-5 bg-green-2x hover:bg-green rounded-full text-green transition hover:text-white">
           {right && <FaChevronRight />}
           {left && <FaChevronLeft />}
            </span>
        </>
    );
};

export default SliderIcon;