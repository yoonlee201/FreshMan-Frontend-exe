import { useSearchParams } from 'react-router-dom';
import { useGetInfiniteSearchList } from '@/hooks/query/search';
import { useFilterStore } from '@/store/filter';
import { ProductItem } from '../Product';
import ProductInfiniteList from '../Product/ProductInfiniteList';

export default function SearchResultList() {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') ?? '';
    const lowPrice = Number(searchParams.get('lowPrice'));
    const highPrice = Number(searchParams.get('highPrice'));
    const categorySeq = Number(searchParams.get('categorySeq'));
    const sort = searchParams.get('sort') ?? 'newest';

    const { enableFilter } = useFilterStore();

    const result = useGetInfiniteSearchList({
        params: { keyword, lowPrice, highPrice, categorySeq, sort },
        status: enableFilter,
    });

    if (!result) return <div>노 리절트</div>;

    return (
        <ProductInfiniteList result={result}>
            {(item) => (
                <ProductItem size={'m'} key={item.productSeq} {...item} />
            )}
        </ProductInfiniteList>
    );
}
