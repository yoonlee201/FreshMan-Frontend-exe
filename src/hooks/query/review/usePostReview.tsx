import { postReview } from '@/apis/review';
import { reviewParmsType } from '@/types/Review/userReview';
import { useMutation } from '@tanstack/react-query';

export default function usePostReview() {
    const { isPending: isPendingPostReview, mutate: mutatePostReview } =
        useMutation({
            mutationFn: (data: reviewParmsType) => postReview(data),
        });

    return {
        mutatePostReview,
        isPendingPostReview,
    };
}
