import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper')}>
                <img
                    className={cx('avatar')}
                    src="https://avatars.githubusercontent.com/u/73231972?s=96&v=4
                    "
                    alt="Phu"
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>Parker Lieu</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                    <span className={cx('username')}>ParkerLieu</span>
                </div>
            </div>
        </div>
    );
}

export default AccountItem;
