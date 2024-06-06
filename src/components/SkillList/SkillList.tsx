import { memo, ReactNode } from 'react';
import { useClassNames } from '~/hooks';
import style from './SkillList.module.scss';
import SkillListItem from './SkillListItem';

type SkillListProps = ({
    className,
    dataList,
}: {
    className?: string;
    dataList?: {
        icon: string;
        title: string;
    }[];
}) => ReactNode;

const SkillList: SkillListProps = memo(({ className: cusClassName, dataList }) => {
    const cx = useClassNames(style);
    const classes = cx('SkillList', cusClassName ? cusClassName : '');

    return (
        <div className={classes}>
            <div className={cx('skillList__container')}>
                {dataList?.map((item, index) => (
                    <SkillListItem key={index} icon={item.icon} title={item.title} />
                ))}
            </div>
        </div>
    );
});

export default SkillList;
