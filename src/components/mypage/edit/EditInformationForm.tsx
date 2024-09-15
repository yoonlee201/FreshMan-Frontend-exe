import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/store/user';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../common/Button/SubmitButton';

interface IMyInfo {
    name: string;
}

export default function EditInformationForm() {
    const {
        user: { name, email },
    } = useAuthStore();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
    } = useForm<IMyInfo>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: { name },
    });

    const onSubmit = (data: IMyInfo) => {
        console.log(data.name);
        alert(`${data.name}(으)로 수정되었습니다!`);
        navigate('/mypage/info');
    };
    return (
        <div>
            <div className="mx-4 mb-10 mt-5">
                <h2 className="mb-2 text-2xl font-bold">{`${name}님`}</h2>
                <p>{email}</p>
            </div>
            <div className="mx-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="text-gray-400" htmlFor="name">
                        {'이름'}
                    </label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="이름 입력"
                        className="rounded-none"
                        {...register('name', {
                            required: true,
                        })}
                    />
                    {errors.name && (
                        <p className="text-pointRed">{errors.name.message}</p>
                    )}
                    <SubmitButton isActive={isDirty}>수정</SubmitButton>
                </form>
            </div>
        </div>
    );
}
