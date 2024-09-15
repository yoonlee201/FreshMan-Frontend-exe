import { useMemo } from 'react';
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import { productItemType } from '@/types/Product/productList';
import useView from '@/hooks/observer/useView';
import { ListType } from '@/types/listType';
// import ProductItem from './ProductItem';

interface IProductInfiniteList<T, LT> {
    result: UseInfiniteQueryResult<InfiniteData<LT, unknown>, Error>;
    children: (item: T) => React.ReactNode;
}

export default function ProductInfiniteList<
    T extends productItemType,
    LT extends ListType<T>,
>({ result, children }: IProductInfiniteList<T, LT>) {
    const {
        data,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = result;

    const { view, onView } = useView(
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    );

    const list = useMemo(() => {
        return data?.pages.flatMap((listData) => listData.list) || [];
    }, [data]);

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error...</div>;

    return (
        <ul className={'flex flex-wrap gap-y-10'}>
            {list.map((item) => children(item))}
            {view ? <p>Loading more...</p> : <div ref={onView} />}
        </ul>
    );
}
