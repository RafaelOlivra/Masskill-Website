import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import pageStyles from '../styles/Page.module.css'

import SubHeader from '../components/SubHeader'
import PageContent from '../components/PageContent';
import SectionVideos from '../components/sections/SectionVideos'
import SectionDiscography from '../components/sections/SectionDiscography'
import SectionEvents from '../components/sections/SectionEvents'
import SectionAbout from '../components/sections/SectionAbout'
import SectionContact from '../components/sections/SectionContact'

const Home: NextPage = () => {
  return (
    <main className={styles['page-holder']}>
      <Head>
        <title>Banda Masskill - Site Oficial</title>
        <meta name="description" content="Masskill é uma banda Sorocabana de Metal fundada no ano de 2015. Iniciou suas atividades com uma proposta mais visceral, mas com o passar do tempo e com a entrada dos integrantes da formação atual, a banda está se desenvolvendo para chegar em uma sonoridade mais moderna e com sua identidade própria." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <PageContent template="fullwidth">
        <SubHeader>
          <h1 className={pageStyles['page-title']}>Novo single “Blurry Visions” está disponível!</h1>
        </SubHeader>
        
        <SectionVideos />
        <SectionDiscography />
        <SectionEvents />
        <SectionAbout />
        <SectionContact />
      </PageContent>

    </main>
  )
}

export default Home
