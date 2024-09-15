import RegisterForm from '@/components/Register/RegisterForm';

export default function RegisterPage() {
    return (
        <section className="px-4 pt-10">
            <h2 className="text-title1_b">
                기본 정보를
                <br /> 입력해주세요.
            </h2>
            <RegisterForm />
        </section>
    );
}
