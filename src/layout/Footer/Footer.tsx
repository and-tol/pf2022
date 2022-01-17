import cn from 'classnames';
import React from 'react';
import { Navigation } from '../../components';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';

export const Footer = ({
  appearance = 'primary',
  className,
  ...props
}: FooterProps): JSX.Element => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className='wrapper'>
        <Navigation appearance={appearance} />
      </div>
      <div
        className={cn(styles.hidingBlock, className, {
          [styles.primary]: appearance === 'primary',
          [styles.white]: appearance === 'white',
        })}
      ></div>
    </footer>
  );
};
