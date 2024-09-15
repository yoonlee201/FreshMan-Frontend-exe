import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { InquiryType } from '@/types/User/inquiry';

interface IQnAItemProps {
    value: number;
    item: InquiryType;
    answer?: string;
    disabled: boolean;
}

export default function QnAItem({
    value,
    item,
    answer,
    disabled,
}: IQnAItemProps) {
    return (
        <AccordionItem
            value={`item-${value}`}
            disabled={disabled}
            className="qnaGroup px-4 data-[state=open]:bg-gray100"
        >
            <AccordionTrigger className="items-start">
                <div className="flex flex-1 flex-col items-start gap-3">
                    <div className="text-body3 text-gray400">
                        {item.postedDate.join('-')} &nbsp;&nbsp;{' '}
                        {item.memberName}
                    </div>
                    <div className="flex w-full">
                        <p className="line-clamp-3 flex-1 text-left text-body2">
                            {item.content}
                        </p>
                        <em className="flex-[0.2] text-right text-body2_b not-italic text-gray400">
                            {item.isAnswered ? (
                                <span className="text-primary">답변완료</span>
                            ) : (
                                <span className="text-gray300">답변대기</span>
                            )}
                        </em>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="pt-5">
                <h4 className="mb-7 text-body2_b">답변</h4>
                <p>{answer}</p>
            </AccordionContent>
        </AccordionItem>
    );
}
