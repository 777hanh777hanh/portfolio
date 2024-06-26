import { default as React, ReactNode, memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useClassNames } from '~/hooks';
import icons from '~assets/icons';
import styles from './CardProject.module.scss';

type CardProjectProps = ({ project }: { project: projectsProps }) => ReactNode;

type projectsProps = {
    title: string;
    description?: string;
    image: string;
    demo?: string;
    src?: string;
};

const CardProject: CardProjectProps = memo(({ project }) => {
    const cx = useClassNames(styles);

    const cardRef = useRef(null);
    const [isShow, setIsShow] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);

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
    }, [isResizing, widthScreen]);

    // show card when hover
    useLayoutEffect(() => {
        const card = cardRef.current ? (cardRef.current as HTMLElement) : null;

        const handleMouseMove = (e: MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsShow(true);
        };

        const handleMouseOut = (e: MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsShow(false);
        };

        const handleClick = (e: MouseEvent) => {
            e.preventDefault();
            setIsShow(!isShow);
        };

        if (card) {
            card.addEventListener('click', handleClick);
            card.addEventListener('mouseenter', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseOut);
        }

        return () => {
            if (card) {
                card.removeEventListener('click', handleClick);
                card.removeEventListener('mouseenter', handleMouseMove);
                card.removeEventListener('mouseleave', handleMouseOut);
            }
        };
    }, [isShow]);

    const handleNavigate = (e: React.MouseEvent, href: string = '') => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e.target);

        window.open(href);
    };

    return (
        <article className={cx('card__article', { show: isShow })} ref={cardRef}>
            <div className={cx('card__image')}>
                <img src={project.image} alt="image" className={cx('card__img')} />
            </div>
            <div className={cx('card__info')}>
                <span className={cx('card__title')}>{project.title}</span>
                {project.description && (
                    <>
                        <span className={cx('card__description')}>{project.description}</span>
                    </>
                )}
            </div>

            <div className={cx('card__data')}>
                <div className={cx('card__cta')}>
                    {project.src && (
                        <button
                            onClick={(e) => {
                                handleNavigate(e, project.src);
                            }}
                            className={cx('card__button')}
                        >
                            <img className={cx('card__icon')} src={icons.branch} />
                            Source
                        </button>
                    )}
                    {project.demo && (
                        <button
                            onClick={(e) => {
                                handleNavigate(e, project.demo);
                            }}
                            className={cx('card__button')}
                        >
                            <img className={cx('card__icon')} src={icons.eye} />
                            View
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
});

export default CardProject;
