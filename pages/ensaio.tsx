import type { NextPage } from 'next'
import Head from 'next/head'

import ReactAudioPlayer from 'react-audio-player'

import { AudioPlayerControlSprite, AudioPlayer, TrackType } from 'react-audio-player-pro';
import 'react-audio-player-pro/dist/style.css';

import SubHeader from '../components/SubHeader'
import PageContent from '../components/PageContent'

import bootstrapStyles from '../styles/Bootstrap.module.css'
import pageStyles from '../styles/Page.module.css'
import utilsStyles from '../styles/Utils.module.css'
import audioPlayerCustomStyles from '../styles/components/AudioPlayerCustom.module.css'
import { useState } from 'react'
import Button from '../components/Button'

interface Track {
  src: string,
  name: string,
  img?: string,
  display: boolean,
  id: number,
  type: 'click-track' | 'play-track' | 'show-track',
}

const useTracks = () => {
  const assetsUrl = 'https://static.masskill.com.br/assets'
  const playTracks: Track[] = [
    {
      src: assetsUrl + "/tracks/Blurry Visions-C Tuning.mp3",
      name: "Blurry Visions - C Tuning",
      display: false,
      type: 'play-track',
      id: 1,
    },
    {
      src: assetsUrl + "/tracks/Coronga Virus Demo-C Tuning.mp3",
      name: "Coronga Virus Demo - C Tuning",
      display: true,
      type: 'play-track',
      id: 2,
    },
    {
      src: assetsUrl + "/tracks/plastic-sea-masskill-demo-(Arquitetura) - C Tuning.mp3",
      name: "plastic-sea-masskill-demo-(Arquitetura) - C Tuning",
      display: true,
      type: 'play-track',
      id: 3,
    },
    {
      src: assetsUrl + "/tracks/Down Society-C Tuning.mp3",
      name: "Down Society - C Tuning",
      display: false,
      type: 'play-track',
      id: 4,
    },
    {
      src: assetsUrl + "/tracks/jangada-audio-file-C-Tuning.mp3",
      name: "Jangada - C Tuning",
      display: true,
      type: 'play-track',
      id: 5,
    },
    {
      src: assetsUrl + "/tracks/sinusite-audio-C-Tuning.mp3",
      name: "Sinusite - C Tuning",
      display: true,
      type: 'play-track',
      id: 6,
    },
    {
      src: assetsUrl + "/tracks/the-beginning-of-all-life-C-Tuning.mp3",
      name: "The Beginning of All Life (Estilingue) - C Tuning",
      display: true,
      type: 'play-track',
      id: 7,
    },
    {
      src: assetsUrl + "/tracks/Scream In Vain-C Tuning.mp3",
      name: "Scream In Vain - C Tuning",
      display: false,
      type: 'play-track',
      id: 8,
    }
  ]

  const clickTracks: Track[] = [
    {
      src: assetsUrl + "/clicks/blurry-visions-click-vs.mp3",
      name: "CLICK + VS : Blurry Visions - C Tuning",
      display: true,
      type: 'click-track',
      id: 30,
    },
    {
      src: assetsUrl + "/clicks/coronga-virus-click-vs.mp3",
      name: "CLICK + VS : Coronga Virus - C Tuning",
      display: true,
      type: 'click-track',
      id: 31,
    },
    {
      src: assetsUrl + "/clicks/jangada-click-vs.mp3",
      name: "CLICK + VS : Jangada - C Tuning",
      display: true,
      type: 'click-track',
      id: 32,
    },
    {
      src: assetsUrl + "/clicks/plastic-sea-click-vs.mp3",
      name: "CLICK + VS : Plastic Sea (Arquitetura) - C Tuning",
      display: true,
      type: 'click-track',
      id: 33,
    },
    {
      src: assetsUrl + "/clicks/sinusite-click-vs.mp3",
      name: "CLICK + VS : Sinusite - C Tuning",
      display: true,
      type: 'click-track',
      id: 34,
    },
    {
      src: assetsUrl + "/clicks/the-beginning-of-all-life-(estilingue)-click-vs.mp3",
      name: "CLICK + VS : The Beginning of All Life (Estilingue) - C Tuning",
      display: true,
      type: 'click-track',
      id: 35,
    },
    {
      src: assetsUrl + "/clicks/someone-i-cant-be-click-vs.mp3",
      name: "CLICK + VS : Simone - C Tuning",
      display: true,
      type: 'click-track',
      id: 36,
    }
  ]

  const showTracks: Track[] = [
    // {
    //   src: assetsUrl + "/clicks/intro-show-2023.mp3",
    //   name: "↓ ---- INTRO SHOW 2023",
    //   display: true,
    //   type: 'show-track',
    //   id: 90,
    // },
    {
      src: assetsUrl + "/clicks/intro-show-oceanus-plastic-sea.mp3",
      name: "🎵 INTRO SHOW 2023 + PLASTIC SEA",
      display: true,
      type: 'show-track',
      id: 91,
    },
    // {
    //   src: assetsUrl + "/clicks/plastic-sea-click-vs.mp3",
    //   name: "🎵 Plastic Sea - C Tuning",
    //   display: true,
    //   type: 'show-track',
    //   id: 63,
    // },
    {
      src: assetsUrl + "/clicks/CHAMADA-PROX-SHORT-jangada-where-its-dark-click-vs.mp3",
      name: "↓ ---- CHAMADA PROX SHORT - Where It's Dark",
      display: true,
      type: 'show-track',
      id: 82,
    },
    {
      src: assetsUrl + "/clicks/jangada-click-vs.mp3",
      name: "🎵 Where It's Dark (Jangada) - C Tuning",
      display: true,
      type: 'show-track',
      id: 62,
    },
    {
      src: assetsUrl + "/clicks/CHAMADA-PROX-SHORT-the-beggining-of-all-life-click-vs.mp3",
      name: "↓ ---- CHAMADA PROX SHORT - The Beginning of All Life",
      display: true,
      type: 'show-track',
      id: 81,
    },
    {
      src: assetsUrl + "/clicks/the-beginning-of-all-life-(estilingue)-click-vs.mp3",
      name: "🎵 The Beginning of All Life (Estilingue) - C Tuning",
      display: true,
      type: 'show-track',
      id: 65,
    },
    {
      src: assetsUrl + "/clicks/PAUSA-30s-click-vs.mp3",
      name: "↓ ---- PAUSA - 30s",
      display: true,
      type: 'show-track',
      id: 80,
    },
    {
      src: assetsUrl + "/clicks/CHAMADA-PROX-sinusite-escape-samsara-click-vs.mp3",
      name: "↓ ---- CHAMADA PROX - Escape Samsara",
      display: true,
      type: 'show-track',
      id: 83,
    },
    {
      src: assetsUrl + "/clicks/sinusite-click-vs.mp3",
      name: "🎵 Escape Samsara (Sinusite) - C Tuning",
      display: true,
      type: 'show-track',
      id: 64,
    },
    // {
    //   src: assetsUrl + "/clicks/CHAMADA-PROX-SHORT-vem-hexa.mp3",
    //   name: "↓ ---- CHAMADA PROX SHORT - Vem Hexa",
    //   display: true,
    //   type: 'show-track',
    //   id: 88,
    // },
    // {
    //   src: assetsUrl + "/clicks/vem-hexa-click-vs.mp3",
    //   name: "🎵 Vem Hexa - C Tuning",
    //   display: true,
    //   type: 'show-track',
    //   id: 89,
    // },
    // {
    //   src: assetsUrl + "/clicks/PAUSA-30s-click-vs.mp3",
    //   name: "↓ ---- PAUSA - 30s",
    //   display: true,
    //   type: 'show-track',
    //   id: 80,
    // },
    {
      src: assetsUrl + "/clicks/PAUSA-2-minutos-click-vs.mp3",
      name: "↓ ---- PAUSA - 2 Minutos",
      display: true,
      type: 'show-track',
      id: 81,
    },
    {
      src: assetsUrl + "/clicks/CHAMADA-PROX-words-in-vain-click-vs.mp3",
      name: "↓ ---- CHAMADA PROX SHORT - Words In Vain",
      display: true,
      type: 'show-track',
      id: 38,
    },
    {
      src: assetsUrl + "/clicks/words-in-vain-click-vs.mp3",
      name: "🎵 Words In Vain - Acustica - Eb Tuning",
      display: true,
      type: 'show-track',
      id: 37,
    },
    {
      src: assetsUrl + "/clicks/PAUSA-30s-click-vs.mp3",
      name: "↓ ---- PAUSA - 30s",
      display: true,
      type: 'show-track',
      id: 80,
    },
    {
      src: assetsUrl + "/clicks/CHAMADA-PROX-blury-visions-click-vs.mp3",
      name: "↓ ---- CHAMADA PROX - Blurry Visions",
      display: true,
      type: 'show-track',
      id: 84,
    },
    {
      src: assetsUrl + "/clicks/blurry-visions-slower-click-vs.mp3",
      name: "🎵 Blurry Visions - Slower - C Tuning",
      display: true,
      type: 'show-track',
      id: 60,
    },
    {
      src: assetsUrl + "/clicks/PAUSA-30s-click-vs.mp3",
      name: "↓ ---- PAUSA - 30s",
      display: true,
      type: 'show-track',
      id: 80,
    },
    // {
    //   src: assetsUrl + "/clicks/PAUSA-2-minutos-click-vs.mp3",
    //   name: "↓ ---- PAUSA - 2 Minutos",
    //   display: true,
    //   type: 'show-track',
    //   id: 81,
    // },
    {
      src: assetsUrl + "/clicks/CHAMADA-PROX-simone-someone-i-cant-be-click-vs.mp3",
      name: "↓ ---- CHAMADA PROX - Someone I Can't Be (Ending)",
      display: true,
      type: 'show-track',
      id: 86,
    },
    {
      src: assetsUrl + "/clicks/someone-i-cant-be-ENDING-click-vs.mp3",
      name: "🎵 Someone I Can't Be (Ending) - C Tuning",
      display: true,
      type: 'show-track',
      id: 66,
    }
  ]

  return { tracks: [...playTracks, ...clickTracks, ...showTracks] }
}

