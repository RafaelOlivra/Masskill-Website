
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

import SocialIconRow from '../components/SocialIconRow'

import bootstrapStyles from '../styles/Bootstrap.module.css'
import utilsStyles from '../styles/Utils.module.css'
import headerStyles from '../styles/Header.module.css'
import footerStyles from '../styles/Footer.module.css'
import Link from 'next/link'

const Header = () => {

  const [menuActive, toggleMenu] = useState(false);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const target = e.target as HTMLAnchorElement;
    if (target && target.href) {
      let urlHash = target.href.replace(window.location.origin + window.location.pathname, '');
      if (urlHash.match('^#') && urlHash !== '#') {
        e.preventDefault();
        const targetSection = document.getElementById(urlHash.replace('#', ''));
        if (targetSection) {
          toggleMenu(false);
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }

  return (
    <section className={headerStyles['page-header']}>
      <div className={bootstrapStyles['container']}>
        <div className={bootstrapStyles['row']}>
          <div className={bootstrapStyles['col-lg-12'] + ' ' + utilsStyles['text-center']}>
            <nav className={headerStyles['main-navigation'] + ' ' + (menuActive ? headerStyles['mb-active'] : '')}>
              <span id="main-menu-trigger" className={headerStyles['menu-trigger']} onClick={() => toggleMenu(!menuActive)}>{menuActive ? 'X' : 'Menu'}</span>
              <ul>
                <li><a href="#videos" onClick={(e) => handleScrollToSection(e)}>Videos</a></li>
                <li><a href="#discografia" onClick={(e) => handleScrollToSection(e)}>Discografia</a></li>
                <li><a href="#shows" onClick={(e) => handleScrollToSection(e)}>Shows</a></li>
                <li><a href="#sobre" onClick={(e) => handleScrollToSection(e)}>Sobre</a></li>
                <li><a href="#contato" onClick={(e) => handleScrollToSection(e)}>Contato</a></li>
              </ul>
            </nav>

            <div className={headerStyles['logo-holder']}>
              <Image src="/logo.svg" alt="Masskill Site Oficial" width={684} height={93} objectFit="contain" />
            </div>

            <div className={headerStyles['social-media-block']}>
              <SocialIconRow
                spotify='https://open.spotify.com/artist/2Ese7euNUCeDzGZY8BDf9s'
                facebook='https://facebook.com/masskillmetal'
                instagram='https://www.instagram.com/masskillofficial/'
                youtube='https://www.youtube.com/channel/UChFFgMwNVouYPrE9oiI0sKQ'
                palcoMp3='https://www.palcomp3.com.br/masskillmetal/'
                email='mailto:contato@masskill.com.br'
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

const Footer = () => {

  // Animated Backgrounds
  const FeaturedBackgrounds = () => {

    const bgs: any = {
      'bg-foto-1.jpg': 'Masskill Band',
      'bg-scream-in-vain.jpg': 'Scream in Vain',
      'bg-blurry-visions-single.jpg': 'Blurry Visions Single',
      'bg-foto-2.jpg': 'Masskill Band',
      'bg-the-cycle.jpg': 'The Cycle EP',
      'bg-down-society.jpg': 'Down Society Bg',
    }

    const bgCount = Object.keys(bgs).length;

    const [currentActiveBg, updateActiveBg] = useState(0);

    const handleBgUpdate = () => {
      setTimeout(() => {
        if (currentActiveBg > (bgCount - 2)) {
          updateActiveBg(0)
        } else {
          updateActiveBg(currentActiveBg + 1);
        }
      }, 10000);
    }

    useEffect(() => {
      handleBgUpdate();
    });

    return (
      <>
        {Object.keys(bgs).map((name, index) => {
          return <div key={index} className={footerStyles['image-holder'] + " " + (currentActiveBg === index ? footerStyles['active'] : '')}><Image src={"/" + name} alt={bgs[name]} loading="lazy" objectFit="cover" layout="fill" /></div>
        })}
      </>
    )
  }

  return (
    <>
      <footer className={footerStyles['page-footer']}>
        <div className={bootstrapStyles['container']}>
          <div className={bootstrapStyles['row'] + ' ' + utilsStyles['align-items-center']}>
            <div className={bootstrapStyles['col-lg-5'] + ' ' + footerStyles['copyright-column']}>
              <p>© Copyright {new Date().getFullYear()} Masskill - Dev by <a href="https://rafaeloliveiradesign.com">Rafael Oliveira</a></p>
            </div>
            <div className={bootstrapStyles['col-lg-2'] + ' ' + utilsStyles['text-center'] + ' ' + footerStyles['logo-column']}>
              <div className={footerStyles['logo-holder']}>
                <Link href="/"><a><Image src="/logo.svg" alt="Masskill Site Oficial" width={150} height={21} /></a></Link>
              </div>
            </div>
            <div className={bootstrapStyles['col-lg-5'] + ' ' + footerStyles['nav-column']}>
              <nav className={footerStyles['footer-navigation']}>
                <ul>
                  <li><a href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }
                    }>Ir para o topo</a></li>
                  <li><a href="#">Política de privacidade</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      <div className={footerStyles['featured-backgrounds']}>
        <div className={footerStyles['holder']}>
          <FeaturedBackgrounds />
        </div>
      </div>
    </>
  )
}

type Props = {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout