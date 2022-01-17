import React from 'react';
import cn from 'classnames';
import { Form, Heading, P, Socials } from '..';
import styles from './Contacts.module.scss';
import { ContactsProps } from './Contacts.props';

export const Contacts = ({ socials, ...props }: ContactsProps): JSX.Element => {
  return (
    <section className={cn('wrapper', styles.pageContacts)} {...props}>
      <Heading tag='h4' className='pb-1'>
        Contact
      </Heading>
      <section className={styles.section}>
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>Contact</h3>
          <P className={styles.infoText}>
            Want to know more or just chat?
            <br />
            You are welcome!
          </P>
        </div>
        <div className={styles.contacts}>
          <Form />
          <div className={styles.socialsContainer}>
            <h4 className={cn('formTitle', styles.socialsTitle)}>Follow</h4>

            {socials && <Socials socials={socials} />}

            <ul className={styles.icons}></ul>
          </div>
        </div>
      </section>
    </section>
  );
};
