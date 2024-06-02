import { Link } from 'react-router-dom';

import { useClassNames } from '~/hooks';
import styles from './Header.module.scss';
import { routes } from '~/routes';
import Logo from '~components/Logo';
import icons from '~assets/icons';
import NavLinkItem from '~components/NavLinkItem';
import { useState } from 'react';

const Header = ({ className: cusClassName }: { className?: string }) => {
    const cx = useClassNames(styles);
    const classes = cusClassName ? cusClassName : '';
    const [isShow, setIsShow] = useState(false);

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
                            <li>
                                <NavLinkItem className={cx('nav-item')} to={routes.home} icon={icons.home}>
                                    Home
                                </NavLinkItem>
                            </li>
                            <li>
                                <NavLinkItem className={cx('nav-item')} to={routes.about} icon={icons.user}>
                                    About
                                </NavLinkItem>
                            </li>
                            <li>
                                <NavLinkItem
                                    className={cx('nav-item')}
                                    to={routes.project}
                                    icon={icons.project}
                                >
                                    Project
                                </NavLinkItem>
                            </li>
                            <li>
                                <NavLinkItem
                                    className={cx('nav-item')}
                                    to={routes.resume}
                                    icon={icons.resume}
                                >
                                    Resume
                                </NavLinkItem>
                            </li>
                            <li>
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
