import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Modal, Project } from '../../components';
import { AppConfig, IAppConfigLang } from '../../config/App.config';
import { IProject } from '../../interfaces/project.interface';
import { Layout } from '../../layout/Layout';
import { getServerData } from '../../utils/getServerData';
import styles from '../../styles/ModalPicture.module.scss';
import { onAppConfig } from '../../utils/onAppConfig';

export default function ProjectSlugPage({
  project = null,
}: ProjectAliasProps): JSX.Element {
  const { locale, locales, defaultLocale } = useRouter();
  const t = onAppConfig(locale);

  const { path, image } = project || {};
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Layout className='bg-primary'>
      <Head>
        <title> {t && t?.title} | Project</title>
      </Head>

      <Project project={project} handleShowModal={setShowModal} />
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Image
          src={`${path}${image}`}
          layout='fill'
          className={styles.picture}
          loading='eager'
          placeholder='blur'
          blurDataURL={`${path}${image}`}
        />
      </Modal>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async ctx => {
  const { locales } = ctx;

  const projects: IProject[] = await getServerData('data', 'projects.json');

  // let paths = projects.map(project => ({
  //   params: { slug: project.slug },
  // }));

  let paths: any[] = [];

  if (locales) {
    for (const locale of locales) {
      for (const project of projects) {
        paths.push({ params: { slug: project.slug }, locale });
      }
    }
  }

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async cxt => {
  const { locale = null, locales = ['ru', 'en'] } = cxt;
  const slug = await cxt.params?.slug;

  const projects: IProject[] = await getServerData('data', 'projects.json');
  const project =
    projects && projects.filter((p): boolean => p.slug === slug)[0];

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project, locale, locales },
  };
};

export interface ProjectAliasProps {
  project: IProject | null;
}
