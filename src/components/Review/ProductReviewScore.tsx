import Star from './Star';

export default function ProductReviewScore() {
    return (
        <div className={'flex flex-col items-center gap-5 py-9'}>
            <Star w={'w-10'} h={'h-10'} readonly rate={3.6} />
            <p className={'text-body1_b'}>
                {'4.4'}
                <span className={'text-gray400'}>{' / 4'}</span>
            </p>
        </div>
    );
}
