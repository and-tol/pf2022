import Head from 'next/head';
import { useRouter } from 'next/router';
import { Hero } from '../components';
import { Layout } from '../layout';
import { onAppConfig } from '../utils/onAppConfig';

export default function Home(): JSX.Element {
  const { locale } = useRouter();
  const t = onAppConfig(locale);

  return (
    <Layout className='bg-primary'>
      <Head>
        <title> {t?.title} | About</title>
      </Head>
      <Hero />
    </Layout>
  );
}
