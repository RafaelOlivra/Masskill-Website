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
  display: boolean,
  type: 'click-track' | 'play-track',
}

const useTracks = () => {
  const assetsUrl = 'https://static.masskill.com.br/assets'
  const playTracks: Track[] = [
    {
      url: assetsUrl + "/tracks/Blurry Visions-C Tuning.mp3",
      title: "Blurry Visions - C Tuning",
      display: false,
      type: 'play-track'
    },
    {
      url: assetsUrl + "/tracks/Coronga Virus Demo-C Tuning.mp3",
      title: "Coronga Virus Demo - C Tuning",
      display: true,
      type: 'play-track'
    },
    {
      url: assetsUrl + "/tracks/plastic-sea-masskill-demo-(Arquitetura) - C Tuning.mp3",
      title: "plastic-sea-masskill-demo-(Arquitetura) - C Tuning",
      display: true,
      type: 'play-track'
    },
    {
      url: assetsUrl + "/tracks/Down Society-C Tuning.mp3",
      title: "Down Society - C Tuning",
      display: false,
      type: 'play-track'
    },
    {
      url: assetsUrl + "/tracks/jangada-audio-file-C-Tuning.mp3",
      title: "Jangada - C Tuning",
      display: true,
      type: 'play-track'
    },
    {
      url: assetsUrl + "/tracks/sinusite-audio-C-Tuning.mp3",
      title: "Sinusite - C Tuning",
      display: true,
      type: 'play-track'
    },
    {
      url: assetsUrl + "/tracks/the-beginning-of-all-life-C-Tuning.mp3",
      title: "The Beginning of All Life (Estilingue) - C Tuning",
      display: true,
      type: 'play-track'
    },
    {
      url: assetsUrl + "/tracks/Scream In Vain-C Tuning.mp3",
      title: "Scream In Vain - C Tuning",
      display: false,
      type: 'play-track'
    }
  ]

  const clickTracks: Track[] = [
    {
      url: assetsUrl + "/clicks/blurry-visions-click-vs.mp3",
      title: "CLICK + VS : Blurry Visions - C Tuning",
      display: false,
      type: 'click-track'
    },
    {
      url: assetsUrl + "/clicks/coronga-virus-click-vs.mp3",
      title: "CLICK + VS : Coronga Virus - C Tuning",
      display: true,
      type: 'click-track'
    },
    {
      url: assetsUrl + "/clicks/jangada-click-vs.mp3",
      title: "CLICK + VS : Jangada - C Tuning",
      display: true,
      type: 'click-track'
    },
    {
      url: assetsUrl + "/clicks/plastic-sea-click-vs.mp3",
      title: "CLICK + VS : Plastic Sea (Arquitetura) - C Tuning",
      display: true,
      type: 'click-track'
    },
    {
      url: assetsUrl + "/clicks/sinusite-click-vs.mp3",
      title: "CLICK + VS : Sinusite - C Tuning",
      display: true,
      type: 'click-track'
    },
    {
      url: assetsUrl + "/clicks/the-beginning-of-all-life-(estilingue)-click-vs.mp3",
      title: "CLICK + VS : The Beginning of All Life (Estilingue) - C Tuning",
      display: true,
      type: 'click-track'
    }
  ]

  return { tracks : [...playTracks, ...clickTracks] }
}

const Page: NextPage = () => {

  const { tracks } = useTracks()

  return (
    <main className={pageStyles['page-holder']}>
      <Head>
        <title>Banda Masskill - Ensaio</title>
        <meta name="description" content="Playlist Ensaio Masskill" />
        <link rel="icon" href="/favicon.png" />
        <meta name="robots" content="noindex"></meta>
        <link rel="canonical" href="http://masskill.com.br/ensaio" />
      </Head>

      <PageContent>
        <SubHeader>
          <h1 className={pageStyles['page-title']}>Ensaio</h1>
        </SubHeader>
        <div className="track-list-holder">
          <div className={bootstrapStyles['row'] + ' ' + utilsStyles['align-items-center']}>
            <h2 className={utilsStyles['text-center'] + ' ' + utilsStyles['d-block']}>Músicas</h2>
            {
              tracks.map((track, index) => {
                if (track.display && track.type == 'play-track')
                  return (
                    <div key={index} className={bootstrapStyles['col-lg-12']}>
                      <div className={bootstrapStyles['row']}>
                        <div className={bootstrapStyles['col-lg-6'] + ' ' + utilsStyles['text-center-mb']}>
                          <h3 className='h3'>{track.title}</h3>
                        </div>
                        <div className={bootstrapStyles['col-lg-6'] + ' ' + utilsStyles['text-center']}>
                          <ReactAudioPlayer
                            src={track.url}
                            className={utilsStyles['fullwidth']}
                            autoPlay={false}
                            controls
                          />
                        </div>
                      </div>
                    </div>
                  )
              })
            }
            <div className={utilsStyles['spacer'] + ' ' + utilsStyles['double']}></div>
            <h2 className={utilsStyles['text-center'] + ' ' + utilsStyles['d-block']}>Click Tracks</h2>
            {
              tracks.map((track, index) => {
                if (track.display && track.type == 'click-track')
                  return (
                    <div key={index} className={bootstrapStyles['col-lg-12']}>
                      <div className={bootstrapStyles['row']}>
                        <div className={bootstrapStyles['col-lg-6'] + ' ' + utilsStyles['text-center-mb']}>
                          <h3 className='h3'>{track.title}</h3>
                        </div>
                        <div className={bootstrapStyles['col-lg-6'] + ' ' + utilsStyles['text-center']}>
                          <ReactAudioPlayer
                            src={track.url}
                            className={utilsStyles['fullwidth']}
                            autoPlay={false}
                            controls
                          />
                        </div>
                      </div>
                    </div>
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