import { FaStar } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import { useGetProductDetail } from '@/hooks/query/product';
import { formatNumber } from '@/util/formatData';
import { ProductSlider } from '../ProductSlider';

export default function ProductInfo() {
    const { id } = useParams();
    const { productInfo } = useGetProductDetail(Number(id));

    return (
        <section>
            <ProductSlider isSetCount>
                <ProductSlider.Img images={['', '']} />
            </ProductSlider>
            <div className={'px-2.5 pb-10'}>
                <div className={'mb-2 flex items-center justify-between'}>
                    <span className={'text-body2'}>{productInfo?.brand}</span>
                </div>
                <p className={'mb-4 text-title3'}>{productInfo?.name}</p>
                <div className={'flex gap-1'}>
                    <FaStar className={'text-primary-review'} />
                    <span className={'text-body3'}>{'3.5(1,500개)'}</span>
                </div>
                <div className={'mt-3'}>
                    {productInfo?.sale.salePrice ? (
                        <>
                            <del
                                className={
                                    'text-body block text-body4 text-gray-400'
                                }
                            >
                                {productInfo?.price &&
                                    formatNumber(productInfo.price)}
                                원
                            </del>
                            <div className={'flex justify-between'}>
                                <em
                                    className={
                                        'text-body2_b text-subTitle not-italic'
                                    }
                                >
                                    {formatNumber(productInfo.sale.salePrice)}
                                </em>
                                <em
                                    className={
                                        'mr-2 text-body2_b text-subTitle not-italic text-pointRed'
                                    }
                                >
                                    {productInfo.sale.saleRate}%
                                </em>
                            </div>
                        </>
                    ) : (
                        <div className={'flex justify-between'}>
                            <em
                                className={
                                    'text-body2_b text-subTitle not-italic'
                                }
                            >
                                {productInfo?.price}
                            </em>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
