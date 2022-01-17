import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Socials } from '../../interfaces/socials.interface';

export interface ContactsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  socials: Socials[] | null;
}
