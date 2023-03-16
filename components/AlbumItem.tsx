import React from 'react'
import Image from 'next/image'

import styles from '../styles/components/AlbumItem.module.css'

export interface AlbumProps {
    coverUrl: string,
    title: string,
    date: number,
    spotifyUrl: string,
    isActive?: boolean,
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, spotifyUrl: string) => void
}

const AlbumItem: React.FC<AlbumProps> = ({ coverUrl, title, date, spotifyUrl, isActive, onClick }) => {
    return (
        <div className={styles['album-item'] + ' ' + (isActive ? styles['active'] : '')}>
            <a href="#" data-album-embed={spotifyUrl} onClick={(e) => onClick ? onClick(e, spotifyUrl) : ''}>
                <div className={styles['cover']}>
                    <Image src={coverUrl} alt={title} width={160} height={160}></Image>
                </div>
                <div className={styles['meta-data']}>
                    <p className={styles['title']}>{title}</p>
                    <div className={styles['date']}><time>{date}</time></div>
                </div>
            </a>
        </div>
    )
}

export default AlbumItem