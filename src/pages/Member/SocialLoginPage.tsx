export default function SocialLoginPage() {
    const kakaoLink = `${process.env.REACT_APP_FRESHMAN_PUBLIC_API_URL}oauth2/authorization/kakao`;
    const naverLink = `${process.env.REACT_APP_FRESHMAN_PUBLIC_API_URL}oauth2/authorization/naver`;

    const handleKakaoLogin = async () => {
        window.location.href = kakaoLink;
    };

    const handleNaverLogin = () => {
        window.location.href = naverLink;
    };

    return (
        <div className="flex h-screen flex-col items-center justify-around bg-bk">
            <div className="text-center">
                <h1 className="h-16 w-56 overflow-hidden text-center">
                    <img
                        alt="freshman"
                        src="/images/logo-wt.svg"
                        className="w-56"
                    />
                </h1>
                <p className="text-body1 text-white">
                    남성 뷰티는 프레시맨으로 부터
                </p>
            </div>
            <div className="flex w-full flex-col gap-3 px-4">
                <button
                    onClick={handleKakaoLogin}
                    className="flex h-[60px] w-full items-center rounded-md bg-[#FFE300] px-8 text-[#3B1F06]"
                    type="button"
                >
                    <img
                        className="h-8 w-8"
                        src="/images/login-kakao.svg"
                        alt="카카오로 시작하기"
                    />

                    <span className="block w-full">카카오로 시작하기</span>
                </button>
                <button
                    onClick={handleNaverLogin}
                    className="flex h-[60px] w-full items-center rounded-md bg-[#2AC308] px-8 text-white"
                    type="button"
                >
                    <img
                        className="h-6 w-6"
                        src="/images/login-naver.svg"
                        alt="네이버로 시작하기"
                    />
                    <span className="block w-full">네이버로 시작하기</span>
                </button>
            </div>
        </div>
    );
}
