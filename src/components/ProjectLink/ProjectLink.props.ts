import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { IProject } from '../../interfaces/project.interface';

export interface ProjectLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  project: IProject | null;
}
