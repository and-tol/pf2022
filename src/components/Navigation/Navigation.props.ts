import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { PageBackgroundAppearance } from '../../layout/Layout.props';

export interface NavigationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  appearance?: PageBackgroundAppearance;
}
