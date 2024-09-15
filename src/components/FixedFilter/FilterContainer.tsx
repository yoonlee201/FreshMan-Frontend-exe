import { useEffect, useState } from 'react';
import { filterStateType, filterType } from '@/types/Product/productList';
import { useFilterStore } from '@/store/filter';
import { HorizontalScroll, SortBottomSheetContent } from '../common';
import PriceBottomSheet, { PriceBottomSheetRoot } from './PriceBottomSheet';
import { SortBottomSheetRoot } from '../common/SortBottomSheetContent';

interface IProps {
    showCategory?: boolean;
}

export default function FilterContainer({ showCategory }: IProps) {
    const [filters, setFilters] = useState<filterStateType>({
        price: false,
        sort: false,
        categorySeq: false,
    });

    const { setEnableFilter, initFilter } = useFilterStore();
    const toggleFilter = (filterName: filterType, open: boolean) => {
        setFilters((prevFilter) => ({
            ...prevFilter,
            [filterName]: open,
        }));
        // 데이터 패칭 비활성화
        if (open) setEnableFilter(false);
    };

    const filterList = [
        {
            id: 1,
            // name: '최신순',
            component: (
                <SortBottomSheetRoot
                    open={filters.sort}
                    onOpenChange={(open) => toggleFilter('sort', open)}
                >
                    <SortBottomSheetContent
                        toggleFilter={toggleFilter}
                        filterName="sort"
                    />
                </SortBottomSheetRoot>
            ),
        },
        {
            id: 2,
            name: '가격',
            component: (
                <PriceBottomSheetRoot
                    open={filters.price}
                    onOpenChange={(open) => toggleFilter('price', open)}
                >
                    <PriceBottomSheet
                        toggleFilter={toggleFilter}
                        filterName="price"
                        isOpenFilter={filters.price}
                    />
                </PriceBottomSheetRoot>
            ),
        },
        {
            id: 3,
            name: '카테고리',
            component: (
                <SortBottomSheetRoot
                    open={filters.categorySeq}
                    onOpenChange={(open) => toggleFilter('categorySeq', open)}
                >
                    <SortBottomSheetContent
                        toggleFilter={toggleFilter}
                        filterName="categorySeq"
                    />
                </SortBottomSheetRoot>
            ),
        },
    ];

    const newFilterdList = showCategory
        ? filterList.filter((item) => item.name !== '카테고리')
        : filterList;

    useEffect(() => {
        return () => {
            // unmount시 필터 삭제
            initFilter();
        };
    }, []);

    return (
        <div className={`sticky top-0 z-[21] bg-white p-4`}>
            <HorizontalScroll parentStyle="gap-2.5">
                {newFilterdList.map((item) => (
                    <li key={item.id}>{item.component}</li>
                ))}
            </HorizontalScroll>
        </div>
    );
}
