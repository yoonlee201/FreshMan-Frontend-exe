import { useGetUserInfo } from '@/hooks/query/user';
import { useAuthStore } from '@/store/user';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SocialLoginRedirectPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const accessToken = new URLSearchParams(location.search).get(
        'access_token',
    );
    const [isToken, setIsToken] = useState(false);
    const { userInfo, isLoadingUserInfo } = useGetUserInfo(isToken);
    const { setUserInfo } = useAuthStore();

    useEffect(() => {
        if (accessToken) {
            // 로컬스토리지 저장
            localStorage.setItem('accessToken', accessToken);
            setIsToken(true);
        } else {
            alert('로그인에 실패했습니다');
            navigate('/login');
        }
    }, []);

    // user 정보 없을 시 가입화면으로 리다이렉트
    useEffect(() => {
        if (!isToken || isLoadingUserInfo) return;

        if (userInfo?.initialized) {
            setUserInfo(userInfo);
            navigate('/');
        } else {
            navigate('/auth/register');
        }
    }, [userInfo, isToken, isLoadingUserInfo]);

    return <div>로딩중...</div>;
}
