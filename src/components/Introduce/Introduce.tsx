import { memo } from 'react';

import { useClassNames } from '~/hooks';
import { Magnetic } from '~/components';
import { imageSvg } from '~assets/images';
import styles from './Introduce.module.scss';

const Introduce = memo(() => {
    const cx = useClassNames(styles);

    return (
        <section className={cx('introduce')}>
            <div className="row justify-content-center align-items-center">
                <div className="col col-12 col-lg-7">
                    <h2 className={cx('introduce__title')}>
                        <mark className={cx('highlight-text', 'highlight-text--ff')}>Introduce </mark>
                        Myself
                    </h2>
                    <p className={cx('introduce__desc')}>
                        I'm a <mark className={cx('highlight-text')}>Front-end Developer</mark> with a deep
                        passion for programming. What I love most is creativity and the ability to create
                        engaging and useful websites for users
                    </p>
                    <p className={cx('introduce__desc')}>
                        I'm always ready to tackle new challenges and continuously learn to develop myself
                    </p>
                    <p className={cx('introduce__desc')}>
                        I am fluent in <mark className={cx('highlight-text')}>JavaScript</mark>,{' '}
                        <mark className={cx('highlight-text')}>TypeScript</mark>,{' '}
                        <mark className={cx('highlight-text')}>HTML</mark>,{' '}
                        <mark className={cx('highlight-text')}>CSS & SCSS</mark>. I have some knowledge and
                        can work with <mark className={cx('highlight-text')}>ReactJS</mark> as well as related
                        frameworks
                    </p>
                    <p className={cx('introduce__desc')}>
                        Progress and innovation are always what I look forward to and believe in
                    </p>
                </div>
                <div className="col col-12 col-lg-5">
                    <Magnetic>
                        <div className={cx('introduce__image-wrapper')}>
                            <img
                                className={cx('introduce__img')}
                                src={imageSvg.hello}
                                alt="Front-end Developer"
                            />
                        </div>
                    </Magnetic>
                </div>
            </div>
        </section>
    );
});

export default Introduce;
