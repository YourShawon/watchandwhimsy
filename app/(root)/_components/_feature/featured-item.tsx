
const FeaturedItem = ({item}:{item:any}) => {
    return (
        <div className="py-[25px] px-[15px] text-center border border-green-4x flex justify-center items-center flex-col gap-[15px] hover:translate-y-[-6px] transition ease-in-out duration-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.title} />
            <h4 style={{backgroundColor: `${item.theme}`}} className="text-[13px] font-bold inline-block rounded-sm text-green-0x hover:text-green-8x pt-[9px] px-2 pb-[6px] font-spartan">{item.title}</h4>
        </div>
    );
};

export default FeaturedItem;