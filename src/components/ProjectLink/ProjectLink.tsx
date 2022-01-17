import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ArrowIcon from './arrow.svg';
import styles from './ProjectLink.module.scss';
import { ProjectLinkProps } from './ProjectLink.props';

export const ProjectLink = ({
  project,
  ...props
}: ProjectLinkProps): JSX.Element => {
  return (
    <>
      <Link href={`/projects/${project?.slug}`}>
        <a className={styles.link} {...props}>
          <span className={styles.name}>{project?.name}</span>
          <ArrowIcon className={styles.icon} />
          <div className={styles.image}>
            <Image
              src={`/assets/images/${project?.imageSmall}`}
              width="180"
              height="180"
              layout="intrinsic"
              className={styles.image}
            />
          </div>
        </a>
      </Link>
    </>
  );
};
