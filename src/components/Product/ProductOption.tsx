import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { useState } from 'react';
import { ProductOptionType } from '@/types/Product/productDetail';

import { GrayBorderButton, PrimaryBkButton } from '../common/Button';
import { OptionCount } from './ProductDetail';

export default function ProductOption() {
    const [selectedList, setSelectedList] = useState<ProductOptionType[]>([]);

    const handleClickBuy = () => {};
    const handleChangeOption = (value: string) => {
        setSelectedList((prevList) => [
            ...prevList,
            {
                id: value,
                name: value,
                count: 0,
            },
        ]);
    };

    return (
        <div className="pt-4">
            <div className={'max-h-40 overflow-y-auto px-4'}>
                <Select onValueChange={handleChangeOption}>
                    <SelectTrigger
                        className={
                            'h-12 w-full border-gray200 bg-white text-gray400'
                        }
                    >
                        <SelectValue placeholder={'옵션을 선택해주세요.'} />
                    </SelectTrigger>
                    <SelectContent className={'h-56 bg-white'}>
                        <SelectGroup>
                            <SelectLabel>{'옵션을 선택해주세요.'}</SelectLabel>
                            <SelectItem value={'est'}>
                                {'라임썬데이 팩 1'}
                            </SelectItem>
                            <SelectItem value={'cst'}>
                                {'라임썬데이 팩 2'}
                            </SelectItem>
                            <SelectItem value={'mst'}>
                                {'라임썬데이 팩 3'}
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <OptionCount
                    selectedList={selectedList}
                    setSelectedList={setSelectedList}
                />
            </div>
            {/* 하단 버튼 & 구매수량 */}
            <div
                className={
                    'sticky bottom-0 left-0 w-full border-t border-gray200 bg-white px-4 pb-4 pt-6'
                }
            >
                <dl className={'mb-3 flex justify-between'}>
                    <dt className={'text-body2'}>
                        {'구매수량 '}
                        <em className={'not-italic'}>{selectedList.length}</em>
                        {'개'}
                    </dt>
                    <dd className={'text-title3_b'}>{'총 812,222원'}</dd>
                </dl>
                <div className={'flex gap-2.5 [&>button]:flex-1'}>
                    <GrayBorderButton>장바구니</GrayBorderButton>
                    <PrimaryBkButton
                        handleClick={handleClickBuy}
                        primary
                        type="button"
                    >
                        구매하기
                    </PrimaryBkButton>
                </div>
            </div>
        </div>
    );
}
