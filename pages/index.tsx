import type { NextPage } from 'next'
import Head from 'next/head'
import bootstrapStyles from '../styles/Bootstrap.module.css'
import styles from '../styles/Home.module.css'
import utilsStyles from '../styles/Utils.module.css'
import pageStyles from '../styles/Pages.module.css'
import SectionVideos from '../components/sections/SectionVideos'
import SectionDiscography from '../components/sections/SectionDiscography'
import SectionEvents from '../components/sections/SectionEvents'
import SectionAbout from '../components/sections/SectionAbout'
import SectionContact from '../components/sections/SectionContact'

const Home: NextPage = () => {
  return (
    <div className={styles['page-holder']}>
      <Head>
        <title>Banda Masskill - Site Oficial</title>
        <meta name="description" content="Masskill é uma banda Sorocabana de Metal fundada no ano de 2015. Iniciou suas atividades com uma proposta mais visceral, mas com o passar do tempo e com a entrada dos integrantes da formação atual, a banda está se desenvolvendo para chegar em uma sonoridade mais moderna e com sua identidade própria." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className={pageStyles['page-sub-header']}>
        <div className={bootstrapStyles['container']}>
          <div className={bootstrapStyles['row']}>
            <div className={bootstrapStyles['col-lg-12']}>
              <div className={utilsStyles['text-center']}>
                <h1 className={pageStyles['page-title']}>Novo single “Blurry Visions” está disponível!</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionVideos />
      <SectionDiscography />
      <SectionEvents />
      <SectionAbout />
      <SectionContact />
    </div>
  )
}

export default Home
