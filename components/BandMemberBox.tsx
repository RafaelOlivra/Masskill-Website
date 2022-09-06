import React from 'react'
import Image from 'next/image'
import SocialIconRow, { SocialIconRowProps } from '../components/SocialIconRow'

import styles from '../styles/components/BandMemberBox.module.css'

interface BandMemberBoxProps extends SocialIconRowProps {
    profileImage: string,
    name: string,
    url?: string,
}

const BandMemberBox: React.FC<BandMemberBoxProps> = ({ profileImage, url, name, ...socialProfiles }) => {
    url = url || '#'
    return (
        <div className={styles['band-member-box']}>
            <a href={url} className={styles['main-link']} target="_blank" rel="noreferrer">
                <Image className={styles['member-image']} src={profileImage} alt={name} width="100%" height="100%" layout="responsive" objectFit="contain" />
            </a>
            <div className={styles['meta-data']}>
                <p className={styles['name']}>{name}</p>
                <div className={styles['social-media-profiles']}>
                    <SocialIconRow
                        {...socialProfiles}
                    />
                </div>
            </div>
        </div>
    )
}

export default BandMemberBox