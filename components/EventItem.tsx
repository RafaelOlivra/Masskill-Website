import React from 'react'
import Button from './Button'

import styles from '../styles/components/EventItem.module.css'

export interface EventProps {
    title: string,
    date: string,
    location: string,
    ticketsUrl?: string,
    googleMapsUrl?: string,
}

const EventItem: React.FC<EventProps> = ({ title, date, location, ticketsUrl, googleMapsUrl }) => {
    return (
        <div className={styles['event-item']}>
            <div className={styles['meta-data']}>
                <p className={styles['title']}>{title}</p>
                <div className={styles['date']}><time>{date}</time></div>
                <div className={styles['location']}><time>{location}</time></div>
            </div>
            <div className={styles['buttons']}>
                {ticketsUrl && <Button href={ticketsUrl}>Ingressos</Button>}
                {googleMapsUrl && <Button href={googleMapsUrl} type="stroked">Como Chegar</Button>}
            </div>
        </div>
    )
}

export default EventItem