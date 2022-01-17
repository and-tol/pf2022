import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { Projects } from '../../components';
import { IProject } from '../../interfaces/project.interface';
import { Layout } from '../../layout/Layout';
import { AppConfig } from '../../config/App.config';

import { getServerData } from '../../utils/getServerData';

export default function ProjectsPage({
  projects = null,
}: ProjectsProps): JSX.Element {
  return (
    <Layout className="bg-primary">
      <Head>
        <title> {AppConfig.en.title} | Projects</title>
      </Head>

      <Projects projects={projects} />
    </Layout>
  );
}

//Эта функция вызывается во время сборки на стороне сервера.
//Она не будет вызываться на стороне клиента, поэтому вы даже можете выполнять
//прямые запросы к базе данных.
export const getStaticProps: GetStaticProps = async () => {
  const projects = await getServerData('data', 'projects.json');

  if (!projects) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projects,
    },
  };
};

interface ProjectsProps extends Record<string, unknown> {
  projects: IProject[] | null;
}
