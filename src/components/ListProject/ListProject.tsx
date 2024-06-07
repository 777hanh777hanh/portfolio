import { useClassNames } from '~/hooks';
import { myProjects } from '~/data';
import styles from './ListProject.module.scss';
import CardProject from '../CardProject';

const ListProject = () => {
    const cx = useClassNames(styles);

    return (
        <div className={cx('list')}>
            {myProjects.map((project, index) => {
                return (
                    <div className={cx('card')} key={index}>
                        <CardProject project={project} />
                    </div>
                );
            })}
        </div>
    );
};

export default ListProject;
