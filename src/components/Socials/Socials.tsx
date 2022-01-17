import React from 'react';
import styles from './Socials.module.scss';
import { SocialsProps } from './Socials.props';

export const Socials = ({ socials, ...props }: SocialsProps): JSX.Element => {
  return (
    <ul {...props} className={styles.icons}>
      {socials &&
        socials?.map(social => {
          return (
            <li key={social._id} className={styles.icon}>
              <a href={social.path}>
                {/* <FontAwesomeIcon icon={['fab', social.icon]} size="lg" /> */}
              </a>
            </li>
          );
        })}
    </ul>
  );
};
