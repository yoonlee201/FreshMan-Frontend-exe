import { reviewProductType } from '@/types/Review/userReview';
import Star from './Star';

export default function ReviewItem({
    rating,
    user: { username },
    image,
    option,
    date,
    description,
}: reviewProductType) {
    const handleImgView = () => {};
    const dateObj = new Date(date);
    return (
        <li className="border-t border-gray100 pt-9 text-body3 text-gray400 first:border-t-0 first:pt-0">
            <div className="flex justify-between">
                <span className="flex gap-2">
                    <Star readonly rate={rating} w="w-4" h="h-4" />
                    {username}
                </span>
                <span>{`${dateObj.getFullYear()}.${dateObj.getMonth() + 1}.${dateObj.getDate()}`}</span>
            </div>
            <p className="mt-2">{option}</p>
            <button onClick={handleImgView} type="button" className="mt-2">
                <img
                    src={image}
                    className="h-[100px] w-[100px] object-cover"
                    alt="test"
                />
            </button>
            <p className="mt-3 text-bk">{description}</p>
        </li>
    );
}
