import { categriesMenuData } from '@/data';
import { CategoryMenuType } from '@/types/category';
import { Link } from 'react-router-dom';

interface PropsType {
    className?: string;
}

export default function CategoryMenu({ className }: PropsType) {
    return (
        <>
            {categriesMenuData.map((menu: CategoryMenuType) => (
                <li key={menu.id} className={className}>
                    <Link to="/">
                        <figure className="text-center">
                            <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray100">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/icons-${menu.icon}.svg`}
                                    alt={menu.name}
                                />
                            </div>
                            <figcaption className="mt-1 text-body3">
                                {menu.name}
                            </figcaption>
                        </figure>
                    </Link>
                </li>
            ))}
        </>
    );
}
