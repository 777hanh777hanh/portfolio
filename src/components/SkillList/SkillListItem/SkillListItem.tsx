import { ReactNode, memo } from 'react';
import { useClassNames } from '~/hooks';
import style from './SkillListItem.module.scss';

type ItemProps = {
    icon: string | undefined;
    title: string;
};
type SkillItemFCProps = ({ icon, title }: ItemProps) => ReactNode;

const SkillListItem: SkillItemFCProps = memo(({ icon, title }) => {
    const cx = useClassNames(style);

    return (
        <div className={cx('item')}>
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
