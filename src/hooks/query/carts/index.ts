import {
    deleteItemInCart,
    getInfiniteCartList,
    getCartList,
    patchCart,
    patchCartItem,
    postInCart,
} from '@/apis/carts';
import { pageSize } from '@/constants/infinitescroll';
import { cartListType } from '@/types/Product/productList';
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';

export function useGetInfiniteCartList() {
    return useInfiniteQuery<cartListType, Error>({
        queryKey: ['cartList'],
        queryFn: getInfiniteCartList,
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

export function useGetCartList() {
    const {
        data: cartList,
        isLoading: isLoadingCartList,
        isError: isErrorCartList,
    } = useQuery({
        queryKey: [`cartCount`],
        queryFn: getCartList,
    });

    return {
        cartList,
        isLoadingCartList,
        isErrorCartList,
    };
}

export function usePatchCart() {
    const { mutate: mutatePatchCart, isPending: isPendingPatchCart } =
        useMutation({
            mutationFn: (data: { checked: boolean }) => patchCart(data),
        });

    return {
        mutatePatchCart,
        isPendingPatchCart,
    };
}

export function usePatchCartItem() {
    const { mutate: mutatePatchCartItem, isPending: isPendingPatchCarItem } =
        useMutation({
            mutationFn: (data: { productSeq: number; quantity: number }) =>
                patchCartItem(data),
        });

    return {
        mutatePatchCartItem,
        isPendingPatchCarItem,
    };
}

export function usePostInCart() {
    const { mutate: mutatePostInCart, isPending: isPendingPostInCart } =
        useMutation({
            mutationFn: (data: { productSeq: number; quantity: number }) =>
                postInCart(data),
        });

    return {
        mutatePostInCart,
        isPendingPostInCart,
    };
}

export function useDeleteItemInCart() {
    const { mutate: mutateDeleteItemInCart, isPending: isPendingDeleteInCart } =
        useMutation({
            mutationFn: (data: { productSeq: number }) =>
                deleteItemInCart(data),
        });

    return {
        mutateDeleteItemInCart,
        isPendingDeleteInCart,
    };
}
