import { AppConfig, IAppConfigLang } from '../config/App.config';

export const onAppConfig = (
  locale: string | undefined
): IAppConfigLang | undefined => {
  let t: IAppConfigLang | undefined = undefined;

  if (!locale) {
    t = AppConfig.en;
  }

  switch (locale) {
    case 'ru':
      t = AppConfig.ru;
      break;
    case 'ru-Ru':
      t = AppConfig.ru;
      break;
    case 'en':
      t = AppConfig.en;
      break;
    case 'en-Us':
      t = AppConfig.en;
      break;

    default:
      break;
  }

  return t;
};
