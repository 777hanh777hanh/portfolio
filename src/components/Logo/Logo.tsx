import { useClassNames } from '~/hooks';
import styles from './Logo.module.scss';
import logo from '~assets/logo';
import { ReactNode } from 'react';

type LogoProps = ({ className }: { className?: string }) => ReactNode;

const Logo: LogoProps = ({ className: cusClassName }) => {
    const cx = useClassNames(styles);
    const classes = cusClassName ? cusClassName : '';
    return (
        <div className={cx('logo', classes)}>
            <img src={logo.logoDark} alt="777hanh" className={cx('logo__img')} />
        </div>
    );
};

export default Logo;
