import React from 'react'
import { useState } from 'react'
import Spotify from 'react-spotify-player'
import AlbumItem, { AlbumProps } from '../AlbumItem'

import bootstrapStyles from '../../styles/Bootstrap.module.css'
import pageStyles from '../../styles/Pages.module.css'
import styles from '../../styles/sections/SectionDiscography.module.css'

const SectionDiscography: React.FC = () => {

    type albumsList = AlbumProps[] | [];

    const availableAlbums: albumsList = [
        {
            coverUrl: '/../public/capa-the-cycle-ep.jpg',
            title: 'The Cycle EP',
            date: 2020,
            spotifyUrl: 'https://open.spotify.com/album/2rncJ3kK5FTTnjRlqdrgkp?si=7GVNieDBQq2qEi2-VIcJRA&dl_branch=1&nd=1'
        },
        {
            coverUrl: '/../public/capa-the-cycle-single.jpg',
            title: 'Down Society Single',
            date: 2020,
            spotifyUrl: 'https://open.spotify.com/album/30dMGalxc741B0k5lDZ14S?si=D2p-Pw5NRaKYLXCvKPIOig&dl_branch=1&nd=1'

        },
        {
            coverUrl: '/../public/capa-blurry-visions-single.jpg',
            title: 'Blury Visions Single',
            date: 2020,
            spotifyUrl: 'https://open.spotify.com/album/1AeqOPA5uSBpRNy6JmWgn7?si=vIW69LXIQ4iu-HlaaDs0bg&dl_branch=1&nd=1'

        },
        {
            coverUrl: '/../public/capa-scream-in-vain.jpg',
            title: 'Scream in Vain Single',
            date: 2018,
            spotifyUrl: 'https://open.spotify.com/album/6XCNQca8DDGJGoHYdLvfja?si=iF2aehexTN66xtKHepJRZw&dl_branch=1&nd=1'

        }
    ];


    // Handle the Spotify embed widget
    const [currentSpotifyEmbedUrl, updateSpotifyEmbed] = useState(availableAlbums[0].spotifyUrl);

    const handleSpotifyEmbedUpdate = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, spotifyUrl: string) => {
        if (spotifyUrl) {
            e.preventDefault();
            updateSpotifyEmbed(spotifyUrl);

            const section = document.getElementById('spotify-player');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    const SpotifyEmbed = () => {
        return (currentSpotifyEmbedUrl) ? <Spotify uri={currentSpotifyEmbedUrl} size="large" view="coverart" /> : <div className='loading'>Loading...</div>
    }

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
                            {availableAlbums.length > 0 &&
                                <>
                                    <div className={bootstrapStyles['col-lg-6']}>
                                        <div className="albums-holder">
                                            {availableAlbums.map((AlbumProps, index) => {
                                                return (
                                                    <AlbumItem
                                                        key={index}
                                                        {...AlbumProps}
                                                        spotifyUrl='https://open.spotify.com/album/2rncJ3kK5FTTnjRlqdrgkp?si=7GVNieDBQq2qEi2-VIcJRA&dl_branch=1&nd=1'
                                                        onClick={(e) => { handleSpotifyEmbedUpdate(e, AlbumProps.spotifyUrl) }}
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
                            }
                            {availableAlbums.length === 0 &&
                                <div className={bootstrapStyles['col-lg-12']}>
                                    <p>Não há items para serem exibidos momento.</p>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionDiscography