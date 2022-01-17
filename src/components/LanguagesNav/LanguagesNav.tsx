import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import cn from 'classnames';
import {
  AppLanguage,
  appLanguages,
  Languages,
} from '../../config/Locale.config';
import styles from './LanguagesNav.module.scss';
import { LanguagesNavProps } from './LanguagesNav.props';
import NavItemDots from '../../assets/horDots.svg';

export const LanguagesNav = ({
  appearance,
  ...props
}: LanguagesNavProps): JSX.Element => {
  const router = useRouter();
  const { pathname, query, asPath } = router;
  const languages = Object.values(appLanguages);

  // TODO: currentLang === currentLocale === router.locale ?? locale === undefined
  const [currentLang, setCurrentLang] = useState<string>(Languages.En);
  const [visible, setVisible] = useState<boolean>(false);

  const handleVisible = (): void => {
    setVisible(!visible);
  };

  const handleLangPage = (e: React.MouseEvent, locale: string): void => {
    e.preventDefault();
    setVisible(!visible);
    // router.push(path);
    // router.push(router.pathname, router.asPath, {
    //   locale,
    // });
    router.push({ pathname, query }, asPath, { locale });

    console.log('path >>', router.pathname, router.asPath, locale);
  };

  // ? При использованиие select
  const changeLanguages = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <>
      {languages.length > 1 && !visible && (
        <div className={styles.navLang}>
          <button
            className={cn(
              'font-accent',
              styles.navItem,
              styles.active,
              // pathname === language.path ? styles.active : undefined,
              styles.btn
            )}
            onClick={handleVisible}
          >
            {currentLang}
          </button>
        </div>
      )}
      {languages.length > 1 && visible && (
        <nav className={cn(styles.navLang, styles.dropdownNav)} {...props}>
          {languages.map((language: AppLanguage, idx: number): JSX.Element => {
            return (
              <Link key={language.lang} href={language.path}>
                <>
                  <a
                    className={cn(
                      styles.navItem,
                      { [styles.secondColor]: appearance === 'white' },
                      router.pathname === language.path
                        ? styles.active
                        : undefined
                    )}
                    onClick={(e: React.MouseEvent) =>
                      handleLangPage(e, language.lang)
                    }
                  >
                    {language.lang}
                  </a>
                  {idx !== Object.values(appLanguages).length - 1 ? (
                    <NavItemDots
                      className={cn(styles.dots, {
                        [styles.secondColor]: appearance === 'white',
                      })}
                    />
                  ) : (
                    <></>
                  )}
                </>
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
};
