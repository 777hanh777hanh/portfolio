import { memo, useEffect } from 'react';

import { useClassNames } from '~/hooks';
import { updateTitle } from '~/utils';
import styles from './AboutPage.module.scss';
import Discover from '~components/Discover';
import SkillSet from '~components/SkillSet';
import ToolUsed from '~components/ToolUsed';
import GithubCalenderComponent from '~components/GithubCalender';

const AboutPage = memo(() => {
    const cx = useClassNames(styles);

    // Update title of HomePage
    useEffect(() => {
        updateTitle('About');
    }, []);

    return (
        <div className={cx('about-page')}>
            <div className="container">
                {/* Discover */}
                <Discover />

                {/* Skill Set*/}
                <SkillSet />

                {/* Tools Used*/}
                <ToolUsed />

                {/* Github Calender */}
                <GithubCalenderComponent />
            </div>
        </div>
    );
});

export default AboutPage;
