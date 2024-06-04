import { useEffect } from 'react';
import Lottie from 'lottie-react';

import { updateTitle } from '~/utils';
import { useClassNames } from '~/hooks';
import { links } from '~/routes';
import { TextAnimation } from '~components/TextAnimation';
import { lottieFiles } from '~assets/images';
import { imageSvg } from '~assets/images';

import styles from './HomePage.module.scss';
import icons from '~/assets/icons';

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
                <section className={cx('greet')}>
                    <div className="row justify-content-center align-items-center">
                        <div className="col col-12 col-lg-7">
                            <div className="greet__content">
                                <h4 className={cx('greet__text')}>
                                    Hi There!
                                    <span className={cx('greet__waving-hand')}>👋🏻</span>
                                </h4>
                                <h3 className={cx('greet__text')}>
                                    I am <mark className={cx('highlight-text')}>Tran Thien Thanh</mark>
                                </h3>
                                <h2 className={cx('greet__text', 'greet__text--animation')}>
                                    <mark className={cx('highlight-text')}>
                                        <TextAnimation />
                                    </mark>
                                </h2>
                            </div>
                        </div>

                        <div className="col col-12 col-lg-5">
                            <div className={cx('greet__image-wrapper')}>
                                <Lottie
                                    className={cx('greet__img')}
                                    animationData={lottieFiles.coder}
                                    loop={true}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduce */}
                <section className={cx('introduce')}>
                    <div className="row justify-content-center align-items-center">
                        <div className="col col-12 col-lg-7">
                            <h2 className={cx('introduce__title')}>
                                <mark className={cx('highlight-text', 'highlight-text--ff')}>Introduce </mark>
                                Myself
                            </h2>
                            <p className={cx('introduce__desc')}>
                                I'm a <mark className={cx('highlight-text')}>Front-end Developer</mark> with a
                                deep passion for programming. What I love most is creativity and the ability
                                to create engaging and useful websites for users
                            </p>
                            <p className={cx('introduce__desc')}>
                                I'm always ready to tackle new challenges and continuously learn to develop
                                myself
                            </p>
                            <p className={cx('introduce__desc')}>
                                I am fluent in <mark className={cx('highlight-text')}>JavaScript</mark>,{' '}
                                <mark className={cx('highlight-text')}>TypeScript</mark>,{' '}
                                <mark className={cx('highlight-text')}>HTML</mark>,{' '}
                                <mark className={cx('highlight-text')}>CSS & SCSS</mark>. I have some
                                knowledge and can work with{' '}
                                <mark className={cx('highlight-text')}>ReactJS</mark> as well as related
                                frameworks
                            </p>
                            <p className={cx('introduce__desc')}>
                                Progress and innovation are always what I look forward to and believe in
                            </p>
                        </div>
                        <div className="col col-12 col-lg-5">
                            <div className={cx('greet__image-wrapper')}>
                                <img
                                    className={cx('greet__img')}
                                    src={imageSvg.hello}
                                    alt="Front-end Developer"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Socials */}
                <section className={cx('socials')}>
                    <h2 className={cx('socials__title')}>FINE ME ON</h2>
                    <h2 className={cx('socials__desc')}>Feel free to connect with me</h2>
                    <ul className={cx('socials__list')}>
                        <li>
                            <a
                                target={'_blank'}
                                rel={'noreferrer'}
                                href={links.github}
                                className={cx('socials__link')}
                            >
                                <img src={icons.github} alt="" className={cx('socials__img')} />
                            </a>
                        </li>
                        <li>
                            <a
                                target={'_blank'}
                                rel={'noreferrer'}
                                href={links.linkedin}
                                className={cx('socials__link')}
                            >
                                <img src={icons.linkedin} alt="" className={cx('socials__img')} />
                            </a>
                        </li>
                        <li>
                            <a
                                target={'_blank'}
                                rel={'noreferrer'}
                                href={links.facebook}
                                className={cx('socials__link')}
                            >
                                <img src={icons.fb} alt="" className={cx('socials__img')} />
                            </a>
                        </li>
                        <li>
                            <a
                                target={'_blank'}
                                rel={'noreferrer'}
                                href={links.mail}
                                className={cx('socials__link')}
                            >
                                <img src={icons.mail} alt="" className={cx('socials__img')} />
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
