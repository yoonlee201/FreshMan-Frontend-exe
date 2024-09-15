import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { ProductReviewScore, ReviewList } from '@/components/Review';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGetInfiniteQnaList } from '@/hooks/query/product';
import { QnABtn, QnAList } from '@/components/QnA';
import TabAndContentLayout from './TabAndContentLayout';

export default function TabAndContent() {
    const { id } = useParams();
    const result = useGetInfiniteQnaList(Number(id));
    // const { productQnaList } = useGetProductQnaList(Number(id));
    // console.log(productQnaList);
    return (
        <Tabs defaultValue={'productInfo'}>
            <TabsList
                className={
                    'sticky top-0 z-30 grid h-12 grid-cols-3 rounded-none border-b border-gray200 bg-white text-gray400'
                }
            >
                <TabsTrigger
                    value={'productInfo'}
                    className={
                        '!text-body2_b data-[state=active]:text-bk data-[state=active]:shadow-none'
                    }
                >
                    {'상품정보'}
                </TabsTrigger>
                <TabsTrigger
                    value={'productReview'}
                    className={
                        '!text-body2_b data-[state=active]:text-bk data-[state=active]:shadow-none'
                    }
                >
                    리뷰
                </TabsTrigger>
                <TabsTrigger
                    value={'productQna'}
                    className={
                        '!text-body2_b data-[state=active]:text-bk data-[state=active]:shadow-none'
                    }
                >
                    {'Q&A'}
                </TabsTrigger>
            </TabsList>
            <TabsContent value={'productInfo'}>{'상품 상세'}</TabsContent>
            <TabsContent value={'productReview'}>
                <TabAndContentLayout
                    topComponent={<ProductReviewScore />}
                    bottomComponent={<ReviewList />}
                    subTitle="리뷰"
                />
            </TabsContent>
            <TabsContent value={'productQna'}>
                <TabAndContentLayout
                    topComponent={<QnABtn />}
                    bottomComponent={
                        <Suspense fallback={'dd'}>
                            <QnAList result={result} />
                        </Suspense>
                    }
                    subTitle="문의"
                />
            </TabsContent>
        </Tabs>
    );
}
