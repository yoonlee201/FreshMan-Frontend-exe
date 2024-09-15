import { productItemType, productListType } from '@/types/Product/productList';
import ProductItem from './ProductItem';

interface IProductListProps {
    listData: productListType;
    size: 's' | 'm';
}

export default function ProductList({ listData, size }: IProductListProps) {
    return (
        <ul className={'flex flex-wrap gap-y-10'}>
            {listData.list.map((item: productItemType) => (
                <ProductItem key={item.productSeq} {...item} size={size} />
            ))}
        </ul>
    );
}
