import { pageSize } from '@/constants/infinitescroll';
import { reviewListType, reviewParmsType } from '@/types/Review/userReview';
import axios from 'axios';

export async function getInfiniteReview({
    productSeq,
    pageParam = 1,
}: {
    productSeq: number;
    pageParam?: unknown;
}): Promise<reviewListType> {
    try {
        const response = await axios.get<reviewListType>(
            `/products/review/${productSeq}`,
            {
                params: {
                    page: pageParam,
                },
            },
        );

        // msw 데이터 수정
        // TODO: 백엔드 연결 후 삭제
        const startIndex = (Number(pageParam) - 1) * pageSize;
        const list = response.data.list.slice(
            startIndex,
            startIndex + pageSize,
        );

        // TODO: return response.data;
        return { list, count: list.length };
    } catch (error) {
        throw new Error('Failed to fetch review list');
    }
}

export async function postReview(data: reviewParmsType) {
    try {
        const response = await axios.post('/products/reviews', data);
        if (response.data) return response.data;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        throw Error;
    }
}
