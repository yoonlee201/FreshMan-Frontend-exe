import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/store/user';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DaumPostCode from 'react-daum-postcode';
import SubmitButton from '../../common/Button/SubmitButton';
import { Drawer, DrawerContent } from '../../ui/drawer';

interface IEditAddress {
    address: string;
    addressDetail: string;
}

export default function EditAddressForm() {
    // TODO: 로컬에 저장되어 있지 않으면 api 불러오도록 로직 변경
    const {
        user: { address },
    } = useAuthStore();
    const { register, handleSubmit, setValue, watch } = useForm<IEditAddress>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: { address },
    });
    const [showDaumPostCodeModal, setShowDaumPostCodeModal] =
        useState<boolean>(false);

    const handleDaumAddress = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setShowDaumPostCodeModal(!showDaumPostCodeModal);
    };

    const watchAddress = watch('address');
    const watchAddressDetail = watch('addressDetail');

    const btnActive = !!(watchAddress && watchAddressDetail);

    const onSubmit = (data: IEditAddress) => {
        console.log(data.addressDetail);
    };

    return (
        <div>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <label className="text-gray-400" htmlFor="address">
                    {'주소'}
                </label>
                <div className="mb-5 flex flex-row">
                    <Input
                        id="address"
                        type="text"
                        placeholder="주소 입력"
                        className="rounded-none"
                        {...register('address', {
                            required: true,
                        })}
                    />
                    <Button
                        className={
                            'ml-3 rounded-xl bg-black text-white hover:bg-white hover:text-black'
                        }
                        onClick={handleDaumAddress}
                    >
                        {'우편번호'}
                    </Button>
                </div>
                <Input
                    id="addressDetail"
                    type="text"
                    placeholder="상세 주소 입력"
                    className="rounded-none"
                    {...register('addressDetail', {
                        required: true,
                    })}
                />
                <Drawer>
                    <DrawerContent>
                        <DaumPostCode
                            onComplete={(data) => {
                                setValue('address', data.address, {
                                    shouldValidate: false,
                                });
                                setShowDaumPostCodeModal(false);
                            }}
                        />
                    </DrawerContent>
                </Drawer>
                <SubmitButton isActive={btnActive}>수정</SubmitButton>
            </form>
        </div>
    );
}
