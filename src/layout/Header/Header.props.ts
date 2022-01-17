import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { PageBackgroundAppearance } from '../Layout.props';

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isLogo?: boolean;
  appearance?: PageBackgroundAppearance;
}
