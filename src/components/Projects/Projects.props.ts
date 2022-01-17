import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProject } from '../../interfaces/project.interface';

export interface ProjectsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  projects: IProject[] | null;
}
