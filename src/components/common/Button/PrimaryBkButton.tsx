import React from 'react';

interface IPrimaryBkButtonProps {
    children: React.ReactNode;
    primary?: boolean;
    disabled?: boolean;
    handleClick?: () => void;
    type: 'button' | 'submit' | 'reset';
    customStyle?: string;
}

export default function PrimaryBkButton({
    children,
    primary,
    handleClick,
    disabled,
    type,
    customStyle,
}: IPrimaryBkButtonProps) {
    return (
        <button
            onClick={handleClick}
            // eslint-disable-next-line react/button-has-type
            type={type}
            id="primaryBtn"
            disabled={disabled}
            className={`${primary ? 'text-primary' : 'text-white'} ${customStyle} flex h-[3.75rem] items-center justify-center rounded-lg border bg-bk px-3 py-1 text-title3_b disabled:opacity-20`}
        >
            {children}
        </button>
    );
}
