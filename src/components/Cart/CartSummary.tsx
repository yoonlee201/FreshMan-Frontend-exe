import { cartListType } from '@/types/Product/productList';
import { formatNumber } from '@/util/formatData';
import { PrimaryBkButton } from '../common/Button';

interface ICartListProps {
    listData: cartListType;
    checkItems: boolean[];
}

export default function CartSummary({ listData, checkItems }: ICartListProps) {
    const getProductTotal = () => {
        if (!listData.list || listData.list.length === 0) return 0;

        return listData.list.reduce((total, item, i) => {
            return total + (checkItems[i] ? item.price : 0);
        }, 0);
    };

    const getSaleTotal = () => {
        if (!listData.list || listData.list.length === 0) return 0;

        return listData.list.reduce((total, item, i) => {
            return (
                total +
                (checkItems[i]
                    ? item.sale
                        ? item.price - item.sale.salePrice
                        : 0
                    : 0)
            );
        }, 0);
    };

    return (
        <div className="border-t-10 border-gray100 px-4 pb-4 pt-7">
            <ul className="flex flex-col gap-2.5 pb-4 text-body1">
                <li className="flex w-full justify-between">
                    <span className="">상품 금액</span>
                    <span className="text-body1_b">
                        {formatNumber(getProductTotal())}원
                    </span>
                </li>
                <li className="flex w-full justify-between">
                    <span>할인 금액</span>
                    <span className="text-body1_b">
                        {listData.count > 0 && '-'}
                        {formatNumber(getSaleTotal())}원
                    </span>
                </li>
                <li className="flex w-full justify-between border-t pt-7">
                    <span>결제 금액</span>

                    <span className="text-title3_b text-pointRed">
                        {formatNumber(getProductTotal() - getSaleTotal())}
                    </span>
                </li>
            </ul>
            <PrimaryBkButton
                primary
                type="submit"
                customStyle="w-full underline decoration-1"
            >
                {formatNumber(getProductTotal() - getSaleTotal())}원 결제하기
            </PrimaryBkButton>
        </div>
    );
}
