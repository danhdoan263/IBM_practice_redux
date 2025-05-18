type ProductsCardProps = {
    image?: string;
    name?: string;
    price?: number;
    description?: string;
    className?: string;
    width?: string;
    height?: string;
    buy?: boolean;
    buyClassName?: string;
    onClick?: () => void;
    count?: number;
    remove?: boolean;
    increase?: boolean;
    onClickIncrease?: () => void;
}
const ProductsCard = ({
    image,
    name,
    price,
    description,
    className,
    width,
    height,
    buy,
    buyClassName,
    onClick,
    onClickIncrease,
    count,
    remove,
    increase
}: ProductsCardProps) => {
    return (
        <div className={className}>
            <img src={image} alt="tree" style={{ width: width, height: height, objectFit: "cover" }} />
            <h3>{name}</h3>
            <div className="description flex flex-col gap-4">
                <p style={{ width: width }}>{description}</p>
                <p>{price}</p>
                {count && <p>Count: {count}</p>}
            </div>
            {(buy) && <button className={buyClassName} onClick={onClick}>{'Buy'}</button>}
            {
                (increase || remove) &&
                <div className='flex gap-2 absolute right-0 bottom-0'>
                    {increase && <button className=' bg-teal-500 text-white px-4 py-2 rounded-md' onClick={onClickIncrease}>Increase</button>}

                    {remove && <button className=' bg-red-400 text-white px-4 py-2 rounded-md' onClick={onClick}>Remove</button>}
                </div>
            }
        </div>
    )
}

export default ProductsCard