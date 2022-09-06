import React from 'react'
import Button from '../Button'

import bootstrapStyles from '../../styles/Bootstrap.module.css'
import pageStyles from '../../styles/Pages.module.css'
import utilsStyles from '../../styles/Utils.module.css'
import styles from '../../styles/sections/SectionContact.module.css'

const SectionContact: React.FC = () => {
  return (
    <section className={styles['contact']} id="contato">
      <div className={bootstrapStyles['container']}>
        <div className={bootstrapStyles['row']}>
          <div className={bootstrapStyles['col-lg-12']}>

            <div className={pageStyles['section-heading']}>
              <h2 className="title">Contato</h2>
            </div>

            <div className={utilsStyles['df-mg-top']}>
              <p className={utilsStyles['small-mg-bottom']}>Para contato para shows ou imprensa, estamos disponíveis através do email:</p>
              <Button className="wide-sm" href="mailto:contato@masskill.com.br" type="stroked">contato@masskill.com.br</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContact