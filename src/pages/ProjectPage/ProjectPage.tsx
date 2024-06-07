import { useEffect } from 'react';

import { updateTitle } from '~/utils';
import { useClassNames } from '~/hooks';
import styles from './ProjectPage.module.scss';
import { ListProject } from '~/components';

const ProjectPage = () => {
    const cx = useClassNames(styles);

    // Update title of HomePage
    useEffect(() => {
        updateTitle('Projects');
    }, []);

    return (
        <section className={cx('projectsP')}>
            <div className="container">
                <div className={cx('projectsP__header')}>
                    <h1 className={cx('projectsP__title')}>
                        My <mark className={cx('highlight-text', 'highlight-text--ff')}>Projects</mark>
                    </h1>
                    <h4 className={cx('projectsP__subtitle')}>Here are a few projects I've worked.</h4>
                </div>

                {/* List Projects */}
                <ListProject />
            </div>
        </section>
    );
};

export default ProjectPage;
