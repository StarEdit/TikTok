import React from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const MenuItem = ({ data }) => {
  return (
    <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
};

export default MenuItem;
