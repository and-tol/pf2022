import { appLanguages } from './Locale.config';

export interface IAppConfigLang {
  site_name: string;
  title: string;
  description: string;
  locale: string;
  keywords: string;
}

export const AppConfig: { en: IAppConfigLang; ru: IAppConfigLang } = {
  en: {
    site_name: 'Portfolio',
    title: 'Andrey Tolstoy',
    description: 'Projects an CV',
    locale: appLanguages.en.lang,
    keywords: 'React, NextJS, frontend',
  },
  ru: {
    site_name: 'Портфолио',
    title: 'Андрей Толстой',
    description: 'Проекты CV',
    locale: appLanguages.ru.lang,
    keywords: 'React, NextJS, frontend',
  },
};

export enum IndexSectionsId {
  About = 'about',
  Projects = 'projects',
  Contact = 'contact',
}
export interface Section {
  id: string;
  sectionName: string;
  path: string;
}

export const sections: Section[] = [
  {
    id: IndexSectionsId.About,
    sectionName: 'About',
    path: `/#${IndexSectionsId.About}`,
  },
  {
    id: IndexSectionsId.Projects,
    sectionName: 'Projects',
    path: `/#${IndexSectionsId.Projects}`,
  },
  {
    id: IndexSectionsId.Contact,
    sectionName: 'Contact',
    path: `/#${IndexSectionsId.Contact}`,
  },
];
export enum IndexPagesId {
  About = 'about',
  Projects = 'projects',
  Contact = 'contact',
}
export interface Page {
  id: string;
  page: string;
  path: string;
}
export const pages: Page[] = [
  {
    id: IndexPagesId.About,
    page: 'About',
    path: `/`,
  },
  {
    id: IndexPagesId.Projects,
    page: 'Projects',
    path: `/${IndexPagesId.Projects}`,
  },
  {
    id: IndexPagesId.Contact,
    page: 'Contact',
    path: `/${IndexPagesId.Contact}`,
  },
];
