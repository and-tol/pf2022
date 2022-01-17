import Head from 'next/head';
import { useRouter } from 'next/router';
import { AppConfig, IAppConfigLang } from '../../config/App.config';

export const Meta = ({ t }) => {
  return (
    <Head>
      <meta charSet='utf-8' key='charset' />
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1'
        key='viewport'
      />
      <meta name='keywords' content={t?.keywords} />
      <meta name='description' content={t?.description} />
      <link rel='icon' href='/favicon.ico' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='anonymous'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Lora:wght@400;500;600&family=Noto+Serif+Display:wght@100;200;300;400;500;600;700&display=swap'
        rel='stylesheet'
      />
    </Head>
  );
};
