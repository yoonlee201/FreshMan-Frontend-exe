import { PrimaryBkButton } from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';

export default function RegisterSuccessPage() {
    const navigate = useNavigate();

    return (
        <section className="flex h-screen flex-col justify-between pt-10">
            <div>
                <div
                    className={`flex h-80 flex-col justify-end bg-login-success bg-center bg-no-repeat`}
                />
                <div className="pt-6 text-center leading-7">
                    <p className={'text-title1_b'}>
                        회원가입이 완료되었습니다!
                    </p>
                    <p className={'text-title2'}>
                        FreshMan과 편리한 쇼핑 되세요.
                    </p>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 m-auto max-w-default px-4 pb-8 [&>button]:w-full">
                <PrimaryBkButton
                    handleClick={() => navigate('/')}
                    type="button"
                    customStyle="w-full"
                >
                    홈으로 가기
                </PrimaryBkButton>
            </div>
        </section>
    );
}
