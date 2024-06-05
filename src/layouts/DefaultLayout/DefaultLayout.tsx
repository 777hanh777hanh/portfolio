import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';

import { Header, Footer } from '~/components';
import { useClassNames } from '~/hooks';
import lottieFiles from '~assets/images/lottieFiles';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
    const cx = useClassNames(styles);

    const headerRef = useRef(null);
    const [heightHeader, setHeightHeader] = useState(0);
    const [isResizing, setIsResizing] = useState(false);

    useEffect(() => {
        let resizeTimer: NodeJS.Timeout | undefined;

        const handleResize = () => {
            setIsResizing(true);
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                setIsResizing(false);
            }, 300);
        };

        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('load', handleResize);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const headerEle = headerRef.current as HTMLElement | null;
        if (headerEle) {
            setHeightHeader(headerEle.clientHeight);
        }
    }, [isResizing]);

    return (
        <>
            <Lottie className="bg-page" animationData={lottieFiles.texture} loop={true} />
            {/* Header */}
            <Header ref={headerRef} />

            {/* Main */}
            <main
                className={cx('main')}
                style={{ minHeight: '90dvh', '--header-height': `${heightHeader}px` } as CSSProperties}
            >
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default DefaultLayout;
