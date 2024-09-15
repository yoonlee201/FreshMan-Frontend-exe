import { ProductItem } from '@/components/Product';
import ProductInfiniteList from '@/components/Product/ProductInfiniteList';
import { productItemType, productListType } from '@/types/Product/productList';
import { useGetInfiniteLikedList } from '@/hooks/query/user';

export default function MyLikePage() {
    const result = useGetInfiniteLikedList();

    return (
        <ProductInfiniteList<productItemType, productListType> result={result}>
            {(item) => (
                <ProductItem size={'m'} key={item.productSeq} {...item} />
            )}
        </ProductInfiniteList>
    );
}
