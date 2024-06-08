import { memo } from 'react';

import { useClassNames } from '~/hooks';
import styles from './Discover.module.scss';
import { imageSvg } from '~/assets/images';

const Discover = memo(() => {
    const cx = useClassNames(styles);

    return (
        <section className={cx('discover')}>
            <div className="row gy-xs-3 gy-sm-5 gy-md-6 justify-content-center align-items-center">
                <div className="col col-12 col-lg-7">
                    <div className="discover__content">
                        <h2 className={cx('discover__title', 'text-center')}>
                            <mark className={cx('highlight-text', 'highlight-text--ff')}>Discover </mark>
                            Me !
                        </h2>
                        <h1 className={cx('discover__text')}>
                            Hi Everyone, I am{' '}
                            <mark className={cx('highlight-text', 'highlight-text--ff')}>Thien Thanh</mark>{' '}
                            from{' '}
                            <mark className={cx('highlight-text', 'highlight-text--ff')}>Ninh Thuan </mark>
                            Province.
                        </h1>
                        <p className={cx('discover__text')}>
                            I am{' '}
                            <mark className={cx('highlight-text', 'highlight-text--ff')}>Web Developer</mark>.
                        </p>
                        <p className={cx('discover__text')}>
                            I have done an internship as Front-end developer at TMA (2022)
                        </p>
                        <p className={cx('discover__text')}>
                            I currently possess one year of experience working in{' '}
                            <mark className={cx('highlight-text', 'highlight-text--ff')}>
                                Front-end Development
                            </mark>{' '}
                            and am comfortable using frameworks like{' '}
                            <mark className={cx('highlight-text', 'highlight-text--ff')}>ReactJS</mark>.
                        </p>
                        <p className={cx('discover__text')}>
                            I'm currently open to new collaborations or work where I can contribute and grow.
                            Feel free to connect with me.
                        </p>
                    </div>
                </div>

                <div className="col col-12 col-lg-5">
                    <div className={cx('discover__image-wrapper')}>
                        <img
                            className={cx('discover__img')}
                            src={imageSvg.aboutMe}
                            alt="Front-end Developer"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Discover;
