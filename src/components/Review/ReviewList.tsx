import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useView from '@/hooks/observer/useView';
import { useGetInfiniteReview } from '@/hooks/query/review';
import ReviewItem from './ReviewItem';

export default function ReviewList() {
    const { id } = useParams();

    const {
        data,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useGetInfiniteReview(Number(id));

    console.log(data?.pages);

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
        <ul className="flex flex-col gap-9">
            {list.map((item, index) => (
                <ReviewItem key={index} {...item} />
            ))}
            {view ? <p>Loading more...</p> : <div ref={onView} />}
        </ul>
    );
}
