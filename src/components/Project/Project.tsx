import Image from 'next/image';
import React, { useState } from 'react';
import cn from 'classnames';
import { Button, Heading, P } from '..';
import styles from './Project.module.scss';
import { ProjectProps } from './Project.props';
import LineDots from './line-dots.svg'

export const Project = ({
  project,
  handleShowModal,
  ...props
}: ProjectProps): JSX.Element => {
  const { name, path, url, image, technologies, description } = project || {};

  if (!project) {
    return (
      <section className='wrapper'>
        <Heading tag='h2'>Empty Project</Heading>;
      </section>
    );
  }

  const [proportion, setProportion] = useState<number>(0.25);

  const handleImageLoader = (sizes: {
    naturalWidth: number;
    naturalHeight: number;
  }) => {
    setProportion(sizes.naturalWidth / sizes.naturalHeight);
  };

  return (
    <section className={cn('wrapper', styles.section)} {...props}>
      <Heading tag='h4' className='pb-1'>
        Project
      </Heading>
      <article className={styles.content}>
        <figure className={styles.image}>
          <a href='#' onClick={() => handleShowModal(true)}>
            <Image
              src={`${path}${image}`}
              sizes='50vw'
              width={450}
              height={450 / proportion}
              layout='responsive'
              loading='eager'
              placeholder='blur'
              blurDataURL={`${path}${image}`}
              onLoadingComplete={sizes => handleImageLoader(sizes)}
            />
          </a>
        </figure>
        <section className={styles.text}>
          <div className={styles.titleContainer}>
            <LineDots className={styles.lineDots} />
            <h3 className={styles.title}>{name}</h3>
          </div>
          <ul className={styles.tagsContainer}>
            {technologies &&
              technologies.map((technology: string, idx: number) => {
                return (
                  <li key={idx} className={styles.tag}>
                    {technology}
                  </li>
                );
              })}
          </ul>
          <P className='mt-1'>{description}</P>
          <a href={url} target='_blank'>
            <Button className={cn('button', 'mt-2')} appearance='primary'>
              Open Project
            </Button>
          </a>
        </section>
      </article>
    </section>
  );
};
