import { QnAList } from '@/components/QnA';
import { TopHeader } from '@/components/common';
import { useGetUserQnaList } from '@/hooks/query/user';

export default function MyQnAPage() {
    const result = useGetUserQnaList();

    return (
        <>
            <TopHeader>
                <TopHeader.Title title="상품 문의" />
                <TopHeader.Back backUrl="-1" />
            </TopHeader>
            <QnAList result={result} />
        </>
    );
}
