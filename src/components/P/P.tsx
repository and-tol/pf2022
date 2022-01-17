import cn from 'classnames';
import styles from './P.module.scss';
import { PProps } from './P.props';

export const P = ({ children, className, ...props }: PProps): JSX.Element => {
  return (
    <p className={cn(styles.p, className)} {...props}>
      {children}
    </p>
  );
};
