import { memo } from 'react';

import { links } from '~/routes';
import icons from '~/assets/icons';
import { useClassNames } from '~/hooks';
import styles from './Socials.module.scss';

const Socials = memo(() => {
    const cx = useClassNames(styles);
    return (
        <section className={cx('socials')}>
            <h2 className={cx('socials__title')}>FIND ME ON</h2>
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
                    <a target={'_blank'} rel={'noreferrer'} href={links.mail} className={cx('socials__link')}>
                        <img src={icons.mail} alt="" className={cx('socials__img')} />
                    </a>
                </li>
            </ul>
        </section>
    );
});

export default Socials;
