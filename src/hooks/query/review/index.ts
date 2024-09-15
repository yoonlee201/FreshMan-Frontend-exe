import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { getInfiniteReview, postReview } from '@/apis/review';
import { pageSize } from '@/constants/infinitescroll';
import { reviewListType, reviewParmsType } from '@/types/Review/userReview';

export function useGetInfiniteReview(productSeq: number) {
    return useInfiniteQuery<reviewListType, Error>({
        queryKey: ['review'],
        queryFn: ({ pageParam }) =>
            getInfiniteReview({ pageParam, productSeq }),
        initialPageParam: undefined,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.length + 1;
            // 상품이 0개이거나 rowsPerPage보다 작을 경우 마지막 페이지로 인식한다.
            return lastPage?.count === 0 || lastPage?.count < pageSize
                ? undefined
                : nextPage;
        },
        retry: 0,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
    });
}

export function usePostReview() {
    const { isPending: isPendingPostReview, mutate: mutatePostReview } =
        useMutation({
            mutationFn: (data: reviewParmsType) => postReview(data),
        });

    return {
        mutatePostReview,
        isPendingPostReview,
    };
}
