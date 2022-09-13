import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import ResponsiveVideo, { ResponsiveVideoProps } from '../ResponsiveVideo';

import Carousel from 'nuka-carousel'

import bootstrapStyles from '../../styles/Bootstrap.module.css'
import utilsStyles from '../../styles/Utils.module.css'
import pageStyles from '../../styles/Page.module.css'
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

    // Handle the featured video display
    const [currentFeaturedVideo, updateFeaturedVideo] = useState<ResponsiveVideoProps>({
        url: availableVideos[0].url + '?autoplay=1',
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

    /** 
     * Track window resize and check if we are with certain width breakpoints
     * We then use the breakpoint to define how much video slides to show
     * on the carousel slider
     */
    let previousBreakPointWidth = 440
    const [slidesToShow, setSlidesToShow] = useState<number>(1);
    const handleResize = () => {
        let BreakPointWidth = 992

        if (window.innerWidth < 440) {
            BreakPointWidth = 440
        } else if (window.innerWidth < 800) {
            BreakPointWidth = 800
        }

        // Only change when needed to avoid unnecessary rerenders
        if (BreakPointWidth !== previousBreakPointWidth) {
            previousBreakPointWidth = BreakPointWidth

            console.log(BreakPointWidth);

            // Set the amount of slider to show based on the current breakpoint width
            let slidesToShow = 3
            if (BreakPointWidth == 440) {
                slidesToShow = 1
            } else if (BreakPointWidth == 800) {
                slidesToShow = 2
            }
            setSlidesToShow(slidesToShow)
        }

    }
    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
        handleResize()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className={styles['videos']} id="videos">
            <div className={bootstrapStyles['container']}>
                <div className={bootstrapStyles['row']}>
                    <div className={bootstrapStyles['col-lg-12']}>

                        <div className={utilsStyles['text-center'] + ' ' + styles['featured-video-holder']}>
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
                                {availableVideos.length > 0 ? (
                                    <Carousel
                                        slidesToShow={slidesToShow}
                                        defaultControlsConfig={{
                                            nextButtonClassName: styles['carousel-next-button'],
                                            nextButtonStyle: {},
                                            prevButtonClassName: styles['carousel-prev-button'],
                                            prevButtonStyle: {},
                                            pagingDotsContainerClassName: styles['carousel-paging-dots'],
                                            pagingDotsStyle: {
                                                fill: 'white'
                                            }
                                        }}
                                    >
                                        {availableVideos.map((ResponsiveVideoProps, index) => {
                                            return (
                                                <div key={index} className={styles['slide-item']}>
                                                    <ResponsiveVideo
                                                        {...ResponsiveVideoProps}
                                                        onClick={handleFeaturedVideoUpdate}
                                                    />
                                                </div>)
                                        })}
                                    </Carousel>
                                ) : (
                                    <p>Não há vídeos no momento.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionVideos