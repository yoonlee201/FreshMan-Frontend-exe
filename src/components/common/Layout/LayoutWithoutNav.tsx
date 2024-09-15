import { Outlet } from 'react-router-dom';

export default function LayoutWithoutNav() {
    return (
        <>
            {/* TODO: title은 추후 resoponse에 따라 변경되야함. 동적으로 어떻게 구상할지 고민 필요 */}

            <main>
                <Outlet />
            </main>
        </>
    );
}
