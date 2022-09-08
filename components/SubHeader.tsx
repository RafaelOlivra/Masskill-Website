
import React from 'react'

import pageStyles from '../styles/Page.module.css'
import bootstrapStyles from '../styles/Bootstrap.module.css'
import utilsStyles from '../styles/Utils.module.css'

type Props = {
  children: React.ReactNode
}

const SubHeader = ({ children }: Props) => {
  return (
    <>
      <section className={pageStyles['page-sub-header']}>
        <div className={bootstrapStyles['container']}>
          <div className={bootstrapStyles['row']}>
            <div className={bootstrapStyles['col-lg-12']}>
              <div className={utilsStyles['text-center']}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SubHeader