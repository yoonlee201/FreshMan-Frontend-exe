import { Link } from 'react-router-dom';
import { productItemType } from '@/types/Product/productList';
import { formatNumber } from '@/util/formatData';
import { LikeBtn } from '../common';

interface IProductItemProps extends productItemType {
    size: 's' | 'm' | 'full';
    className?: '';
}

export default function ProductItem({
    size,
    productSeq,
    name,
    brand,
    price,
    image,
    sale,
    favorite,
    className,
}: IProductItemProps) {
    return (
        <li
            className={`${size === 's' ? 'basis-4/12' : size === 'm' ? 'basis-6/12' : 'w-full'} h-full ${className}`}
        >
            <Link
                to={`/products/${productSeq}`}
                className="block aspect-[1/1.1] h-full w-full"
            >
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover"
                />
            </Link>
            <div className={'px-2.5'}>
                <div className={'mb-1 flex items-center justify-between'}>
                    <span className={'text-body4_b'}>{brand}</span>
                    <LikeBtn favorite={favorite} />
                </div>
                <Link to={`/products/${productSeq}`}>
                    <p className={'line-clamp-2 text-body2 leading-tight'}>
                        {name}
                    </p>
                </Link>
                <div className={'mt-3'}>
                    {sale && (
                        <>
                            <del className={'block text-body4 text-gray-400'}>
                                {formatNumber(sale?.salePrice)}원
                            </del>
                            <em
                                className={
                                    'mr-2 text-body2_b not-italic text-pointRed'
                                }
                            >
                                {sale?.saleRate}%
                            </em>
                        </>
                    )}

                    <em className={'text-body2_b not-italic'}>
                        {formatNumber(price)}원
                    </em>
                </div>
            </div>
        </li>
    );
}
