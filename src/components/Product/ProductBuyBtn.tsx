import { LikeBtn } from '../common';
import { PrimaryBkButton } from '../common/Button';
import {
    Drawer,
    DrawerContent,
    DrawerPortal,
    DrawerTrigger,
} from '../ui/drawer';
import ProductOption from './ProductOption';

export default function ProductBuyBtn() {
    return (
        <div
            className={
                'fixed bottom-0 left-0 right-0 z-40 z-[21] m-auto flex max-w-default items-center justify-between bg-white px-2 py-4 shadow-top [&>#likeBtn]:basis-16 [&>#primaryBtn]:flex-1'
            }
        >
            <LikeBtn favorite={false} size={'lg'} />

            <Drawer>
                <DrawerTrigger className="w-full [&>button]:w-full">
                    <PrimaryBkButton primary type="button">
                        구매하기
                    </PrimaryBkButton>
                </DrawerTrigger>
                <DrawerPortal>
                    <DrawerContent className="bg-white">
                        <ProductOption />
                    </DrawerContent>
                </DrawerPortal>
            </Drawer>
        </div>
    );
}
