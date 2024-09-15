import { useState, useRef } from 'react';

export default function useDragScroll<T extends HTMLElement>() {
    const targetEl = useRef<T>(null);
    const [isDragging, setIsDragging] = useState(false);
    /** 드래그 시작 시점의 X축 좌표값 */
    const [, setStartX] = useState<number>(0);
    /** 드래그 시작 시점의 스크롤 포지션이 포함된 X축 좌표값 */
    const [totalX, setTotalX] = useState<number>(0);

    // 커스텀 드래그 이미지 생성
    const dragImg = new Image();
    dragImg.src =
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    // mouse 움직일때
    const onMouseMove: React.DragEventHandler<T> = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (!isDragging) return;

        const scrollLeft = totalX - e.clientX;

        if (targetEl.current && 'scrollLeft' in targetEl.current) {
            targetEl.current.scrollLeft = scrollLeft;
        }
    };

    // mouse 눌렀을때
    const onMouseDown: React.DragEventHandler<T> = (e) => {
        // 드래그 이미지의 위치 설정
        e.dataTransfer.setDragImage(dragImg, 0, 0);

        setIsDragging(true);
        const x = e.clientX;
        setStartX(x);

        // 이미 스크롤 되어 있는 경우
        if (targetEl.current && 'scrollLeft' in targetEl.current) {
            setTotalX(x + targetEl.current.scrollLeft);
        }
    };

    // mouse 뗄때
    const onMouseUp: React.DragEventHandler<T> = () => {
        if (!isDragging) return;
        if (!targetEl.current) return;

        setIsDragging(false);
    };

    return {
        onMouseMove,
        onMouseDown,
        onMouseUp,
        targetEl,
    };
}
