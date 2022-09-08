import type { NextPage } from 'next'
import Head from 'next/head'

import ReactAudioPlayer from 'react-audio-player'

import SubHeader from '../components/SubHeader'
import PageContent from '../components/PageContent'

import bootstrapStyles from '../styles/Bootstrap.module.css'
import pageStyles from '../styles/Page.module.css'
import utilsStyles from '../styles/Utils.module.css'

interface Track {
  url: string,
  title: string,
}

type trackList = Track[];

interface Props {
  tracks: trackList
}

const Page: NextPage<Props> = ({ tracks }) => {

  console.log(tracks)

  return (
    <main className={pageStyles['page-holder']}>
      <Head>
        <title>Banda Masskill - Ensaio</title>
        <meta name="description" content="Playlist Ensaio Masskill" />
        <link rel="icon" href="/favicon.png" />
        <meta name="robots" content="noindex"></meta>
      </Head>

      <PageContent>
        <SubHeader>
          <h1 className={pageStyles['page-title']}>Ensaio</h1>
        </SubHeader>
        <div className="track-list-holder">
          <div className={bootstrapStyles['row'] + ' ' + utilsStyles['align-items-center']}>
            {
              tracks.map(track => {
                return (
                  <>
                    <div className={bootstrapStyles['col-lg-6'] + ' ' + utilsStyles['text-center-mb']}>
                      <h2 className='h3'>{track.title}</h2>
                    </div>
                    <div className={bootstrapStyles['col-lg-6'] + ' ' + utilsStyles['text-center']}>
                      <ReactAudioPlayer
                        src={track.url}
                        autoPlay
                        controls
                      />
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>

      </PageContent>
    </main>
  )
}

export default Page

export async function getStaticProps() {
  const assetsUrl = '/tracks'
  const tracks: trackList = [
    {
      url: assetsUrl + "/Blurry Visions-C Tuning.mp3",
      title: "Blurry Visions-C Tuning",
    },
    {
      url: assetsUrl + "/Coronga Virus Demo-C Tuning.mp3",
      title: "Coronga Virus Demo-C Tuning",
    },
    {
      url: assetsUrl + "/plastic-sea-masskill-demo-(Arquitetura) - C Tuning.mp3",
      title: "plastic-sea-masskill-demo-(Arquitetura) - C Tuning",
    },
    {
      url: assetsUrl + "/Down Society-C Tuning.mp3",
      title: "Down Society-C Tuning",
    },
    {
      url: assetsUrl + "/Scream In Vain-C Tuning.mp3",
      title: "Scream In Vain-C Tuning",
    }
  ]

  return { props: { tracks: tracks } }
}