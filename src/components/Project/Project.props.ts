import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProject } from '../../interfaces/project.interface';

export interface ProjectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  project: IProject | null;

  handleShowModal: (arg: boolean) => void;
}
