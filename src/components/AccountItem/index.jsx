import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://images.hdqwalls.com/download/sunshine-girl-c9-640x960.jpg"
        alt="Avatar"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>NVA</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>NONMAN</span>
      </div>
    </div>
  );
};

export default AccountItem;
