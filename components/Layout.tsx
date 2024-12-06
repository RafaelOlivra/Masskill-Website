import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import SocialIconRow from "../components/SocialIconRow";

import bootstrapStyles from "../styles/Bootstrap.module.css";
import utilsStyles from "../styles/Utils.module.css";
import headerStyles from "../styles/Header.module.css";
import footerStyles from "../styles/Footer.module.css";

const Header = () => {
  const [menuActive, toggleMenu] = useState(false);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const target = e.target as HTMLAnchorElement;
    if (target && target.href) {
      let urlHash = target.href.replace(
        window.location.origin + window.location.pathname,
        ""
      );
      if (urlHash.match("^#") && urlHash !== "#") {
        e.preventDefault();
        const targetSection = document.getElementById(urlHash.replace("#", ""));
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      toggleMenu(false);
    }
  };

  // Menu icons
  const OpenMenuIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style={{ 'fill': "#fff" }} width="30" height="30" viewBox="0 0 30 30">
      <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
    </svg>
  }

  const CloseMenuIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" style={{ 'fill': "#fff" }} viewBox="0 0 511.995 511.995" width="30" height="30">
      <path d="M437.126 74.939c-99.826-99.826-262.307-99.826-362.133 0C26.637 123.314 0 187.617 0 256.005s26.637 132.691 74.993 181.047c49.923 49.923 115.495 74.874 181.066 74.874s131.144-24.951 181.066-74.874c99.826-99.826 99.826-262.268.001-362.113zM409.08 409.006c-84.375 84.375-221.667 84.375-306.042 0-40.858-40.858-63.37-95.204-63.37-153.001s22.512-112.143 63.37-153.021c84.375-84.375 221.667-84.355 306.042 0 84.355 84.375 84.355 221.667 0 306.022z" />
      <path d="m341.525 310.827-56.151-56.071 56.151-56.071c7.735-7.735 7.735-20.29.02-28.046-7.755-7.775-20.31-7.755-28.065-.02l-56.19 56.111-56.19-56.111c-7.755-7.735-20.31-7.755-28.065.02-7.735 7.755-7.735 20.31.02 28.046l56.151 56.071-56.151 56.071c-7.755 7.735-7.755 20.29-.02 28.046 3.868 3.887 8.965 5.811 14.043 5.811s10.155-1.944 14.023-5.792l56.19-56.111 56.19 56.111c3.868 3.868 8.945 5.792 14.023 5.792a19.828 19.828 0 0 0 14.043-5.811c7.733-7.756 7.733-20.311-.022-28.046z" />
    </svg>
  }

  return (
    <section className={headerStyles["page-header"]}>
      <div className={bootstrapStyles["container"]}>
        <div className={bootstrapStyles["row"]}>
          <div
            className={
              bootstrapStyles["col-lg-12"] + " " + utilsStyles["text-center"]
            }
          >
            <nav
              className={
                headerStyles["main-navigation"] +
                " " +
                (menuActive ? headerStyles["mb-active"] : "")
              }
            >
              <span
                id="main-menu-trigger"
                className={headerStyles["menu-trigger"]}
                onClick={() => toggleMenu(!menuActive)}
              >
                {menuActive ? <CloseMenuIcon /> : <OpenMenuIcon />}
              </span>
              <ul>
                <li>
                  <Link href="/#videos" passHref>
                    <a onClick={(e) => handleScrollToSection(e)}>Videos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#discografia" passHref>
                    <a onClick={(e) => handleScrollToSection(e)}>Discografia</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#shows" passHref>
                    <a onClick={(e) => handleScrollToSection(e)}>Shows</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#galeria" passHref>
                    <a onClick={(e) => handleScrollToSection(e)}>Galeria</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#sobre" passHref>
                    <a onClick={(e) => handleScrollToSection(e)}>Sobre</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#contato" passHref>
                    <a onClick={(e) => handleScrollToSection(e)}>Contato</a>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className={headerStyles["logo-holder"]}>
              <Link href="/">
                <a>
                  <Image
                    src="/logo.svg"
                    alt="Masskill Site Oficial"
                    width={684}
                    height={93}
                    objectFit="contain"
                  />
                </a>
              </Link>
            </div>

            <div className={headerStyles["social-media-block"]}>
              <SocialIconRow
                spotify="https://open.spotify.com/artist/2Ese7euNUCeDzGZY8BDf9s"
                facebook="https://facebook.com/masskillmetal"
                instagram="https://www.instagram.com/masskillofficial/"
                youtube="https://www.youtube.com/channel/UChFFgMwNVouYPrE9oiI0sKQ"
                palcoMp3="https://www.palcomp3.com.br/masskillmetal/"
                email="mailto:contato@masskill.com.br"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  // Animated Backgrounds
  const FeaturedBackgrounds = () => {
    const bgs: any = {
      "homepage-escape-samsara.jpg": "Escape Samsara",
    };

    const bgCount = Object.keys(bgs).length;

    const [currentActiveBg, updateActiveBg] = useState(0);

    const handleBgUpdate = useCallback(() => {
      setTimeout(() => {
        if (currentActiveBg > bgCount - 2) {
          updateActiveBg(0);
        } else {
          updateActiveBg(currentActiveBg + 1);
        }
      }, 10000);
    }, [bgCount, currentActiveBg, updateActiveBg]);

    useEffect(() => {
      handleBgUpdate();
    }, [handleBgUpdate]);

    return (
      <>
        {Object.keys(bgs).map((name, index) => {
          return (
            <div
              key={index}
              className={
                footerStyles["image-holder"] +
                " " +
                (currentActiveBg === index ? footerStyles["active"] : "")
              }
            >
              <Image
                src={"/" + name}
                alt={bgs[name]}
                loading="lazy"
                objectFit="cover"
                layout="fill"
              />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <footer className={footerStyles["page-footer"]}>
        <div className={bootstrapStyles["container"]}>
          <div
            className={
              bootstrapStyles["row"] + " " + utilsStyles["align-items-center"]
            }
          >
            <div
              className={
                bootstrapStyles["col-lg-5"] +
                " " +
                footerStyles["copyright-column"]
              }
            >
              <p>
                © Copyright {new Date().getFullYear()} Masskill - Dev by{" "}
                <a href="https://rafaeloliveiradesign.com">Rafael Oliveira</a>
              </p>
            </div>
            <div
              className={
                bootstrapStyles["col-lg-2"] +
                " " +
                utilsStyles["text-center"] +
                " " +
                footerStyles["logo-column"]
              }
            >
              <div className={footerStyles["logo-holder"]}>
                <Link href="/">
                  <a>
                    <Image
                      src="/logo.svg"
                      alt="Masskill Site Oficial"
                      width={150}
                      height={21}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div
              className={
                bootstrapStyles["col-lg-5"] + " " + footerStyles["nav-column"]
              }
            >
              <nav className={footerStyles["footer-navigation"]}>
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Ir para o topo
                    </a>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Política de privacidade</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      <div className={footerStyles["featured-backgrounds"]}>
        <div className={footerStyles["holder"]}>
          <FeaturedBackgrounds />
        </div>
      </div>
    </>
  );
};

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
