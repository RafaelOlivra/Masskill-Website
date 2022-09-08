import React from 'react'

import bootstrapStyles from '../../styles/Bootstrap.module.css'
import pageStyles from '../../styles/Page.module.css'

type Props = {
  children: React.ReactNode
}

const SectionArticle = ({ children }: Props) => {
  return (
    <article className={pageStyles['page-content']} id="page-content">
      <div className={bootstrapStyles['container']}>
        <div className={bootstrapStyles['row']}>
          <div className={bootstrapStyles['col-lg-12']}>
            {children}
          </div>
        </div>
      </div>
    </article>
  )
}

export default SectionArticle