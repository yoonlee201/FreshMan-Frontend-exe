import { IoCheckmark, IoOptionsOutline } from 'react-icons/io5';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';

interface ISearchInput {
    query: string;
    options: string[];
    optionIndex: number;
    handleQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleQuerySearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    handleSearchOption: (index: number) => void;
    handleCancel: () => void;
}

export default function SearchInput({
    query,
    options,
    optionIndex,
    handleQuery,
    handleQuerySearch,
    handleSearchOption,
    handleCancel,
}: ISearchInput) {
    return (
        <div className="mb-12 flex flex-row justify-center">
            <div className="relative flex flex-row items-center justify-start rounded-[6px] bg-gray-200 text-black">
                <input
                    className="w-[295px] rounded-[6px] bg-gray-200 p-1 focus:outline-none"
                    type="text"
                    value={query}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleQuery(e)
                    }
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                        handleQuerySearch(e)
                    }
                />
                <Drawer>
                    <DrawerTrigger asChild>
                        <div className="bg-white">
                            <IoOptionsOutline
                                className="absolute right-2 top-1 cursor-pointer text-black"
                                size={24}
                            />
                            <DrawerContent className="flex items-center justify-center border-none shadow-none">
                                <div className="max-w-defult w-full rounded-lg bg-white p-4 shadow-lg">
                                    {options.map(
                                        (option: string, index: number) => (
                                            <div
                                                className="mx-2 flex h-16 flex-row items-center justify-between border-b-[1px] border-gray-200"
                                                key={index}
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleSearchOption(
                                                            index,
                                                        )
                                                    }
                                                >
                                                    <p
                                                        className={`${optionIndex === index ? 'font-bold' : 'text-gray-200'}`}
                                                    >
                                                        {option}
                                                    </p>
                                                </button>
                                                {optionIndex &&
                                                optionIndex === index ? (
                                                    <IoCheckmark size={24} />
                                                ) : (
                                                    <div />
                                                )}
                                            </div>
                                        ),
                                    )}
                                </div>
                            </DrawerContent>
                        </div>
                    </DrawerTrigger>
                </Drawer>
            </div>
            <button className="h-8 w-12" type="button" onClick={handleCancel}>
                취소
            </button>
        </div>
    );
}
