import { ProductOptionType } from '@/types/Product/productDetail';
import { Dispatch, SetStateAction } from 'react';
import OptionCountItem from './OptionCountItem';

interface IOptionCountProps {
    selectedList: ProductOptionType[];
    setSelectedList: Dispatch<SetStateAction<ProductOptionType[]>>;
}
export default function OptionCount({
    selectedList,
    setSelectedList,
}: IOptionCountProps) {
    return (
        <ul className={'pb-8'}>
            {selectedList.map((item: ProductOptionType) => (
                <OptionCountItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    selectedList={selectedList}
                    setSelectedList={setSelectedList}
                />
            ))}
        </ul>
    );
}
