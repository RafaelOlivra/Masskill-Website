import React, { useEffect } from 'react'
import { useState } from 'react'
import Spotify from 'react-spotify-player'
import AlbumItem, { AlbumProps } from '../AlbumItem'

import { Audio as Loading } from 'react-loader-spinner'

import bootstrapStyles from '../../styles/Bootstrap.module.css'
import pageStyles from '../../styles/Page.module.css'
import styles from '../../styles/sections/SectionDiscography.module.css'

const useAlbums = () => {
    const albums: AlbumProps[] = [
        {
            coverUrl: '/capa-the-cycle-ep.jpg',
            title: 'The Cycle EP',
            date: 2020,
            spotifyUrl: 'https://open.spotify.com/album/2rncJ3kK5FTTnjRlqdrgkp?si=7GVNieDBQq2qEi2-VIcJRA&dl_branch=1&nd=1'
        },
        {
            coverUrl: '/capa-the-cycle-single.jpg',
            title: 'Down Society Single',
            date: 2020,
            spotifyUrl: 'https://open.spotify.com/album/30dMGalxc741B0k5lDZ14S?si=D2p-Pw5NRaKYLXCvKPIOig&dl_branch=1&nd=1'

        },
        {
            coverUrl: '/capa-blurry-visions-single.jpg',
            title: 'Blury Visions Single',
            date: 2020,
            spotifyUrl: 'https://open.spotify.com/album/1AeqOPA5uSBpRNy6JmWgn7?si=vIW69LXIQ4iu-HlaaDs0bg&dl_branch=1&nd=1'

        },
        {
            coverUrl: '/capa-scream-in-vain.jpg',
            title: 'Scream in Vain Single',
            date: 2018,
            spotifyUrl: 'https://open.spotify.com/album/6XCNQca8DDGJGoHYdLvfja?si=iF2aehexTN66xtKHepJRZw&dl_branch=1&nd=1'

        }
    ]

    return { albums }
}

const useSpotifyEmbed = () => {
    const [currentSpotifyEmbedUrl, updateCurrentSpotifyEmbed] = useState<string>('')
    const SpotifyEmbed = () => {
        return (currentSpotifyEmbedUrl)
            ? <Spotify uri={currentSpotifyEmbedUrl} size="large" view="coverart" />
            : <Loading
                height="80"
                width="80"
                color='white'
                ariaLabel='three-dots-loading'
                wrapperStyle={{ justifyContent: 'center' }}
            />
    }

    const handleSpotifyEmbedUpdate = (spotifyUrl: string, scrollIntoView: boolean = true) => {
        if (spotifyUrl) {
            updateCurrentSpotifyEmbed(spotifyUrl)

            const section = document.getElementById('spotify-player');
            if (scrollIntoView && section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    return { currentSpotifyEmbedUrl, handleSpotifyEmbedUpdate, SpotifyEmbed }
}

const SectionDiscography: React.FC = () => {

    const { albums } = useAlbums()
    const { currentSpotifyEmbedUrl, handleSpotifyEmbedUpdate, SpotifyEmbed } = useSpotifyEmbed()

    useEffect(() => {
        handleSpotifyEmbedUpdate(albums[0].spotifyUrl, false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className={styles['discography']} id="discografia">
            <div className={bootstrapStyles['container']}>
                <div className={bootstrapStyles['row']}>
                    <div className={bootstrapStyles['col-lg-12']}>

                        <div className={pageStyles['section-heading']}>
                            <h2 className="title">Discografia</h2>
                            <a href="https://open.spotify.com/artist/2Ese7euNUCeDzGZY8BDf9s" className={pageStyles['side-link']} target="_blank" rel="noreferrer">Spotify</a>
                        </div>

                        <div className={bootstrapStyles['row']}>
                            {albums.length > 0 ? (
                                <>
                                    <div className={bootstrapStyles['col-lg-6']}>
                                        <div className="albums-holder">
                                            {albums.map((AlbumProps, index) => {
                                                return (
                                                    <AlbumItem
                                                        key={`unique_${index}`}
                                                        {...AlbumProps}
                                                        spotifyUrl='https://open.spotify.com/album/2rncJ3kK5FTTnjRlqdrgkp?si=7GVNieDBQq2qEi2-VIcJRA&dl_branch=1&nd=1'
                                                        onClick={(e) => {
                                                            if (AlbumProps.spotifyUrl) {
                                                                e.preventDefault()
                                                                handleSpotifyEmbedUpdate(AlbumProps.spotifyUrl)
                                                            }
                                                        }}
                                                        isActive={currentSpotifyEmbedUrl === AlbumProps.spotifyUrl}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div id="spotify-player" className={bootstrapStyles['col-lg-5'] + ' ' + styles['spotify-embed-holder']}>
                                        <SpotifyEmbed />
                                    </div>
                                </>
                            ) : (
                                <div className={bootstrapStyles['col-lg-12']}>
                                    <p>Não há items para serem exibidos momento.</p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionDiscography