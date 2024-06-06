import { useCallback, useEffect, useState, forwardRef, LegacyRef, MutableRefObject } from 'react';
import { Link } from 'react-router-dom';

import { useClassNames } from '~/hooks';
import styles from './Header.module.scss';
import { routes } from '~/routes';
import icons from '~assets/icons';
import { Logo, NavLinkItem } from '~/components';

type HeaderProps = {
    className?: string;
};

const Header = forwardRef(
    (
        { className: cusClassName }: HeaderProps,
        ref: LegacyRef<HTMLElement> | MutableRefObject<null> | undefined,
    ) => {
        const cx = useClassNames(styles);
        const classes = cusClassName ? cusClassName : '';
        const [isShow, setIsShow] = useState(false);
        const [isResizing, setIsResizing] = useState(false);
        const [widthScreen, setWidthScreen] = useState(window.innerWidth);

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
            document.body.addEventListener('click', handleCloseHeader);

            return () => {
                document.body.removeEventListener('click', handleCloseHeader);
            };
            // eslint-disable-next-line
        }, [isShow]);

        const handleCloseHeader: (e: MouseEvent) => void = (e) => {
            if (!isResizing && widthScreen <= 991.98 && isShow) {
                const targetElement = e.target as HTMLElement;

                if (isShow && targetElement && !targetElement.closest('header')) {
                    setIsShow(false);
                }
            }
        };

        const handleHiddenMenu = useCallback(() => {
            setIsShow(false);
        }, []);

        const handleResetScrollTop = useCallback(() => {
            window.scrollTo(0, 0);
        }, []);

        const handleNavLinkClick = useCallback(() => {
            handleHiddenMenu();
            handleResetScrollTop();
        }, []);

        return (
            <header className={cx('header', classes, { show: isShow })} ref={ref}>
                <div className="container">
                    <div className={cx('row', 'header__row')}>
                        {/* Logo */}
                        <Link to={routes.home}>
                            <Logo className={cx('logo')} />
                        </Link>

                        {/* menu icon */}
                        <button
                            type="button"
                            className={cx('header__menu-btn', { show: isShow })}
                            onClick={() => {
                                setIsShow(!isShow);
                            }}
                        >
                            <span className={cx('header__menu-btn-line')}></span>
                            <span className={cx('header__menu-btn-line')}></span>
                            <span className={cx('header__menu-btn-line')}></span>
                        </button>

                        {/* Navigation */}
                        <nav className={cx('navbar', { show: isShow })}>
                            <ul className={cx('nav')}>
                                <li className={cx('nav__item-wrap')}>
                                    <NavLinkItem
                                        onClick={handleNavLinkClick}
                                        className={cx('nav-item')}
                                        to={routes.home}
                                        icon={icons.home}
                                    >
                                        Home
                                    </NavLinkItem>
                                </li>
                                <li className={cx('nav__item-wrap')}>
                                    <NavLinkItem
                                        onClick={handleNavLinkClick}
                                        className={cx('nav-item')}
                                        to={routes.about}
                                        icon={icons.user}
                                    >
                                        About
                                    </NavLinkItem>
                                </li>
                                <li className={cx('nav__item-wrap')}>
                                    <NavLinkItem
                                        onClick={handleNavLinkClick}
                                        className={cx('nav-item')}
                                        to={routes.project}
                                        icon={icons.project}
                                    >
                                        Project
                                    </NavLinkItem>
                                </li>
                                <li className={cx('nav__item-wrap')}>
                                    <NavLinkItem
                                        onClick={handleNavLinkClick}
                                        className={cx('nav-item')}
                                        to={routes.resume}
                                        icon={icons.resume}
                                    >
                                        Resume
                                    </NavLinkItem>
                                </li>
                                <li className={cx('nav__item-wrap')}>
                                    <a
                                        target="_blank"
                                        href={routes.source}
                                        className={cx('header__cta', 'nav-item')}
                                    >
                                        <img
                                            className={cx('header__cta-icon')}
                                            src={icons.branch}
                                            alt="Source"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    },
);

export default Header;
