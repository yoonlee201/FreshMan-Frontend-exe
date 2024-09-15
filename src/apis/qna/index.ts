import { InquiryListType } from '@/types/User/inquiry';
import { pageSize } from '@/constants/infinitescroll';
import { axiosAuth } from '..';

export async function getUserQnaList({
    pageParam = 1,
}: {
    pageParam?: unknown;
}): Promise<InquiryListType> {
    try {
        const response = await axiosAuth.get(`/questions/my-questions`, {
            params: {
                page: pageParam,
            },
        });
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
        throw new Error('Failed to fetch questions mypage list');
    }
}

export async function getInfiniteQnaList({
    productSeq,
    pageParam = 1,
}: {
    productSeq: number;
    pageParam?: unknown;
}): Promise<InquiryListType> {
    try {
        const response = await axiosAuth.get<InquiryListType>(
            `/questions/products/${productSeq}`,
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
        throw new Error('Failed to fetch qna list');
    }
}

export async function getQnaAnswer(
    questionSeq: number | string,
): Promise<{ content: string }> {
    try {
        const response = await axiosAuth.get(`/answers/${questionSeq}`);
        return response.data;
    } catch (error) {
        throw Error;
    }
}
