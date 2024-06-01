import { Link } from 'react-router-dom';

import { useClassNames } from '~/hooks';
import styles from './Header.module.scss';
import { routes } from '~/routes';

const Header = ({ className: cusClassName }: { className?: string }) => {
    const cx = useClassNames(styles);
    const classes = cusClassName ? cusClassName : '';

    return (
        <header className={cx('header', classes)}>
            <div className="container">
                <Link to={routes.home} className={cx('logo')}>
                    777hanh TRANTHIENTHANH
                </Link>
            </div>
        </header>
    );
};

export default Header;
