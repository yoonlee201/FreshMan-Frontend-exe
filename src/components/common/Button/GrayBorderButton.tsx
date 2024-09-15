interface IGrayBorderButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export default function GrayBorderButton({
    children,
    onClick,
}: IGrayBorderButtonProps) {
    return (
        <button
            type={'button'}
            onClick={onClick}
            className={
                'flex h-[3.75rem] items-center justify-center rounded-lg border border-gray200 px-3 py-1 text-title3_b text-bk'
            }
        >
            {children}
        </button>
    );
}
