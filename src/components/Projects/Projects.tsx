import React from 'react';
import cn from 'classnames';
import { Heading, ProjectLink } from '..';
import { IProject } from '../../interfaces/project.interface';
import { ProjectsProps } from './Projects.props';
import styles from './Projects.module.scss'

export const Projects = ({
  projects,
  ...props
}: ProjectsProps): JSX.Element => {
  return (
    <section className={cn('wrapper', styles.projects)} {...props}>
      <Heading tag='h4' className='pb-1'>
        My Projects
      </Heading>

      <nav>
        {projects &&
          projects.map((project: IProject): JSX.Element => {
            return <ProjectLink key={project._id} project={project} />;
          })}
      </nav>
    </section>
  );
};
