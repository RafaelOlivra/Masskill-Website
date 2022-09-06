import React from 'react'
import { useState } from 'react'
import ResponsiveVideo, { ResponsiveVideoProps } from '../ResponsiveVideo';

import bootstrapStyles from '../../styles/Bootstrap.module.css'
import utilsStyles from '../../styles/Utils.module.css'
import pageStyles from '../../styles/Pages.module.css'
import styles from '../../styles/sections/SectionVideos.module.css'

const SectionVideos: React.FC = () => {
    type videosList = ResponsiveVideoProps[] | [];

    const availableVideos: videosList = [
        {
            url: 'https://www.youtube.com/embed/qQETNtcceuA',
            title: 'Masskill- Blury Visions (Official Music Video)',
        },
        {
            url: 'https://www.youtube.com/embed/pgrLiBgF6No',
            title: 'Masskill - Scream In Vain (Official Video) | Single 2018',
        },
        {
            url: 'https://www.youtube.com/embed/vDOBPfhn4wo',
            title: 'Masskill - Down Society (Official Lyric Video)',
        },
        {
            url: 'https://www.youtube.com/embed/3JjDCL_B0_M',
            title: 'Masskill - The Cycle EP Solos (Guitar Playthrough)',
        },
    ];

    const [currentFeaturedVideo, updateFeaturedVideo] = useState<ResponsiveVideoProps>({
        url: availableVideos[0].url,
        title: availableVideos[0].title
    });

    const handleFeaturedVideoUpdate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, VideoProps: ResponsiveVideoProps) => {
        if (VideoProps) {
            e.preventDefault()
            if (!VideoProps.url.includes('?autoplay=1')) {
                VideoProps.url += '?autoplay=1';
            }
            updateFeaturedVideo(VideoProps)
            const section = document.getElementById('featured-video-holder');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
        }
    }

    const FeaturedVideo = () => {
        return (currentFeaturedVideo) ?
            <ResponsiveVideo url={currentFeaturedVideo.url} title={currentFeaturedVideo.title} /> : <div className='loading'>Loading...</div>
    }

    return (
        <section className="videos" id="videos">
            <div className={bootstrapStyles['container']}>
                <div className={bootstrapStyles['row']}>
                    <div className={bootstrapStyles['col-lg-12']}>

                        <div className={utilsStyles['text-center'] + styles['featured-video-holder']}>
                            <div id="featured-video-holder" className={styles['video-holder']}>
                                <FeaturedVideo />
                            </div>
                        </div>

                        <div className={pageStyles['section-heading']}>
                            <h2 className="title">Vídeos</h2>
                            <a href="https://www.youtube.com/channel/UChFFgMwNVouYPrE9oiI0sKQ" className={pageStyles['side-link']} target="_blank" rel="noreferrer">Todos os Vídeos</a>
                        </div>
                        <div className={styles['videos-carousel']}>
                            <div className={styles['holder']}>
                                {availableVideos.length > 0 && availableVideos.map((ResponsiveVideoProps, index) => {
                                    return (
                                        <ResponsiveVideo
                                            key={index}
                                            {...ResponsiveVideoProps}
                                            onClick={handleFeaturedVideoUpdate}
                                        />
                                    )
                                })}
                                {availableVideos.length === 0 &&
                                    <p>Não há vídeos no momento.</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionVideos