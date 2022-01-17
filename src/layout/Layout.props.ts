import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface LayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  bgColor?: string;
  footerAppearance?: PageBackgroundAppearance;
  headerAppearance?: PageBackgroundAppearance;
}

export type PageBackgroundAppearance = 'primary' | 'white';
