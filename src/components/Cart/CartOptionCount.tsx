import { Button } from '@/components/ui/button';
import { cartItemType } from '@/types/Product/productList';
import { formatNumber } from '@/util/formatData';
import { FaMinus, FaPlus } from 'react-icons/fa6';

interface ICartOptionCount extends cartItemType {
    itemQuantity: number;
    handleAddQuantity: () => void;
    handleMinusQuantity: () => void;
}
export default function CartOptionCount({
    itemQuantity,
    handleAddQuantity,
    handleMinusQuantity,
    ...items
}: ICartOptionCount) {
    const { price, sale } = items;

    return (
        <div className="mt-2.5 flex h-10 items-center justify-between overflow-hidden">
            <div className="flex h-9 items-center rounded-md border text-gray400">
                <Button
                    className="h-full w-9 rounded-none"
                    data-count={'add'}
                    onClick={handleMinusQuantity}
                >
                    <FaMinus />
                </Button>
                <input
                    type={'number'}
                    value={itemQuantity}
                    readOnly
                    className="h-full w-10 border-l border-r text-center text-body1_b [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <Button
                    className="h-full w-9 rounded-none"
                    data-count={'minus'}
                    onClick={handleAddQuantity}
                >
                    <FaPlus className={'text-sm'} />
                </Button>
            </div>
            <div className="flex h-full items-center gap-2.5">
                {sale ? (
                    <>
                        <p className={'text-center text-gray400 line-through'}>
                            {formatNumber(price)}원
                        </p>
                        <p className={'text-body1_b'}>
                            {`${formatNumber(sale.salePrice)}원`}
                        </p>
                    </>
                ) : (
                    <p className={'text-body1_b'}>{formatNumber(price)}원</p>
                )}
            </div>
        </div>
    );
}
