import { SkillList } from '~/components';
import { mySkills } from '~/data';
import { useClassNames } from '~/hooks';
import styles from './ToolUsed.module.scss';

const ToolUsed = () => {
    const cx = useClassNames(styles);

    return (
        <section className={cx('tools')}>
            <h2 className={cx('tools__title')}>
                <mark className={cx('highlight-text', 'highlight-text--ff')}>Tools</mark> I Use
            </h2>
            {/* List */}
            <div className={cx('tools__content')}>
                <SkillList dataList={mySkills.tools} />
            </div>
        </section>
    );
};

export default ToolUsed;
