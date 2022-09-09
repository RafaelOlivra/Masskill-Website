import React from 'react'

import Image from 'next/image'
import Carousel from 'nuka-carousel'

import bootstrapStyles from '../../styles/Bootstrap.module.css'
import pageStyles from '../../styles/Page.module.css'
import styles from '../../styles/sections/SectionGallery.module.css'
export interface GalleryImage {
    src: string,
    alt: string
}

export type galleryImagesList = {
    galleryImages: GalleryImage[] | []
};

const SectionGallery: React.FC<galleryImagesList> = ({ galleryImages }) => {
    return (
        <section className={styles['gallery']} id="galeria">
            <div className={bootstrapStyles['container']}>
                <div className={bootstrapStyles['row']}>
                    <div className={bootstrapStyles['col-lg-12']}>

                        <div className={pageStyles['section-heading']}>
                            <h2 className="title">Galeria</h2>
                            <a href="https://www.instagram.com/masskillofficial/" className={pageStyles['side-link']} target="_blank" rel="noreferrer">Instagram</a>
                        </div>
                        <div className={styles['gallery-carousel']}>
                            <div className={styles['holder']}>
                                {galleryImages.length > 0 ? (
                                    <Carousel
                                        slidesToShow={1}
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
                                        pauseOnHover={true}
                                        autoplay={true}
                                        enableKeyboardControls={true}
                                        wrapAround={true}
                                    >
                                        {galleryImages.map((GalleryImage, index) => {
                                            return (
                                                <div key={index} className={styles['slide-item']}>
                                                    <Image
                                                        {...GalleryImage}
                                                        alt={GalleryImage.alt}
                                                        layout='responsive'
                                                        width={1310}
                                                        height={660}
                                                        objectFit='cover'
                                                    />
                                                </div>)
                                        })}
                                    </Carousel>
                                ) : (
                                    <p>Não há imagens no momento.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionGallery