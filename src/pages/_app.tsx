// import '@fortawesome/fontawesome-free/js/brands';
// import '@fortawesome/fontawesome-free/js/fontawesome';
// import '@fortawesome/fontawesome-free/js/regular';
// import '@fortawesome/fontawesome-free/js/solid';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import { Meta } from '../layout';
import '../styles/globals.scss';
import { onAppConfig } from '../utils/onAppConfig';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { locale } = useRouter();
  console.log('app locale', locale);

  const t = onAppConfig(locale);

  return (
    <>
      <Meta t={t} />
      <Component {...pageProps} />
    </>
  );
}

// ?   Раскомментируйте этот метод только в том случае, если у вас есть требования к блокировке данных для каждой отдельной страницы в вашем приложении. Это отключает возможность автоматической статической оптимизации, в результате чего каждая страница в вашем приложении отображается на стороне сервера.
/*
MyApp.getInitialProps = async (appContext: AppContext) => ({
  ...(await App.getInitialProps(appContext)),
});
*/

export default MyApp;
