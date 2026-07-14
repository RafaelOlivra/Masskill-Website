import React from 'react'

import styles from '../styles/components/SocialIconRow.module.css'

import { faSpotify, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export interface SocialIconRowProps {
    spotify?: string,
    facebook?: string,
    instagram?: string,
    youtube?: string,
    palcoMp3?: string,
    email?: string,
    linkTarget?: string,
    linkRel?: string
}

const SocialIconRow: React.FC<SocialIconRowProps> = ({ spotify, facebook, instagram, youtube, palcoMp3, email, linkTarget, linkRel }) => {
    linkTarget = linkTarget || '_blank'
    linkRel = linkRel || 'noreferrer'
    return (
        <>
            <div className={styles['social-icon-row']}>
                <ul>
                    {spotify && <li><a target={linkTarget} rel={linkRel} href={spotify}><FontAwesomeIcon icon={faSpotify} /></a></li>}
                    {facebook && <li><a target={linkTarget} rel={linkRel} href={facebook}><FontAwesomeIcon icon={faFacebook} /></a></li>}
                    {instagram && <li><a target={linkTarget} rel={linkRel} href={instagram}><FontAwesomeIcon icon={faInstagram} /></a></li>}
                    {youtube && <li><a target={linkTarget} rel={linkRel} href={youtube}><FontAwesomeIcon icon={faYoutube} /></a></li>}
                    {palcoMp3 && <li><a target={linkTarget} rel={linkRel} href={palcoMp3}><FontAwesomeIcon icon={faMusic} /></a></li>}
                    {email && <li><a target={linkTarget} rel={linkRel} href={email}><FontAwesomeIcon icon={faEnvelope} /></a></li>}
                </ul>
            </div>
        </>
    )
}

export default SocialIconRow