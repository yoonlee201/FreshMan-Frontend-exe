import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from 'react-router-dom';
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
    DrawerFooter,
    DrawerPortal,
} from '@/components/ui/drawer';

import { formatNumber } from '@/util/formatData';
import { filterType } from '@/types/Product/productList';
import { useGetProductList } from '@/hooks/query/product';
import { useFilterStore } from '@/store/filter';
import { GrayBorderButton, PrimaryBkButton } from '../common/Button';
import FilterBtn from './FilterBtn';

interface IFilterBottomSheetProps {
    filterName: filterType;
    isOpenFilter: boolean;
    toggleFilter: (filterName: filterType, open: boolean) => void;
}

export default function PriceBottomSheet({
    isOpenFilter,
    filterName,
    toggleFilter,
}: IFilterBottomSheetProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    console.log(location, keyword);

    const { id } = useParams();
    const [range, setRange] = useState([1000, 10000000]);
    const [price, setPrice] = useState([1000, 10000000]);

    const { filters, setFilterState } = useFilterStore();

    const { productList } = useGetProductList(
        { categorySeq: Number(id), lowPrice: price[0], highPrice: price[1] },
        isOpenFilter,
    );
    const handleChangePrice = (value: number[]) => {
        setRange(value);
    };
    const handleClickGotoProduct = () => {
        toggleFilter(filterName, false);
        const params = new URLSearchParams(location.search);
        const sortValue = params.get('sort') ?? 'newest';
        params.delete('sort');
        params.set('lowPrice', String(price[0]));
        params.set('highPrice', String(price[1]));

        const selectedFilter = filters[filterName];

        // 상태저장
        setFilterState(selectedFilter.name as filterType, {
            checked: true,
            name: filterName,
            data: {
                value: `${formatNumber(range[0])}원~${formatNumber(range[1])}원`,
            },
        });

        navigate(
            `?${params.toString()}${sortValue ? `&sort=${sortValue}` : ''}${keyword ? `&keyword=${keyword}` : ''}`,
        );
    };
    const handleChangeEnd = (value: number[]) => {
        setPrice(value);
    };

    return (
        <>
            <DrawerTrigger>
                <FilterBtn
                    close={false}
                    active={filters.price.checked}
                    filterName={filters.price.data.value}
                />
            </DrawerTrigger>
            <DrawerPortal>
                <DrawerContent className="bg-white px-4">
                    <div className="py-8">
                        <h3 className="text-title3_b">가격</h3>
                        <em className="flex justify-center py-8 text-title3_b not-italic">
                            {formatNumber(range[0])}원 ~{' '}
                            {formatNumber(range[1])}원
                        </em>
                        <Slider
                            defaultValue={[1000, 1000000]}
                            max={1000000}
                            step={10000}
                            min={10000}
                            value={range}
                            onValueCommit={handleChangeEnd}
                            onValueChange={handleChangePrice}
                        />
                    </div>
                    <DrawerFooter className="flex w-full flex-row gap-2 bg-white p-10 px-0 [&>button:last-child]:flex-1">
                        <GrayBorderButton>초기화</GrayBorderButton>
                        <PrimaryBkButton
                            handleClick={handleClickGotoProduct}
                            type="button"
                        >
                            {productList?.count} 상품보기
                        </PrimaryBkButton>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerPortal>
        </>
    );
}

export const PriceBottomSheetRoot = Drawer;
