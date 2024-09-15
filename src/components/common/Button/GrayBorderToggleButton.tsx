import { IoIosArrowDown } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';

interface IGrayBorderToggleButtonProps {
    children: string;
    onClick?: () => void;
    close: boolean;
    active?: boolean;
}

export default function GrayBorderToggleButton({
    children,
    onClick,
    close,
    active,
}: IGrayBorderToggleButtonProps) {
    return (
        <button
            type={'button'}
            onClick={onClick}
            className={`${active ? 'bg-bk text-white' : 'border border-gray200 bg-white'} flex items-center justify-center gap-1 rounded-lg px-3 py-1 text-body2`}
        >
            {children}

            {close ? (
                <IoCloseOutline
                    className={`${active ? 'text-white' : 'text-bk'}`}
                />
            ) : (
                <IoIosArrowDown
                    className={`${active ? 'text-white' : 'text-bk'}`}
                />
            )}
        </button>
    );
}
