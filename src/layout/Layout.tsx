import cn from 'classnames';
import { useRouter } from 'next/router';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Footer, Header } from '.';
import styles from './Layout.module.scss';
import { LayoutProps, PageBackgroundAppearance } from './Layout.props';

export const Layout = ({
  children,
  className,
  ...props
}: PropsWithChildren<LayoutProps>): JSX.Element => {
  const router = useRouter();
  const [footerAppearance, setFooterAppearance] =
    useState<PageBackgroundAppearance>('primary');
  const [headerAppearance, setHeaderAppearance] =
    useState<PageBackgroundAppearance>('primary');

  useEffect(() => {
    if (router.pathname.slice(1) === 'contact') {
      setFooterAppearance('white');
      setHeaderAppearance('white');
    }
  }, [router.pathname]);

  return (
    <div className={cn(styles.contentContainer, className)} {...props}>
      <Header className={className} appearance={headerAppearance} />
      <main className={cn(styles.main, className)}>{children}</main>
      <Footer className={className} appearance={footerAppearance} />
    </div>
  );
};
