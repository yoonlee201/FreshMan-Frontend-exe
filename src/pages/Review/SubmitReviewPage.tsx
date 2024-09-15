import Star from '@/components/Review/Star';
import { PrimaryBkButton } from '@/components/common/Button';
import { Input } from '@/components/ui/input';
import useSubmitReview from '@/hooks/logics/review/useSubmitReview';
import { MdOutlinePhotoCamera } from 'react-icons/md';

export default function SubmitReviewPage() {
    const {
        reviewText,
        handleChangeText,
        handleSubmit,
        inputFileRef,
        handleImageUpload,
    } = useSubmitReview();
    return (
        <div>
            <section className="border-b border-gray100 px-4 py-5">
                <figure className="flex items-center gap-3">
                    <img
                        src="https://img.29cm.co.kr/item/202308/11ee428a9abad6efa3d8a7ab1bc6c855.jpg?width=150"
                        alt="dd"
                        className="h-12 w-12 object-cover"
                    />
                    <figcaption className="line-clamp-2 text-body2">
                        상품제상품제목상품제목목상품제상품제목상품제목목상품제상품제목상품제목목상품제상품제목상품제목목상품제상품제목상품제목목상품제상품제목상품제목목
                    </figcaption>
                </figure>
            </section>
            <section className="flex flex-col items-center border-b border-gray100 px-4 py-8">
                <p className="mb-3 text-center text-title3_b">
                    상품은 만족하셨나요?
                </p>
                <Star w="w-10" h="h-10" readonly={false} />
            </section>
            <section className="px-4 py-8">
                <textarea
                    name="reviewText"
                    id="reviewText"
                    value={reviewText}
                    maxLength={500}
                    onChange={handleChangeText}
                    placeholder="최소 10자이상 입력해주세요."
                    className="h-60 w-full rounded-lg bg-gray100 p-4 placeholder:text-gray400"
                />
                <div className="mt-4">
                    <label
                        htmlFor="picture"
                        className="flex h-20 w-20 flex-col items-center justify-center rounded border border-gray300"
                    >
                        <MdOutlinePhotoCamera className="h-10 w-10" />
                        <span className="text-body3">사진 업로드</span>
                    </label>
                    <Input
                        id="picture"
                        type="file"
                        ref={inputFileRef}
                        className="hidden"
                        onChange={handleImageUpload}
                        accept="image/*"
                    />
                </div>
            </section>
            <div className="px-4 pb-10 [&>button]:w-full">
                <PrimaryBkButton
                    type="button"
                    disabled={reviewText.length < 10}
                    handleClick={handleSubmit}
                >
                    등록
                </PrimaryBkButton>
            </div>
        </div>
    );
}
