import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import path from 'path'
import { promises as fs } from 'fs'

import SubHeader from '../components/SubHeader'
import PageContent from '../components/PageContent'
import pageStyles from '../styles/Page.module.css'

const components = { Head }

interface Props {
  source: MDXRemoteSerializeResult
}

const Page: NextPage<Props> = ({ source }) => {
  return (
    <main className={pageStyles['page-holder']}>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pagesDir = path.join(process.cwd(), 'pages')
  const mdxContent = await fs.readFile(pagesDir + '/privacy-policy.mdx', 'utf8')
  const mdxSource = await serialize(mdxContent)
  return { props: { source: mdxSource } }
}