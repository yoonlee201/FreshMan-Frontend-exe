import { GrDeliver } from 'react-icons/gr';
import { MdOutlineRateReview } from 'react-icons/md';
import { GoHeartFill, GoChevronRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useGetUserInfo } from '@/hooks/query/user';

export default function MyPageInformation() {
    const navigate = useNavigate();
    const { userInfo } = useGetUserInfo();

    return (
        <div>
            {userInfo && (
                <>
                    <div className="mx-4 mt-8 flex flex-row items-center justify-between">
                        <div>
                            <h2 className="mb-2 text-2xl font-bold">{`${userInfo.name}님`}</h2>
                            <p className="text-sm text-gray-400">
                                {userInfo.email}
                            </p>
                        </div>
                        <GoChevronRight
                            size={24}
                            onClick={() => navigate('/mypage/info')}
                        />
                    </div>
                    <div className="mx-16 my-4 flex flex-row justify-between">
                        <div className="flex flex-col items-center justify-center">
                            <GrDeliver size={30} />
                            <p>배송지 관리</p>
                            <Button
                                className="text-[#7BDFF2]"
                                onClick={() => navigate('/mypage/address')}
                            >
                                보기
                            </Button>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <MdOutlineRateReview size={30} />
                            <p>나의 리뷰</p>
                            <Button className="text-[#7BDFF2]">
                                {/* {userInfo.review} */}
                            </Button>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <GoHeartFill size={30} />
                            <p>찜</p>
                            <Button
                                className="text-[#7BDFF2]"
                                onClick={() => navigate('/mypage/like')}
                            >
                                {/* {userInfo.heart} */}
                            </Button>
                        </div>
                    </div>
                    <div className="border-b-[1px] border-b-gray-100" />
                    <div>
                        <p className="my-5 text-body3 text-gray-400">문의</p>
                        <div className="my-5 flex flex-row justify-between">
                            <p className="text-sm">문의 내역</p>
                            <GoChevronRight
                                className="text-gray-400"
                                size={24}
                                onClick={() => navigate('/inquiry/list')}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
