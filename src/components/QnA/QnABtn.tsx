import { useNavigate } from 'react-router-dom';

export default function QnABtn() {
    const navigate = useNavigate();

    return (
        <div>
            <button
                type="button"
                className="text-wh h-12 w-full bg-bk text-body2_b"
                onClick={() => navigate('/qna/write')}
            >
                문의하기
            </button>
        </div>
    );
}
