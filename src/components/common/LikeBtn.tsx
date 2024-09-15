import { useState } from 'react';
import { PiHeart, PiHeartFill } from 'react-icons/pi';

interface ILikeBtnProps {
    size?: 'm' | 'lg';
    favorite: boolean;
}

export default function LikeBtn({ size, favorite }: ILikeBtnProps) {
    const btnSize = {
        m: 'h-8 w-8',
        lg: 'w-10 h-10',
    };
    const [isClicked, setIsClicked] = useState(favorite);

    const handleClickLike = () => {
        setIsClicked((prev) => !prev);
    };

    return (
        <button
            id={'likeBtn'}
            onClick={handleClickLike}
            type={'button'}
            className={`${size ? btnSize[size] : btnSize.m} flex items-center justify-center`}
        >
            {isClicked ? (
                <PiHeartFill className={`h-5/6 w-10/12 text-pointRed`} />
            ) : (
                <PiHeart className={`h-5/6 w-10/12 text-gray300`} />
            )}
        </button>
    );
}
