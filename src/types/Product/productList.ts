import { ListType } from '../listType';

export type filterType = 'price' | 'sort' | 'categorySeq';

export interface productListParamsType {
    categorySeq?: number;
    lowPrice?: number;
    highPrice?: number;
    sort?: string;
    keyword?: string;
}

export type productListType = ListType<productItemType>;
export type cartListType = ListType<cartItemType>;

export interface productItemType {
    productSeq: number;
    name: string;
    price: number;
    brand: string;
    image: string;
    favorite: boolean;
    sale?: {
        salePrice: number;
        saleRate: number;
    };
}

export interface filterItemType {
    id: number;
    name: string;
    value: string;
    checked: boolean;
}

export interface cartItemType extends productItemType {
    quantity: number;
}

export interface filterStateType {
    price: boolean;
    sort: boolean;
    [key: string]: boolean;
}
