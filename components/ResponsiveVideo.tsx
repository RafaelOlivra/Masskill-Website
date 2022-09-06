import React from 'react'
import styles from '../styles/components/ResponsiveVideo.module.css'

export interface ResponsiveVideoProps {
    url: string,
    title: string,
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, ResponsiveVideoProps: ResponsiveVideoProps) => void;
}

const ResponsiveVideo: React.FC<ResponsiveVideoProps> = ({ url, title, onClick }) => {
    return (
        <div className={styles['video-holder']} onClick={(e) => onClick ? onClick(e, {url, title}) : ''}>
            <div className={styles['responsive-video'] + ' ' + (onClick ? styles['dynamic'] : '')}>
                <iframe className={styles['video-iframe']} width="560" height="315" src={url} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default ResponsiveVideo