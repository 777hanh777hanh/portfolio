import { useEffect, useState } from 'react';

import { updateTitle } from '~/utils';
import { useClassNames } from '~/hooks';
import styles from './ResumePage.module.scss';
import resumeFile from '../../assets/docs/cv.pdf';

import { Document, Page, pdfjs } from 'react-pdf';
import icons from '~assets/icons';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumePage = () => {
    const cx = useClassNames(styles);
    const [isResizing, setIsResizing] = useState(false);
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    const [scale, setScale] = useState(1);

    // check resize function
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

    useEffect(() => {
        if (widthScreen < 575.98) {
            setScale(0.5);
        } else if (widthScreen < 767.98) {
            setScale(0.7);
        } else {
            setScale(1);
        }
    }, [isResizing, widthScreen]);

    // Update title of ResumePage
    useEffect(() => {
        updateTitle('Resume');
    }, []);

    return (
        <section className={cx('resume')}>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <Document file={resumeFile}>
                        <Page pageNumber={1} scale={scale} />
                        <Page pageNumber={2} scale={scale} />
                        <Page pageNumber={3} scale={scale} />
                    </Document>
                </div>

                <button className={cx('resume__btn')}>
                    <img src={icons.download} alt="Download CV" className={cx('resume__icon')} />
                    Download CV
                </button>
            </div>
        </section>
    );
};

export default ResumePage;
