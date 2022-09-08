import React from 'react'
import EventItem, { EventProps } from '../EventItem'

import bootstrapStyles from '../../styles/Bootstrap.module.css'
import utilsStyles from '../../styles/Utils.module.css'
import pageStyles from '../../styles/Page.module.css'
import styles from '../../styles/sections/SectionEvents.module.css'

const SectionEvents: React.FC = () => {

  type eventsList = EventProps[] | [];
  const availableEvents: eventsList = [];

  return (
    <section className={styles['events']} id="shows">
      <div className={bootstrapStyles['container']}>
        <div className={bootstrapStyles['row']}>
          <div className={bootstrapStyles['col-lg-12']}>

            <div className={pageStyles['section-heading']}>
              <h2 className="title">Shows</h2>
              <a href="#" className={pageStyles['side-link'] + ' ' + utilsStyles['hidden']}>Mais Datas</a>
            </div>

            <div className={styles['events-holder']}>
              {availableEvents.length > 0 ? (
                availableEvents.map((EventProps, index) => {
                  return (
                    <EventItem
                      key={index}
                      {...EventProps}
                    />
                  )
                })
              ) : (
                <p>Não há shows marcados no momento.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionEvents