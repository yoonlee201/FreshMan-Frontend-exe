import { useGetInfiniteRankingList } from '@/hooks/query/product';
import ProductInfiniteList from '../../components/Product/ProductInfiniteList';
import { ProductItem } from '../../components/Product';

export default function RankingContent() {
    const result = useGetInfiniteRankingList('option');

    return (
        <ProductInfiniteList result={result}>
            {(item) => (
                <ProductItem key={item.productSeq} {...item} size={'m'} />
            )}
        </ProductInfiniteList>
    );
}
