import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { SelectGroup } from '@radix-ui/react-select';

interface InquiryFormProps {
    contact: string;
    onChangeContactType: (value: string) => void;
    onChangeContact: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onCancelContact: () => void;
    onSaveContact: () => void;
}

export default function InquiryForm({
    contact,
    onChangeContactType,
    onChangeContact,
    onCancelContact,
    onSaveContact,
}: InquiryFormProps) {
    return (
        <div>
            <div className="mt-[30px] flex flex-grow items-center justify-center">
                <Select
                    onValueChange={(value: string) =>
                        onChangeContactType(value)
                    }
                >
                    <SelectTrigger className="h-12 w-[345px] border-gray-200 text-gray-400">
                        <SelectValue placeholder="문의 유형을 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectGroup>
                            <SelectItem value="1">{'1'}</SelectItem>
                            <SelectItem value="2">{'2'}</SelectItem>
                            <SelectItem value="3">{'3'}</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="mt-4 flex justify-center">
                <textarea
                    className="min-h-48 w-[344px] resize-none rounded-[15px] border-[1px] border-gray-200 p-2 text-body2 text-gray-400 focus:outline-none"
                    placeholder="내용을 입력해주세요."
                    value={contact}
                    maxLength={500}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                        onChangeContact(event)
                    }
                />
            </div>
            <div className="fixed bottom-8 mt-auto flex flex-row items-center justify-center">
                <Button
                    className="mr-[10px] h-[60px] w-[168px] border-[1px] border-gray-200 text-title3_b"
                    onClick={onCancelContact}
                >
                    취소
                </Button>
                <Button
                    className="h-[60px] w-[168px] border-[1px] bg-black text-title3_b text-white"
                    onClick={onSaveContact}
                >
                    등록
                </Button>
            </div>
        </div>
    );
}
