import useDragScroll from '@/hooks/useDragScroll';
import React, { ReactElement } from 'react';

interface HorizontalScrollProps {
    elementSize?: string;
    parentStyle?: string;
    children: React.ReactNode;
}

export default function HorizontalScroll({
    children,
    elementSize,
    parentStyle,
}: HorizontalScrollProps) {
    const { onMouseDown, onMouseMove, onMouseUp, targetEl } =
        useDragScroll<HTMLUListElement>();

    return (
        <div className="overflow-hidden">
            <ul
                ref={targetEl}
                draggable
                onDragStart={onMouseDown}
                onDragOver={onMouseMove}
                onDragEnd={onMouseUp}
                onDragLeave={onMouseUp}
                className={`horizontal-scroll-box flex w-full overflow-x-auto whitespace-nowrap ${parentStyle}`}
            >
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        const element = child as ReactElement;

                        return React.cloneElement(element, {
                            className: `${elementSize} inline-block`,
                        });
                    }
                    return null;
                })}
            </ul>
        </div>
    );
}
