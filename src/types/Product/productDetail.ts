export interface ProductOptionType {
    id: string;
    name: string;
    count: number;
}
export interface ProductDetailType {
    productSeq: number;
    name: string;
    price: number;
    sale: {
        salePrice: number;
        saleRate: number;
    };
    description: string;
    brand: string;
    imageList: [];
}
