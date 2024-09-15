import ProductBuyBtn from '@/components/Product/ProductBuyBtn';
import { TabAndContent } from '@/components/Product/ProductDetail';
import ProductInfo from '@/components/Product/ProductDetail/ProductInfo';

export default function ProductDetailPage() {
    return (
        <div className="pb-28">
            <ProductInfo />
            <TabAndContent />
            <ProductBuyBtn />
        </div>
    );
}
