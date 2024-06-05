import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useClassNames } from '~/hooks';
import styles from './Magnetic.module.scss';

const Magnetic = ({ children }: { children: ReactNode }) => {
    const [isResizing, setIsResizing] = useState(false);
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    const magneticRef = useRef(null);

    const cx = useClassNames(styles);

    useEffect(() => {
        let resizeTimer: NodeJS.Timeout | undefined;

        const handleResize = () => {
            setIsResizing(true);
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                setIsResizing(false);
                setWidthScreen(window.innerWidth);
            }, 300);
        };

        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('load', handleResize);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useLayoutEffect(() => {
        const item = magneticRef.current as HTMLDivElement | null;

        const handleMagnetic = (e: MouseEvent) => {
            if (item) {
                const x = e.offsetX;
                const y = e.offsetY;
                const itemWidth = item.clientWidth;
                const itemHeight = item.clientHeight;
                const posX = x - itemWidth / 2;
                const posY = y - itemHeight / 2;

                item.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
            }
        };

        const handleRemoveMagnetic = () => {
            if (item) item.style.transform = ``;
        };

        if (!isResizing && item && widthScreen >= 991.98) {
            item.addEventListener('mousemove', handleMagnetic);
            item.addEventListener('mouseout', handleRemoveMagnetic);
        }

        return () => {
            item?.removeEventListener('mousemove', handleMagnetic);
            item?.removeEventListener('mouseout', handleRemoveMagnetic);
        };
    });

    return (
        <div ref={magneticRef} className={cx('magnetic')}>
            {children}
        </div>
    );
};

export default Magnetic;
