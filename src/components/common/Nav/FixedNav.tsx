import { NavLink } from 'react-router-dom';
import { GoHomeFill, GoSearch } from 'react-icons/go';
import { IoIosMenu } from 'react-icons/io';
import { FaUser } from 'react-icons/fa6';
import { PiHeartFill } from 'react-icons/pi';

export default function FixedNav() {
    const navList = [
        {
            id: 1,
            path: '/',
            name: '홈',
            icon: <GoHomeFill className={'h-[1.625rem] w-[1.625rem]'} />,
        },
        {
            id: 2,
            path: '/search',
            name: '검색',
            icon: <GoSearch className={'h-[1.625rem] w-[1.625rem]'} />,
        },
        {
            id: 3,
            path: '/',
            name: '카테고리',
            icon: <IoIosMenu className={'h-[1.625rem] w-[1.625rem]'} />,
        },
        {
            id: 4,
            path: '/favorite',
            name: '찜',
            icon: <PiHeartFill className={'h-[1.625rem] w-[1.625rem]'} />,
        },
        {
            id: 5,
            path: '/mypage',
            name: '마이',
            icon: <FaUser />,
        },
    ];

    return (
        <nav
            className={
                'fixed bottom-0 left-0 flex w-full justify-around bg-gray100 py-3'
            }
        >
            {navList.map((item) => (
                <li
                    key={item.id}
                    className={
                        'flex h-10 w-10 list-none items-center justify-center'
                    }
                >
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                            `flex flex-col items-center justify-center ${isActive ? 'text-bk' : 'text-gray400'}`
                        }
                    >
                        <span>{item.icon}</span>
                        <span className={'text-body4_b'}>{item.name}</span>
                    </NavLink>
                </li>
            ))}
        </nav>
    );
}
