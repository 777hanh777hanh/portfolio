import SkillList from '~components/SkillList';
import { myData } from '~/data';
import { useClassNames } from '~/hooks';
import styles from './SkillSet.module.scss';

const SkillSet = () => {
    const cx = useClassNames(styles);

    return (
        <section className={cx('skillSet')}>
            <h2 className={cx('skillSet__title')}>
                Professional <mark className={cx('highlight-text', 'highlight-text--ff')}>Skillset</mark>
            </h2>
            {/* List */}
            <div className={cx('skillSet__content')}>
                <SkillList dataList={myData.skills} />
            </div>
        </section>
    );
};

export default SkillSet;
