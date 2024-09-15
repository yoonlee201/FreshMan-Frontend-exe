import { createBrowserRouter } from 'react-router-dom';
import {
    RegisterPage,
    RegisterSuccessPage,
    SocialLoginPage,
    SocialLoginRedirectPage,
} from './pages/Member';
import {
    EditAddressPage,
    EditInformationPage,
    MyInformationPage,
    MyLikePage,
    MyPage,
    MyQnAPage,
} from './pages/MyPage';
import { LayoutWithNav, LayoutWithOutNav } from './components/common/Layout';
import { ProductDetailPage, ProductPage } from './pages/Product';
import { SubmitReviewPage } from './pages/Review';
import { SearchPage, SearchResultPage } from './pages/Search';
import { HomePage } from './pages/Home';
import GlobalError from './GlobalError';
import { QnaSubmitPage } from './pages/qna';
import { CartPage } from './pages/Cart';

export default function Router() {
    return createBrowserRouter([
        {
            path: '/',
            errorElement: <GlobalError />,
            children: [
                {
                    path: '/',
                    element: <HomePage />,
                },
                {
                    path: '/search',
                    children: [
                        {
                            path: '',
                            element: <SearchPage />,
                        },
                        {
                            path: 'result',
                            element: <SearchResultPage />,
                        },
                    ],
                },
                {
                    path: '/review',
                    children: [
                        {
                            path: 'submit',
                            element: <SubmitReviewPage />,
                        },
                    ],
                },
                {
                    path: '/review',
                    children: [
                        {
                            path: 'submit',
                            element: <SubmitReviewPage />,
                        },
                    ],
                },
                {
                    path: '/auth',
                    children: [
                        {
                            path: 'register',
                            element: <RegisterPage />,
                        },
                        {
                            path: 'success',
                            element: <RegisterSuccessPage />,
                        },
                    ],
                },
                {
                    path: '/categories',
                    element: <LayoutWithNav />,
                    children: [
                        {
                            path: ':id',
                            element: <ProductPage />,
                        },
                    ],
                },
                {
                    path: '/cart',
                    children: [
                        {
                            path: '',
                            element: <CartPage />,
                        },
                    ],
                },
                {
                    element: <LayoutWithOutNav />,
                    children: [
                        {
                            path: '/products/:id',
                            element: <ProductDetailPage />,
                        },
                    ],
                },
                {
                    path: '/mypage',
                    children: [
                        {
                            path: '',
                            element: <MyPage />,
                        },
                        {
                            path: 'address',
                            element: <EditAddressPage />,
                        },
                        {
                            path: 'like',
                            element: <MyLikePage />,
                        },
                        {
                            path: 'info',
                            children: [
                                {
                                    element: <MyInformationPage />,
                                },
                                {
                                    path: 'edit',
                                    element: <EditInformationPage />,
                                },
                            ],
                        },
                    ],
                },
                {
                    path: '/login',
                    element: <SocialLoginPage />,
                },
                {
                    path: '/authorize',
                    element: <SocialLoginRedirectPage />,
                },
                {
                    path: '/qna',
                    children: [
                        {
                            path: '',
                            element: <MyQnAPage />,
                        },
                        {
                            path: 'submit',
                            element: <QnaSubmitPage />,
                        },
                    ],
                },
            ],
        },
    ]);
}
