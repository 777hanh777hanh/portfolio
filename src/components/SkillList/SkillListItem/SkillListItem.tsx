import { ReactNode, memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useClassNames } from '~/hooks';
import style from './SkillListItem.module.scss';

type ItemProps = {
    icon: string | undefined;
    title: string;
};
type SkillItemFCProps = ({ icon, title }: ItemProps) => ReactNode;

const SkillListItem: SkillItemFCProps = memo(({ icon, title }) => {
    const cx = useClassNames(style);

    const itemRef = useRef(null);
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
            }, 10);
        };

        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('load', handleResize);
            window.removeEventListener('resize', handleResize);
        };
    }, [widthScreen, isResizing]);

    // show card when hover
    useLayoutEffect(() => {
        const item = itemRef.current ? (itemRef.current as HTMLElement) : null;

        const handleMouseEnter = (e: MouseEvent) => {
            e.preventDefault();
            setIsShow(true);
        };

        const handleMouseLeave = (e: MouseEvent) => {
            e.preventDefault();
            setIsShow(false);
        };

        const handleClick = () => {
            setIsShow(!isShow);
        };

        if (item) {
            item.addEventListener('click', handleClick);
            item.addEventListener('mouseenter', handleMouseEnter);
            item.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (item) {
                item.removeEventListener('click', handleClick);
                item.removeEventListener('mouseenter', handleMouseEnter);
                item.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [isShow]);

    return (
        <div className={cx('item', { show: isShow })} ref={itemRef}>
            <div className={cx('content')}>
                <div className={cx('image')}>
                    <img className={cx('icon')} src={icon} alt={title} />
                </div>
                <h4 className={cx('name')}>{title}</h4>
            </div>
        </div>
    );
});

export default SkillListItem;
