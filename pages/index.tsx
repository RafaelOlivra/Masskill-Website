import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pageStyles from '../styles/Page.module.css'

import { readdirSync } from 'fs'
import path from 'path'

import SubHeader from '../components/SubHeader'
import PageContent from '../components/PageContent';
import SectionVideos from '../components/sections/SectionVideos'
import SectionDiscography from '../components/sections/SectionDiscography'
import SectionEvents from '../components/sections/SectionEvents'
import SectionAbout from '../components/sections/SectionAbout'
import SectionGallery, { GalleryImage } from '../components/sections/SectionGallery'
import SectionContact from '../components/sections/SectionContact'

interface Props {
  galleryImages: GalleryImage[]
}

const Home: NextPage<Props> = ({ galleryImages }) => {

  return (
    <main className={styles['page-holder']}>
      <Head>
        <title>Banda Masskill - Site Oficial</title>
        <meta name="description" content="Masskill é uma banda Sorocabana de Metal fundada no ano de 2015. Iniciou suas atividades com uma proposta mais visceral, mas com o passar do tempo e com a entrada dos integrantes da formação atual, a banda está se desenvolvendo para chegar em uma sonoridade mais moderna e com sua identidade própria." />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="http://masskill.com.br/" />
      </Head>

      <PageContent template="fullwidth">
        <SubHeader>
          <h1 className={pageStyles['page-title']}>Confira o novo single <br />
            <span className={pageStyles['page-title-image']}>
              <Image
                src='/escape-samsara-logo.png'
                alt='Escape Samsara'
                layout='responsive'
                width={1100}
                height={102}
                objectFit='contain'
              />
            </span>
            <span style={{ display: 'none' }}>“Escape Samsara”</span></h1>
          <div className={pageStyles['featured-cover-image']}>
            <a href="https://open.spotify.com/intl-pt/album/5vM75PSBCZ4p2I6895Eqyh?si=4FVFwlMhSGelyAsUbpzaIg" title="Clique para ouvir o novo single da Masskill">
              <Image
                src='/cover-escape-samsara-lg.jpg'
                alt='Capa Escape Samsara'
                layout='responsive'
                width={800}
                height={800}
                objectFit='contain'
              />
            </a>
          </div>
        </SubHeader>

        <SectionVideos />
        <SectionDiscography />
        <SectionEvents />
        <SectionGallery galleryImages={galleryImages} />
        <SectionAbout />
        <SectionContact />
      </PageContent>

    </main>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {

  // Grab gallery images from public/gallery dir
  const assetsDir = path.join(process.cwd(), 'public')
  let galleryImages: GalleryImage[] = []
  try {
    const imageFiles = readdirSync(assetsDir + '/gallery/')
    imageFiles.forEach(file => {
      // Only JPG images for now
      if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        galleryImages.push({
          src: '/gallery/' + file,
          alt: 'Masskill Band'
        })
      }
    })
  } catch (error) {
    console.log(error)
  }

  return { props: { galleryImages: galleryImages } }
}