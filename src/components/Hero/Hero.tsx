import cn from 'classnames';
import React from 'react';
import { Button, Heading, P } from '..';
import DecorateImage from './decorate.svg';
import styles from './Hero.module.scss';
import { HeroProps } from './Hero.props';
export const Hero = ({ ...props }: HeroProps): JSX.Element => {
  return (
    <>
      <div className={cn('wrapper', styles.hero)} {...props}>
        <article className={styles.heroContent}>
          <div className={styles.heroTitle}>
            <Heading tag='h1'>Andrey Tolstoy</Heading>
            <Heading tag='h3'>Frontend developer</Heading>
          </div>
          <div className={cn(styles.heroText, 'font-primary-color')}>
            <P>
              I started as a graphic designer. I did the design and layout of
              booklets, flyers, packages.
            </P>
            <P>
              At some point, I became interested in the digital environment. I
              studied web design at courses and did design. After some time, I
              realized that a web designer should also know the technology. And
              I started learning to code.
            </P>
            <P>
              Now I can develop a medium-sized website or application. I
              understand the semantics. I understand that it is important to
              maintain the coding style. I understand why CSS and JavaScript
              frameworks are needed. I can take the necessary information from
              the designer's layout. I have experience working in a small team
              and independently.
            </P>
            <P>
              Currently, I continue to study React, Redux, JavaScript and the
              React ecosystem.
            </P>
          </div>
          <a href='/assets/data/CV_AndrejsTolstojs_e.pdf'>
            <Button appearance='primary'>Download CV</Button>
          </a>
        </article>
        <div className={styles.heroDecorate}>
          <DecorateImage />
        </div>
      </div>
    </>
  );
};
