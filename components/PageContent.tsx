import React from 'react'

import bootstrapStyles from '../styles/Bootstrap.module.css'
import pageStyles from '../styles/Page.module.css'

type pageTemplates = 'default' | 'fullwidth';
type Props = {
  template?: pageTemplates,
  children: React.ReactNode
}

const PageContent = ({ template, children }: Props) => {
  template = template || 'default';
  return (
    <article className={pageStyles['page-content'] + ' ' + pageStyles['template-' + template]} id="page-content">
      {template === 'fullwidth' &&
        children
      }
      {template === 'default' &&
        <div className={bootstrapStyles['container']}>
          <div className={bootstrapStyles['row']}>
            <div className={bootstrapStyles['col-lg-12']}>
              {children}
            </div>
          </div>
        </div>
      }
    </article>
  )
}

export default PageContent