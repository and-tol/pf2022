// Localization
// export const AppLanguages: string[] = ['eng', 'rus', 'lat'];
export enum Languages {
  En = 'en',
  Ru = 'ru',
}

export enum LanguagesKeys {
  Lang = 'lang',
  Path = 'path',
}
export enum Path {
  Root = '/',
}

export interface AppLanguage {
  lang: string;
  path: string;
  isRealized: boolean;
}

export interface AppLanguages {
  [Languages.En]: AppLanguage;
  [Languages.Ru]: AppLanguage;
}

export const appLanguages: AppLanguages = {
  [Languages.En]: {
    [LanguagesKeys.Lang]: Languages.En,
    [LanguagesKeys.Path]: Path.Root,
    isRealized: true,
  },
  [Languages.Ru]: {
    [LanguagesKeys.Lang]: Languages.Ru,
    [LanguagesKeys.Path]: `${Path.Root}${Languages.Ru}`,
    isRealized: true,
  },
};
