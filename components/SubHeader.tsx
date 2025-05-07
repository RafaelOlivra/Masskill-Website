'use client';

import React, { useRef, useEffect } from 'react'

import pageStyles from '../styles/Page.module.css'
import bootstrapStyles from '../styles/Bootstrap.module.css'
import utilsStyles from '../styles/Utils.module.css'

import withViewportAnimation from './lib/useViewportAnimation'

type Props = {
  children: React.ReactNode
}

const SubHeader = ({ children }: Props) => {

  // Handle animations
  const titleRef = useRef(null);
  useEffect(() => {
    withViewportAnimation(titleRef, 'fadeInUpSmall');
  });

  return (
    <section
      ref={titleRef}
      className={`${pageStyles['page-title']} toBeAnimated`}
    >
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
  )
}

export default SubHeader