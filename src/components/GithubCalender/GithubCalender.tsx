import GitHubCalendar from 'react-github-calendar';

import { useClassNames } from '~/hooks';
import styles from './GithubCalender.module.scss';

const GithubCalender = () => {
    const cx = useClassNames(styles);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Days I Code</h2>
            <GitHubCalendar
                style={{ width: '100%' }}
                username="777hanh777hanh"
                blockSize={12}
                blockMargin={4}
                blockRadius={8}
                fontSize={12}
                colorScheme={'dark'}
                hideTotalCount={true}
                hideColorLegend={true}
                theme={{
                    light: ['#fafafa', '#F4C790'],
                    dark: ['#2f2f2f', '#F4C790'],
                }}
            />
        </div>
    );
};

export default GithubCalender;
