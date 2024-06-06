import Lottie from 'lottie-react';
import { memo } from 'react';

import { TextAnimation } from '~components/TextAnimation';
import { lottieFiles } from '~assets/images';
import { useClassNames } from '~/hooks';
import styles from './Greeting.module.scss';

const Greeting = memo(() => {
    const cx = useClassNames(styles);

    return (
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
                        <Lottie className={cx('greet__img')} animationData={lottieFiles.coder} loop={true} />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Greeting;
