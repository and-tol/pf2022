import cn from 'classnames';
import { HeadingProps } from './Heading.props';
import styles from './Heading.module.scss';

export const Heading = ({
  className,
  tag,
  children,
  ...props
}: HeadingProps): JSX.Element => {
  const Tag = tag || 'h1';
  switch (tag) {
    case 'h1':
      return (
        <Tag
          className={cn(styles.h1, 'font-primary-color', className)}
          {...props}
        >
          {children}
        </Tag>
      );
    case 'h2':
      return (
        <Tag
          className={cn(styles.h2, 'font-primary-color', className)}
          {...props}
        >
          {children}
        </Tag>
      );

    case 'h3':
      return (
        <Tag
          className={cn(styles.h3, 'font-third-color', className)}
          {...props}
        >
          {children}
        </Tag>
      );

    case 'h4':
      return (
        <Tag
          className={cn(styles.h4, 'font-third-color', className)}
          {...props}
        >
          {children}
        </Tag>
      );

    default:
      return <></>;
  }
};
