import type { NextPage } from 'next'
import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import path from 'path';
import { promises as fs } from 'fs';

import SubHeader from '../components/SubHeader';
import PageContent from '../components/PageContent';
import styles from '../styles/Home.module.css'
import pageStyles from '../styles/Page.module.css'

const components = { Head };

interface Props {
  source: MDXRemoteSerializeResult;
}

const Page: NextPage<Props> = ({ source }) => {
  console.log(source);
  return (
    <main className={styles['page-holder']}>
      <PageContent>
        <SubHeader>
          <h1 className={pageStyles['page-title']}>Política de Privacidade</h1>
        </SubHeader>

        <MDXRemote {...source} components={components} />
      </PageContent>
    </main>
  )
}

export default Page

export async function getStaticProps() {
  const pagesDir = path.join(process.cwd(), 'pages');
  const mdxContent = await fs.readFile(pagesDir + '/privacy-policy.mdx', 'utf8');
  const mdxSource = await serialize(mdxContent);
  return { props: { source: mdxSource } };
}