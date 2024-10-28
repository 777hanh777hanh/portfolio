import { useEffect, useState } from 'react';

import { updateTitle, renderLinkCanonical } from '~/utils';
import { useClassNames } from '~/hooks';
import styles from './ResumePage.module.scss';
import resumeFile from '../../assets/docs/cv.pdf';

import { Document, Page, pdfjs } from 'react-pdf';
import icons from '~assets/icons';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const ResumePage = () => {
    const cx = useClassNames(styles);
    const [isResizing, setIsResizing] = useState(false);
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    const [scale, setScale] = useState(1);

    const classActive = cx('active');
    const classPage = cx('resume__page');
    const classPrev = cx('resume__page-prev');
    const classNext = cx('resume__page-next');
    const classStart = cx('resume__page-start');
    const classEnd = cx('resume__page-end');

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
    });

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
        renderLinkCanonical();
    }, []);

    const reflow = (element: HTMLElement) => {
        console.log('reflow');
        element.offsetHeight;
    };

    const handleClickLeft = () => {
        const allElement = document.querySelectorAll(`.${classPage}`);

        let currentActiveElement = document.querySelector(`.${classActive}`);
        if (!currentActiveElement) {
            currentActiveElement = allElement[0];
            currentActiveElement.classList.add(classActive);
        }

        // find element previous
        let prevElement = currentActiveElement?.previousElementSibling as HTMLElement;
        if (!prevElement) {
            prevElement = allElement[allElement.length - 1] as HTMLElement;
        }

        prevElement.classList.add(classPrev);
        reflow(currentActiveElement as HTMLElement);
        currentActiveElement.classList.add(classEnd);
        prevElement.classList.add(classEnd);

        prevElement.addEventListener(
            'transitionend',
            () => {
                currentActiveElement.classList.remove(classActive);
                currentActiveElement.classList.remove(classEnd);
                prevElement.classList.remove(classPrev, classEnd);
                prevElement.classList.add(classActive);
            },
            {
                once: true,
            },
        );
    };

    const handleClickNext = () => {
        const allElement = document.querySelectorAll(`.${classPage}`);

        let currentActiveElement = document.querySelector(`.${classActive}`);
        if (!currentActiveElement) {
            currentActiveElement = allElement[0];
            currentActiveElement.classList.add(classActive);
        }

        // find element previous
        let nextElement = currentActiveElement?.nextElementSibling as HTMLElement;
        if (!nextElement) {
            nextElement = allElement[0] as HTMLElement;
        }

        nextElement.classList.add(classNext);
        reflow(currentActiveElement as HTMLElement);
        currentActiveElement.classList.add(classStart);
        nextElement.classList.add(classStart);

        nextElement.addEventListener(
            'transitionend',
            () => {
                currentActiveElement.classList.remove(classActive);
                currentActiveElement.classList.remove(classStart);
                nextElement.classList.remove(classNext, classStart);
                nextElement.classList.add(classActive);
            },
            {
                once: true,
            },
        );
    };

    // const handleViewFile = () => {
    //     window.open(resumeFile, '_blank');
    // };

    const handleDownloadFile = () => {
        const a = document.createElement('a');
        a.href = resumeFile;
        a.download = 'TranThienThanh-CV.pdf';
        a.setAttribute('download', 'TranThienThanh-CV.pdf');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <section className={cx('resume')}>
            <div className="container">
                <button onClick={handleDownloadFile} className={cx('resume__btn')}>
                    <img src={icons.download} alt="Download CV" className={cx('resume__icon')} />
                    Download CV
                </button>

                <div className={cx('resume__inner')}>
                    <div className={cx('resume__cta', 'resume__cta--top')}>
                        <button className={cx('resume__cta-btn')} onClick={handleClickLeft}>
                            <img
                                src={icons.next}
                                alt="Previous page"
                                className={cx('resume__cta-icon', 'resume__cta-icon--back')}
                            />
                        </button>
                        <button className={cx('resume__cta-btn')} onClick={handleClickNext}>
                            <img src={icons.next} alt="Next page" className={cx('resume__cta-icon')} />
                        </button>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <Document file={resumeFile} renderMode="canvas" className={cx('resume__wrap')}>
                            <Page pageNumber={1} scale={scale} className={cx(classPage, classActive)} />
                            <Page pageNumber={2} scale={scale} className={cx(classPage)} />
                            <Page pageNumber={3} scale={scale} className={cx(classPage)} />
                        </Document>
                    </div>

                    <div className={cx('resume__cta')}>
                        <button className={cx('resume__cta-btn')} onClick={handleClickLeft}>
                            <img
                                src={icons.next}
                                alt="Previous page"
                                className={cx('resume__cta-icon', 'resume__cta-icon--back')}
                            />
                        </button>
                        <button className={cx('resume__cta-btn')} onClick={handleClickNext}>
                            <img src={icons.next} alt="Next page" className={cx('resume__cta-icon')} />
                        </button>
                    </div>
                </div>

                <button className={cx('resume__btn')} onClick={handleDownloadFile}>
                    <img src={icons.download} alt="Download CV" className={cx('resume__icon')} />
                    Download CV
                </button>
            </div>
        </section>
    );
};

export default ResumePage;
