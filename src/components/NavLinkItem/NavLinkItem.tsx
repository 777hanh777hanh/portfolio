import { NavLink } from 'react-router-dom';
import { ReactElement, ReactNode, memo } from 'react';

import { useClassNames } from '~/hooks';
import style from './NavLinkItem.module.scss';

type NavLinkItem = ({
    className,
    to,
    children,
}: {
    className?: string;
    to: string;
    icon?: string;
    children: ReactNode | ReactElement | string;
    onClick?: () => void;
}) => ReactNode;

const NavLinkItem: NavLinkItem = memo(
    ({ className: cusClassName, to, children, icon, onClick: onClickCallback }) => {
        const cx = useClassNames(style);
        const classes = cusClassName ? cusClassName : '';

        return (
            <NavLink
                onClick={onClickCallback}
                to={to}
                className={({ isActive }) =>
                    [isActive ? cx('active') : '', cx(classes, 'nav-link')].join(' ')
                }
            >
                {icon ? (
                    <div className={cx('image')}>
                        <img src={icon} alt="" className={cx('icon')} />
                    </div>
                ) : null}
                {children}
            </NavLink>
        );
    },
);

export default NavLinkItem;
