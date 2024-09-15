import {
    productListParamsType,
    productListType,
} from '@/types/Product/productList';
import { pageSize } from '@/constants/infinitescroll';
import requests from '../requests';
import { BASE_URL, axiosAuth } from '..';

export async function getRecentSearchList() {
    try {
        const response = await axiosAuth.get(requests.recentSearchList);
        if (response.data) return response.data.list;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getInfiniteSearchList({
    params,
    pageParam = 1,
}: {
    params: productListParamsType;
    pageParam?: unknown;
}): Promise<productListType> {
    // categorySeq: number, lowPrice?: number, highPrice?: number, sort?: string, keyword?: string
    const url = new URL(`/products`, BASE_URL);

    Object.entries(params).forEach(([key, value]) => {
        if (value) {
            url.searchParams.append(key, value.toString());
        }
    });

    url.searchParams.append('pages', Number(pageParam).toString());

    try {
        const response = await axiosAuth.get(url.toString());

        // msw 데이터 수정
        // TODO: 백엔드 연결 후 삭제
        const startIndex = (Number(pageParam) - 1) * pageSize;
        const list = response.data.list.slice(
            startIndex,
            startIndex + pageSize,
        );

        return { list, count: list.length };
    } catch (error) {
        throw new Error('Failed to fetch search list');
    }
}

export async function deleteRecentSearch(index: number) {
    try {
        const response = await axiosAuth.delete(
            `${requests.recentSearchList}?index=${index}`,
        );
        if (response.data) return response.data.list;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}
