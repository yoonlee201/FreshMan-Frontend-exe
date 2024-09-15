import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate, Link } from 'react-router-dom';

interface HeaderProps {
    children: React.ReactNode;
}
interface HeaderTitleProps {
    title?: string;
    logo?: boolean;
}
interface HeaderUtilProps {
    cart: boolean;
}
interface HeaderBackProps {
    backUrl: string;
}

function TopHeaderTitle({ title, logo }: HeaderTitleProps) {
    return (
        <h1 className="flex h-full items-center justify-center text-center text-title3_b font-semibold">
            {logo ? (
                <img
                    alt="FreshMan"
                    src={`${process.env.PUBLIC_URL}/images/logo.svg`}
                    width={'114px'}
                    className="m-auto"
                />
            ) : (
                title
            )}
        </h1>
    );
}

function TopHeaderWraper({ children }: HeaderProps) {
    return (
        <header className={`relative h-12 border-b border-gray-100 px-2`}>
            {children}
        </header>
    );
}

function TopHeaderUtil({ cart }: HeaderUtilProps) {
    return (
        <div className="absolute right-0 top-0 flex h-full items-center justify-end">
            {cart && (
                <Link
                    to="/cart"
                    className={
                        'relative flex h-7 w-7 items-center justify-center'
                    }
                >
                    <HiOutlineShoppingBag className={'h-3/4 w-3/4'} />
                    <span
                        className={
                            'absolute -right-[2px] top-[2px] flex h-4 w-4 items-center justify-center rounded-full bg-[var(--pointRed)] text-body5_b text-white'
                        }
                    >
                        {'99'}
                    </span>
                </Link>
            )}
        </div>
    );
}

function TopHeaderBack({ backUrl }: HeaderBackProps) {
    const navigate = useNavigate();
    const handleRedirectBack = () => {
        navigate(-1);
    };

    const handleBack = (backUrl: string) => {
        if (backUrl) {
            return handleRedirectBack();
        }
        return navigate(backUrl);
    };

    return (
        <button
            type="button"
            onClick={() => handleBack(backUrl)}
            className="absolute left-2 top-0 h-full"
        >
            <span className="sr-only">뒤로 가기</span>
            <IoArrowBackOutline size={24} />
        </button>
    );
}

export const TopHeader = Object.assign(TopHeaderWraper, {
    Title: TopHeaderTitle,
    Util: TopHeaderUtil,
    Back: TopHeaderBack,
});
