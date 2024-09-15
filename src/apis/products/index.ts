import {
    productListParamsType,
    productListType,
} from '@/types/Product/productList';
import { pageSize } from '@/constants/infinitescroll';
import axios from 'axios';
import { ProductDetailType } from '@/types/Product/productDetail';
import { BASE_URL, axiosAuth } from '..';

export async function getProductList(
    params: productListParamsType,
): Promise<productListType> {
    // categorySeq: number, lowPrice?: number, highPrice?: number, sort?: string
    const url = new URL(`/products`, BASE_URL);

    Object.entries(params).forEach(([key, value]) => {
        if (value) {
            url.searchParams.append(key, value.toString());
        }
    });
    try {
        const response = await axios.get(url.toString());
        return response.data;
    } catch (error) {
        throw Error;
    }
}

export async function getProductDetail(
    productSeq: number,
): Promise<ProductDetailType> {
    try {
        const response = await axiosAuth.get(`/products/${productSeq}`);
        return response.data.data;
    } catch (error) {
        throw Error;
    }
}

export async function getInfiniteRankingList({
    option,
    pageParam = 1,
}: {
    option: string;
    pageParam?: unknown;
}): Promise<productListType> {
    try {
        const response = await axios.get<productListType>('/products/ranking', {
            params: {
                option,
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
        throw new Error('Failed to fetch product ranking list');
    }
}

export async function getInfiniteSaleList({
    pageParam = 1,
}: {
    pageParam?: unknown;
}): Promise<productListType> {
    try {
        const response = await axios.get<productListType>('/products/onsale', {
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
        throw new Error('Failed to fetch product sale list');
    }
}
