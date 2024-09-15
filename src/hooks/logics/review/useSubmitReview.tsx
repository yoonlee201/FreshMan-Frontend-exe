import { usePostReview } from '@/hooks/query/review';
import imageCompression from 'browser-images-compression';
import { useRef, useState } from 'react';

export default function useSubmitReview() {
    // const [url, setUrl] = useState<string | ArrayBuffer | null>();
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [reviewText, setReviewText] = useState('');
    const { mutatePostReview } = usePostReview();

    const handleSubmit = () => {
        // console.log(reviewText);
        mutatePostReview({
            productSeq: 1,
            content: reviewText,
            score: 5,
            type: 'N',
        });
    };

    const handleChangeText = (
        event: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setReviewText(event.target.value);
    };

    const handleImageUpload = async (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const options = {
            initialQuality: 0.5,
        };

        try {
            const compressedFile = await imageCompression(file, options);
            // 원본 파일과 압축된 파일의 크기 비교
            console.log(
                'Original file size:',
                Math.ceil(file.size / 1000),
                'KB',
            );
            console.log(
                'Compressed file size:',
                Math.ceil(compressedFile.size / 1000),
                'KB',
            );
        } catch (error) {
            console.log(error);
        }
    };

    return {
        reviewText,
        handleChangeText,
        handleSubmit,
        handleImageUpload,
        inputFileRef,
    };
}
