import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useClassNames } from '~/hooks';
import styles from './Header.module.scss';
import { routes } from '~/routes';
import Logo from '~components/Logo';
import icons from '~assets/icons';
import NavLinkItem from '~components/NavLinkItem';

const Header = ({ className: cusClassName }: { className?: string }) => {
    const cx = useClassNames(styles);
    const classes = cusClassName ? cusClassName : '';
    const [isShow, setIsShow] = useState(false);
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);

    const handleResize = () => {
        setWidthScreen(window.innerWidth);
    };

    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    useEffect(() => {
        document.documentElement.addEventListener('click', handleCloseHeader);

        return () => {
            document.documentElement.removeEventListener('click', handleCloseHeader);
        };
        // eslint-disable-next-line
    }, []);

    const handleCloseHeader: (e: MouseEvent) => void = (e) => {
        if (widthScreen <= 991.98 && isShow) {
            const targetElement = e.target as HTMLElement;
            if (targetElement && !targetElement.closest('header')) {
                setIsShow(false);
            }
        }
    };

    return (
        <header className={cx('header', classes, { show: isShow })}>
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
                                <NavLinkItem className={cx('nav-item')} to={routes.home} icon={icons.home}>
                                    Home
                                </NavLinkItem>
                            </li>
                            <li className={cx('nav__item-wrap')}>
                                <NavLinkItem className={cx('nav-item')} to={routes.about} icon={icons.user}>
                                    About
                                </NavLinkItem>
                            </li>
                            <li className={cx('nav__item-wrap')}>
                                <NavLinkItem
                                    className={cx('nav-item')}
                                    to={routes.project}
                                    icon={icons.project}
                                >
                                    Project
                                </NavLinkItem>
                            </li>
                            <li className={cx('nav__item-wrap')}>
                                <NavLinkItem
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
                                    <img className={cx('header__cta-icon')} src={icons.branch} alt="Source" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
