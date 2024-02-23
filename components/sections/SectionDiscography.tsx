import React, { useEffect } from 'react'
import { useState } from 'react'
import AlbumItem, { AlbumProps } from '../AlbumItem'

import { Audio as Loading } from 'react-loader-spinner'

import bootstrapStyles from '../../styles/Bootstrap.module.css'
import pageStyles from '../../styles/Page.module.css'
import styles from '../../styles/sections/SectionDiscography.module.css'

const useAlbums = () => {
    const albums: AlbumProps[] = [
        {
            coverUrl: '/cover-escape-samsara.jpg',
            title: 'Escape Samsara',
            date: 2024,
            spotifyUrl: 'https://open.spotify.com/embed/track/7cq7TWLpMt17Hs5DX30wJ9?utm_source=generator'
        },
        {
            coverUrl: '/capa-someone-i-cant-be.jpg',
            title: 'Someone I Can\'t Be',
            date: 2023,
            spotifyUrl: 'https://open.spotify.com/embed/track/2Jg1SwtfuNj4qUclk4r2xs?utm_source=generator'
        },
        {
            coverUrl: '/cover-where-its-dark.jpg',
            title: 'Where It\'s Dark',
            date: 2023,
            spotifyUrl: 'https://open.spotify.com/embed/track/0QYp9szXCTGUIqMl2RCsJw?utm_source=generator'
        },
        {
            coverUrl: '/capa-plastic-sea.jpg',
            title: 'Plastic Sea Single',
            date: 2023,
            spotifyUrl: 'https://open.spotify.com/embed/track/6ZKCNmLcR6hH7YRC09RZUo?si=a7593123c3b74235'
        },
        // {
        //     coverUrl: '/capa-the-cycle-ep.jpg',
        //     title: 'The Cycle EP',
        //     date: 2020,
        //     spotifyUrl: 'https://open.spotify.com/album/2rncJ3kK5FTTnjRlqdrgkp?si=7GVNieDBQq2qEi2-VIcJRA&dl_branch=1&nd=1'
        // },
        // {
        //     coverUrl: '/capa-the-cycle-single.jpg',
        //     title: 'Down Society Single',
        //     date: 2020,
        //     spotifyUrl: 'https://open.spotify.com/album/30dMGalxc741B0k5lDZ14S?si=D2p-Pw5NRaKYLXCvKPIOig&dl_branch=1&nd=1'

        // },
        {
            coverUrl: '/capa-blurry-visions-single.jpg',
            title: 'Blury Visions Single',
            date: 2020,
            spotifyUrl: 'https://open.spotify.com/embed/track/2rO1n6StnPfxVRwqPkPz4Y?si=d3d5e38249ac41fd'
        },
        {
            coverUrl: '/capa-into-darkness.jpg',
            title: 'Into Darkness',
            date: 2020,
            spotifyUrl: 'https://open.spotify.com/embed/track/5nV2rgq1tBIu8j6xOrM2Ct?utm_source=oembed'
        },
        {
            coverUrl: '/capa-scream-in-vain.jpg',
            title: 'Scream in Vain Single',
            date: 2018,
            spotifyUrl: 'https://open.spotify.com/embed/track/1FzIS9EMWlOqZ32lNZhY0I?utm_source=oembed'
        }
    ]

    return { albums }
}

const useSpotifyEmbed = () => {
    const [currentSpotifyEmbedUrl, updateCurrentSpotifyEmbed] = useState<string>('')
    const SpotifyEmbed = () => {
        return (currentSpotifyEmbedUrl)
            ? <div className={styles['spotify-iframe']}><iframe src={currentSpotifyEmbedUrl} allowFullScreen></iframe></div>
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