import { memo, useEffect } from 'react';

import { useClassNames } from '~/hooks';
import { updateTitle, renderLinkCanonical } from '~/utils';
import styles from './AboutPage.module.scss';
import { Discover, SkillSet, ToolUsed, GithubCalender } from '~/components';

const AboutPage = memo(() => {
    const cx = useClassNames(styles);

    // Update title of HomePage
    useEffect(() => {
        updateTitle('About');
        renderLinkCanonical();
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
                <GithubCalender />
            </div>
        </div>
    );
});

export default AboutPage;
