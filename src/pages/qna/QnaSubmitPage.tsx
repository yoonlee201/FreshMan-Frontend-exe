import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InquiryForm from '@/components/Inquiry/InquiryForm';

export default function QnaSubmitPage() {
    const navigate = useNavigate();
    const [contactType, setContactType] = useState<string>('');
    const [contact, setContact] = useState<string>('');
    const handleChangeContact = (
        event: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setContact(event.target.value);
    };

    const handleCancelContact = () => {
        const cancelContactConfirm =
            window.confirm('문의 등록을 취소하시겠습니까?');
        if (cancelContactConfirm) navigate('/mypage');
    };

    const handleSaveContact = async () => {
        console.log(contactType);
        console.log(contact);
        const response = await axios.post('/api/contact', {
            contactType,
            contact,
        });
        console.log(response);
    };

    return (
        <div>
            <InquiryForm
                contact={contact}
                onChangeContactType={(value: string) => setContactType(value)}
                onChangeContact={(
                    event: React.ChangeEvent<HTMLTextAreaElement>,
                ) => handleChangeContact(event)}
                onCancelContact={handleCancelContact}
                onSaveContact={handleSaveContact}
            />
        </div>
    );
}
