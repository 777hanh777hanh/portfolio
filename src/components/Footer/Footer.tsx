import { ReactNode } from 'react';

import { useClassNames } from '~/hooks';
import styles from './Footer.module.scss';
import icons from '~assets/icons';
import { links } from '~/routes';

type FooterProps = ({ className }: { className?: string }) => ReactNode;

const Footer: FooterProps = ({ className: cusClassName }) => {
    const cx = useClassNames(styles);
    const classes = cusClassName ? cusClassName : '';

    return (
        <footer className={cx('footer', classes)}>
            <div className="container">
                <div className={cx('footer__row')}>
                    {/* Footer desc */}
                    <div className={cx('footer__col')}>
                        <h4 className={cx('footer__title')}>Developed by Tran Thien Thanh</h4>
                    </div>

                    {/* Footer Copyright */}
                    <div className={cx('footer__col', 'footer__copyright')}>
                        <div className={cx('footer__copyright-desc')}>
                            Copyright © 2024 | Tran Thien Thanh
                        </div>
                    </div>

                    {/* Footer Socials */}
                    <div className={cx('footer__col', 'footer__socials')}>
                        <a
                            target="_blank"
                            rel="no-reference"
                            href={links.github}
                            className={cx('footer__link')}
                        >
                            <img className={cx('footer__icon')} src={icons.github} alt="Github" />
                        </a>
                        <a
                            target="_blank"
                            rel="no-reference"
                            href={links.linkedin}
                            className={cx('footer__link')}
                        >
                            <img className={cx('footer__icon')} src={icons.linkedin} alt="Linkedin" />
                        </a>
                        <a
                            target="_blank"
                            rel="no-reference"
                            href={links.mail}
                            className={cx('footer__link')}
                        >
                            <img className={cx('footer__icon')} src={icons.mail} alt="Mail" />
                        </a>
                        <a
                            target="_blank"
                            rel="no-reference"
                            href={links.facebook}
                            className={cx('footer__link')}
                        >
                            <img className={cx('footer__icon')} src={icons.fb} alt="Facebook" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
