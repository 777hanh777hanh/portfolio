import { ReactNode, memo, useEffect, useRef, useState } from 'react';
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
    }, []);

    // show card when hover
    useEffect(() => {
        const card = cardRef.current ? (cardRef.current as HTMLElement) : null;

        const handleMouseMove = () => {
            setIsShow(true);
        };

        const handleMouseOut = () => {
            setIsShow(false);
        };

        if (card && !isResizing) {
            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseout', handleMouseOut);
        }

        return () => {
            if (card) {
                card.removeEventListener('mousemove', handleMouseMove);
                card.removeEventListener('mouseout', handleMouseOut);
            }
        };
    }, [widthScreen, isResizing, isShow]);

    // show/hide card when click
    const handleClick = () => {
        setIsShow(!isShow);
    };

    const handleNavigate = (href: string = '') => {
        window.open(href);
    };

    return (
        <article className={cx('card__article', { show: isShow })} onClick={handleClick} ref={cardRef}>
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
                    <button
                        onClick={() => {
                            handleNavigate(project.src);
                        }}
                        className={cx('card__button')}
                    >
                        <img className={cx('card__icon')} src={icons.branch} />
                        Source
                    </button>
                    <button
                        onClick={() => {
                            handleNavigate(project.demo);
                        }}
                        className={cx('card__button')}
                    >
                        <img className={cx('card__icon')} src={icons.eye} />
                        Source
                    </button>
                </div>
            </div>
        </article>
    );
});

export default CardProject;
