import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = ({
  to,
  href,
  leftIcon,
  rightIcon,
  type = 'text',
  size = 'medium',
  rounded = false,
  disabled = false,
  className,
  children,
  onClick,
  ...props
}) => {
  let Comp = 'button';
  const _props = {
    onClick,
    ...props,
  };

  //Remove event listener when button disabled
  if (disabled) {
    Object.keys(_props).forEach((key) => {
      if (key.startsWith('on') && typeof _props[key] === 'function') {
        delete _props[key];
      }
    });
  }

  if (to) {
    _props.to = to;
    Comp = Link;
  } else if (href) {
    _props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    [type]: type, //primay, outline, text, btn-rounded
    [size]: size, //small, medium, large
    disabled,
    rounded,
  });

  return (
    <Comp className={classes} {..._props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
};

export default Button;
