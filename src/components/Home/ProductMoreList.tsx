import { Link } from 'react-router-dom';
import { productListType } from '@/types/Product/productList';
import { IoIosArrowBack } from 'react-icons/io';
import { ProductItem } from '../Product';
import { HorizontalScroll } from '../common';

interface PropsType {
    title: string;
    link: string;
    listData: productListType;
}

export default function ProductMoreList({ title, link, listData }: PropsType) {
    return (
        <section>
            <h2 className="flex items-center justify-between px-4 py-3 text-title2">
                {title}{' '}
                <Link to={link} className="flex py-1 text-body3 text-gray400">
                    더보기{' '}
                    <IoIosArrowBack className="rotate-180 self-baseline text-body2" />
                </Link>
            </h2>
            <HorizontalScroll elementSize="min-w-40 max-w-40">
                {listData && listData.list && listData.list.length > 0 ? (
                    listData.list.map((item) => (
                        <ProductItem
                            key={item.productSeq}
                            className=""
                            size="full"
                            productSeq={item.productSeq}
                            name={item.name}
                            price={item.price}
                            favorite={item.favorite}
                            brand={item.brand}
                            image={item.image}
                        />
                    ))
                ) : (
                    <p>현재 판매 중인 상품이 없습니다.</p>
                )}
            </HorizontalScroll>
        </section>
    );
}
