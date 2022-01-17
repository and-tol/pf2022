import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Socials } from '../../interfaces/socials.interface';

export interface SocialsProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  socials?: Socials[] | null;
}