const useSimpleLockOut = () => {
  const passwordHash = "LTEwODEyNzAyMTk="
  const [isLocked, setLocked] = useState(false);

  const hashCode = (str: string) => {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
      let chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return window.btoa(hash.toString());
  }

  const handleLockOut = () => {
    let inputPassword = prompt('Informe a senha de acesso!')
    inputPassword = inputPassword ? hashCode(inputPassword) : '';

    if (inputPassword === passwordHash) {
      setLocked(true)
    } else {
      alert('Senha incorreta!')
    }
  }

  return { isLocked, handleLockOut }
}

const Page: NextPage = () => {

  const { tracks } = useTracks()
  const { isLocked, handleLockOut } = useSimpleLockOut()

  // Adapt showTracks to TrackType for use with react-audio-player-pro
  const { tracks: showTracks } = useTracks();
  let audioTrackList: TrackType[] = [];

  showTracks.map((track, index) => {
    if (track.type === 'show-track') {
      audioTrackList.push({
        src: track.src,
        preload: 'metadata',
        mediaMetadata: {
          title: track.name,
          artist: 'Masskill',
          album: 'ShowTracks'
        }
      });
    }
  });

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
            {!isLocked && <div className={bootstrapStyles['col-lg-12'] + ' ' + utilsStyles['text-center']}><Button onClick={handleLockOut}>Acessar</Button></div>}
            {isLocked &&
              <>
                <div className={bootstrapStyles['col-lg-12']}>
                  <h2 className={utilsStyles['text-center'] + ' ' + utilsStyles['d-block']}>Show (30 Min)</h2>
                  <div className={audioPlayerCustomStyles['audio-player-custom']}>
                    <AudioPlayerControlSprite />
                    <AudioPlayer trackList={audioTrackList} />
                  </div>
                  <h2 className={utilsStyles['text-center'] + ' ' + utilsStyles['d-block']}>Click Tracks</h2>
                  {
                    tracks.map((track, index) => {
                      if (track.display && track.type == 'click-track')
                        return (
                          <div key={index + track.name} className={bootstrapStyles['col-lg-12']}>
                            <div className={bootstrapStyles['row']}>
                              <div className={bootstrapStyles['col-lg-6'] + ' ' + utilsStyles['text-center-mb']}>
                                <h3 className='h3'>{track.name}</h3>
                              </div>
                              <div className={bootstrapStyles['col-lg-6'] + ' ' + utilsStyles['text-center']}>
                                <ReactAudioPlayer
                                  src={track.src}
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
              </>}
          </div>
        </div>

      </PageContent>
    </main>
  )
}

export default Page