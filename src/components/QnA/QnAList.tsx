import { useEffect, useMemo, useState } from 'react';
import { Accordion } from '@/components/ui/accordion';
import { InquiryListType, InquiryType } from '@/types/User/inquiry';
import { useGetQnaAnswer } from '@/hooks/query/product';
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import useView from '@/hooks/observer/useView';
import QnAItem from './QnAItem';

interface IQnAList {
    result: UseInfiniteQueryResult<
        InfiniteData<InquiryListType, unknown>,
        Error
    >;
}

export default function QnAList({ result }: IQnAList) {
    const {
        data,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = result;

    const { view, onView } = useView(
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    );

    const list = useMemo(() => {
        return data?.pages.flatMap((listData) => listData.list) || [];
    }, [data]);

    const [isFetching, setIsFetching] = useState(false);
    const [qnaId, setQnaId] = useState('');
    const { answer, isSuccessAnswer } = useGetQnaAnswer(qnaId, isFetching);
    const handleSuccess = () => {
        setIsFetching(false); // 데이터 가져온 후 다시 false로 설정
    };

    const handleToggleAnswer = (value: string) => {
        setQnaId(value);
        setIsFetching(true);
    };

    useEffect(() => {
        if (isSuccessAnswer) handleSuccess();
    }, [isSuccessAnswer]);

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error...</div>;

    return (
        <Accordion
            type="single"
            collapsible
            className=""
            onValueChange={(value: string) => handleToggleAnswer(value)}
        >
            {list.map((item: InquiryType, index: number) => (
                <QnAItem
                    key={index}
                    value={index}
                    item={item}
                    disabled={!item.isAnswered}
                    answer={answer && answer.content}
                />
            ))}
            {view ? <p>Loading more...</p> : <div ref={onView} />}
        </Accordion>
    );
}
