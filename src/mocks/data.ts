import { productItemType } from '@/types/Product/productList';
import { reviewProductType } from '@/types/Review/userReview';
import { InquiryType } from '@/types/User/inquiry';

export const dummyProductList: productItemType[] = [];
for (let i = 0; i < 32; i += 1) {
    dummyProductList.push({
        productSeq: 3 * i,
        name: `테스트 상품 ${3 * i}`,
        price: 10000,
        brand: '뉴발란스',
        favorite: false,
        sale: {
            salePrice: 7000,
            saleRate: 22,
        },
        image: 'https://image.msscdn.net/images/goods_img/20230214/3082569/3082569_17058889205261_500.jpg',
    });
    dummyProductList.push({
        productSeq: 3 * i + 1,
        name: `테스트 상품 ${3 * i + 1}`,
        price: 7000,
        brand: '나이키',
        favorite: true,
        image: 'https://image.msscdn.net/images/goods_img/20230214/3082569/3082569_17058889205261_500.jpg',
    });
    dummyProductList.push({
        productSeq: 3 * i + 2,
        name: `테스트 상품 ${3 * i + 2}`,
        price: 500000,
        brand: '나이키',
        favorite: false,
        image: 'https://image.msscdn.net/images/goods_img/20230214/3082569/3082569_17058889205261_500.jpg',
    });
}

export const dummyLikeList: productItemType[] = [];
for (let i = 0; i < dummyProductList.length; i += 1) {
    dummyLikeList.push({ ...dummyProductList[i], favorite: true });
}

export const dummyInquiryList = [
    {
        id: 1,
        image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
        date: '2024.07.23',
        author: 'test',
        title: '피부관련해서 질문있습니다.',
        description: '안녕하세요 피부관련해서 질문드릴 점이 있습니다.',
        product: '[THREE TO EIGHTY] Essential Color Socks (15colors)',
        answer: '안녕하세요 고객님',
    },
    {
        id: 2,
        image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
        date: '2024.07.23',
        author: 'test',
        title: '피부관련해서 질문있습니다.',
        description: '안녕하세요 피부관련해서 질문드릴 점이 있습니다.',
        product: '[THREE TO EIGHTY] Essential Color Socks (15colors)',
        answer: '',
    },
    {
        id: 3,
        image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
        date: '2024.07.23',
        author: 'test',
        title: '피부관련해서 질문있습니다.',
        description: '안녕하세요 피부관련해서 질문드릴 점이 있습니다.',
        product: '[THREE TO EIGHTY] Essential Color Socks (15colors)',
        answer: '안녕하세요 고객님',
    },
];

export const dummyQnAList: InquiryType[] = [];
for (let i = 0; i < 90; i += 1) {
    dummyQnAList.push({
        questionSeq: i,
        memberName: null,
        content: '문의 테스트 내용 ',
        image: 'https://file-for-study.s3.ap-northeast-2.amazonaws.com/1b815211-ed73-4cba-8890-1f2c5a2a5180.jpeg',
        isAnswered: false,
        postedDate: [2024, 8, 13],
    });
}

export const dummySearchList = [
    {
        productSeq: 8,
        name: 'Stussy',
        price: 99000,
        brand: 'New Balance',
        image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
        sale: {
            salePrice: 35000,
            saleRate: 22,
        },
        favorite: false,
    },
    {
        productSeq: 8,
        name: 'Stussy',
        price: 99000,
        brand: 'New Balance',
        discountRate: 0,
        image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
        sale: {
            salePrice: 35000,
            saleRate: 22,
        },
        favorite: false,
    },
    {
        productSeq: 8,
        name: 'Stussy',
        price: 99000,
        brand: 'New Balance',
        discountRate: 0,
        image: 'https://sitem.ssgcdn.com/68/30/98/spclprc/1000282983068_sp.jpg',
        sale: {
            salePrice: 35000,
            saleRate: 22,
        },
        favorite: false,
    },
];

export const dummyReviewList: reviewProductType[] = [];

for (let i = 0; i < 32; i += 1) {
    dummyReviewList.push({
        rating: 2,
        user: {
            username: 'gogdg1234',
        },
        image: 'https://cosmereg.com/wp-content/uploads/2023/03/beauty-g2b308465c_1920-1.jpg',
        option: 'ooo 매',
        date: new Date('2023-12-22'),
        description:
            '대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...재구매 의사 있어요',
    });
    dummyReviewList.push({
        rating: 4.5,
        user: {
            username: 'gogdg1234',
        },
        image: 'https://cosmereg.com/wp-content/uploads/2023/03/beauty-g2b308465c_1920-1.jpg',
        option: 'ooo 매',
        date: new Date('2023-12-22'),
        description:
            '대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...대박입니다..광채가...재구매 의사 있어요',
    });
}

export const dummyCartList = dummyProductList.map((product) => ({
    ...product,
    quantity: 1,
}));
