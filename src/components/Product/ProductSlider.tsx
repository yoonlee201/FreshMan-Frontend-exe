import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel';

interface ProductCounterProps {
    current: number;
    count: number;
}

interface ProductImgProps {
    setApi?: (api: CarouselApi) => void;
    images: string[];
    title?: string;
    subTitle?: string;
}

interface ProductSliderProps {
    children: React.ReactNode;
    isSetCount?: boolean;
}

function ProductImg({ setApi, images, title, subTitle }: ProductImgProps) {
    return (
        <Carousel setApi={setApi} className={'w-full'}>
            <CarouselContent>
                {images.map((src, index) => (
                    <CarouselItem key={index} className={'aspect-square'}>
                        <figure className="relative h-full after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-bk after:content-['']">
                            <img
                                src={src}
                                alt={title}
                                className="h-full w-full object-cover"
                            />
                            <figcaption className="absolute bottom-0 left-0 z-10 px-4 pb-7 text-white">
                                <p className="text-title2_b">{title}</p>
                                <p className="text-body1">{subTitle}</p>
                            </figcaption>
                        </figure>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

function ProductCounter({ current, count }: ProductCounterProps) {
    return (
        <div
            className={
                'absolute bottom-3 left-1/2 -translate-x-1/2 rounded-lg bg-black bg-opacity-30 px-3'
            }
        >
            <span className={'text-body4 text-white'}>
                {current}
                {'/'}
                {count}
            </span>
        </div>
    );
}

function ProductSliderMain({ children, isSetCount }: ProductSliderProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className={'relative'}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === ProductImg) {
                    // 기존 요소를 복제하여 props 추가
                    return React.cloneElement(
                        child as React.ReactElement<ProductImgProps>,
                        { setApi },
                    );
                }
                return child;
            })}
            {isSetCount && <ProductCounter current={current} count={count} />}
        </div>
    );
}

export const ProductSlider = Object.assign(ProductSliderMain, {
    Counter: ProductCounter,
    Img: ProductImg,
});
