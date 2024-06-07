import { useClassNames } from '~/hooks';
import styles from './Loader.module.scss';

const Loader = () => {
    const cx = useClassNames(styles);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('loader')}>
                <svg className={cx('svg')}>
                    <rect className={cx('rect')}></rect>
                </svg>
            </div>
        </div>
    );
};

export default Loader;
