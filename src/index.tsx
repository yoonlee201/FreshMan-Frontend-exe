import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import QueryProvider from './provider/queryProvider';
// import { worker } from './mocks/browser';
import Router from './Router';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

// MSW 설정
if (process.env.NODE_ENV === 'development') {
    // worker.start({
    //     onUnhandledRequest: 'bypass',
    // });
}

root.render(
    <React.StrictMode>
        <CookiesProvider>
            <QueryProvider>
                <div
                    className={
                        'm-auto box-border max-w-default items-center justify-center'
                    }
                >
                    <RouterProvider router={Router()} />
                </div>
            </QueryProvider>
        </CookiesProvider>
    </React.StrictMode>,
);
