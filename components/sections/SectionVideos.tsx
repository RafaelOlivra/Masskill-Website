import React from 'react'
import { useState, useEffect } from 'react'
import ResponsiveVideo, { ResponsiveVideoProps } from '../ResponsiveVideo';

import Carousel from 'nuka-carousel'

import { Audio as Loading } from 'react-loader-spinner'

import bootstrapStyles from '../../styles/Bootstrap.module.css'
import utilsStyles from '../../styles/Utils.module.css'
import pageStyles from '../../styles/Page.module.css'
import styles from '../../styles/sections/SectionVideos.module.css'

const useVideos = () => {
    const videos: ResponsiveVideoProps[] = [
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
    ]

    return { videos }
}

const useFeaturedVideo = () => {
    // Handle the featured video display
    const [currentFeaturedVideo, updateFeaturedVideo] = useState<ResponsiveVideoProps>();

    const handleFeaturedVideoUpdate = (VideoProps: ResponsiveVideoProps, scrollIntoView: boolean = true) => {
        if (VideoProps) {
            if (!VideoProps.url.includes('?autoplay=1')) {
                VideoProps.url += '?autoplay=1';
            }
            updateFeaturedVideo(VideoProps)
            const section = document.getElementById('featured-video-holder');
            if (scrollIntoView && section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
        }
    }

    const FeaturedVideo = () => {
        return (currentFeaturedVideo)
            ? <ResponsiveVideo url={currentFeaturedVideo.url} title={currentFeaturedVideo.title} />
            : <Loading
                height="80"
                width="80"
                color='white'
                ariaLabel='three-dots-loading'
                wrapperStyle={{ justifyContent: 'center' }}
            />
    }

    return { currentFeaturedVideo, handleFeaturedVideoUpdate, FeaturedVideo }
}

// TODO: Break into a separate component
interface VideosCarouselProps {
    videos: ResponsiveVideoProps[],
    onSlideItemClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, video: ResponsiveVideoProps) => void
}
const VideosCarousel: React.FC<VideosCarouselProps> = ({ videos, onSlideItemClick }) => {

    /** 
     * Track window resize and check if we are with certain width breakpoints
     * We then use the breakpoint to define how much video slides to show
     * on the carousel slider
     */
    let previousBreakPointWidth = 440
    const [slidesToShow, setSlidesToShow] = useState<number>(1);
    const handleWindowResize = () => {
        let BreakPointWidth = 992

        if (window.innerWidth < 440) {
            BreakPointWidth = 440
        } else if (window.innerWidth < 800) {
            BreakPointWidth = 800
        }

        // Only change when needed to avoid unnecessary rerenders
        if (BreakPointWidth !== previousBreakPointWidth) {
            previousBreakPointWidth = BreakPointWidth

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
        window.addEventListener('resize', handleWindowResize, false);
        handleWindowResize()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles['videos-carousel']}>
            <div className={styles['holder']}>
                {videos.length > 0 ? (
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
                        {videos.map((ResponsiveVideoProps, index) => {
                            return (
                                <div key={`unique_${index}`} className={styles['slide-item']}>
                                    <ResponsiveVideo
                                        {...ResponsiveVideoProps}
                                        onClick={(e, video) => onSlideItemClick ? onSlideItemClick(e, video) : ''}
                                    />
                                </div>)
                        })}
                    </Carousel>
                ) : (
                    <p>Não há vídeos no momento.</p>
                )}
            </div>
        </div>
    )

}

const SectionVideos: React.FC = () => {
    const { videos } = useVideos()
    const { handleFeaturedVideoUpdate, FeaturedVideo } = useFeaturedVideo()

    useEffect(() => {
        handleFeaturedVideoUpdate(videos[0], false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                        <VideosCarousel videos={videos} onSlideItemClick={(e, video) => {
                            e.preventDefault()
                            handleFeaturedVideoUpdate(video)
                        }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionVideos