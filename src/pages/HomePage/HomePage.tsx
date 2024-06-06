import { useEffect } from 'react';

import { updateTitle } from '~/utils';
import { useClassNames } from '~/hooks';
import styles from './HomePage.module.scss';
import { Greeting, Introduce, Socials } from '~/components';

const HomePage = () => {
    const cx = useClassNames(styles);

    // Update title of HomePage
    useEffect(() => {
        updateTitle('Home');
    }, []);

    return (
        <div className={cx('home')}>
            <div className="container">
                {/* Greeting */}
                <Greeting />

                {/* Introduce */}
                <Introduce />

                {/* Socials */}
                <Socials />
            </div>
        </div>
    );
};

export default HomePage;
