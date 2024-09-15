import { CategoryMenuType } from '@/types/category';
// front에서 관리하는 data

export const filterWithSortData = [
    {
        id: 1,
        name: '최신순',
        value: 'newest',
        checked: true,
    },
    {
        id: 2,
        name: '높은 가격순',
        value: 'highest',
        checked: false,
    },
    {
        id: 3,
        name: '낮은 가격순',
        value: 'lowest',
        checked: false,
    },
];

export const filterWithCategryData = [
    {
        id: 1,
        name: '스킨케어',
        value: 'skincare',
        checked: true,
    },
    {
        id: 2,
        name: '바디케어',
        value: 'bodycare',
        checked: false,
    },
    {
        id: 3,
        name: '헤어케어',
        value: 'haircare',
        checked: false,
    },
    {
        id: 4,
        name: '발케어',
        value: 'footcare',
        checked: false,
    },
    {
        id: 5,
        name: '마스크팩',
        value: 'maskpack',
        checked: false,
    },
    {
        id: 6,
        name: '립',
        value: 'lip',
        checked: false,
    },
    {
        id: 7,
        name: '향수',
        value: 'perfume',
        checked: false,
    },
];

export const categriesMenuData: CategoryMenuType[] = [
    {
        id: 1,
        name: '스킨케어',
        icon: 'skin',
    },
    {
        id: 2,
        name: '바디케어',
        icon: 'body',
    },
    {
        id: 3,
        name: '헤어케어',
        icon: 'hair',
    },
    {
        id: 4,
        name: '발케어',
        icon: 'foot',
    },
    {
        id: 5,
        name: '립',
        icon: 'lip',
    },
    {
        id: 6,
        name: '향수',
        icon: 'perfume',
    },
];
