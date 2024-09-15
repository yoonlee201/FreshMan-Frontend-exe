import { productListType } from '@/types/Product/productList';
import { pageSize } from '@/constants/infinitescroll';
import { UserType } from '@/types/User/registerUser';
import { axiosAuth } from '..';

export default async function getLikeList(): Promise<productListType> {
    try {
        const response = await axiosAuth.get('/likes?orderby=latest');
        if (response.data) return response.data;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        throw Error;
    }
}

export async function getInfiniteLikedList({
    pageParam = 1,
}: {
    pageParam?: unknown;
}): Promise<productListType> {
    try {
        const response = await axiosAuth.get<productListType>(
            '/likes?orderby=latest',
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
        throw new Error('Failed to fetch liked list');
    }
}

export async function getUserInfo(): Promise<Required<UserType>> {
    try {
        const response = await axiosAuth.get('/members');
        if (response.data) {
            return response.data.data;
        }
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        throw new Error('user 정보 불러오기에 실패했습니다');
    }
}

export async function postMember(data: UserType) {
    try {
        const response = await axiosAuth.post('/members', data);
        if (response.status !== 200) {
            return true;
        }
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}
