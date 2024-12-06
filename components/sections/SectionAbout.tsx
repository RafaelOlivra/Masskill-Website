import React from 'react'
import BandMemberBox, { BandMemberBoxProps } from '../BandMemberBox'

import bootstrapStyles from '../../styles/Bootstrap.module.css'
import utilsStyles from '../../styles/Utils.module.css'
import pageStyles from '../../styles/Page.module.css'
import styles from '../../styles/sections/SectionAbout.module.css'

const useBandMembers = () => {
  const bandMembers: BandMemberBoxProps[] = [
    {
      profileImage: '/member-giovanni-di-genova.jpg',
      name: 'Giovani Di Genova',
      url: 'https://www.facebook.com/profile.php?id=100010972477407',
      facebook: 'https://www.facebook.com/profile.php?id=100010972477407',
      instagram: 'https://www.instagram.com/giovanni_di_genova/',
    },
    {
      profileImage: '/member-rafael-oliveira.jpg',
      url: 'https://rafaeloliveiradesign.com/',
      name: 'Rafael Oliveira',
      facebook: 'https://www.facebook.com/RafaelOliveira.x',
      instagram: 'https://www.instagram.com/rafael_olivra/',
    },
    {
      profileImage: '/member-vinicius-prudencio.jpg',
      name: 'Vinicius Prudêncio',
      url: 'https://www.facebook.com/profile.php?id=100010831272976',
      facebook: 'https://www.facebook.com/profile.php?id=100010831272976',
      instagram: 'https://www.instagram.com/viniaprudencio/',
    },
  ]

  return { bandMembers }
}

const SectionAbout: React.FC = () => {

  const { bandMembers } = useBandMembers()

  return (
    <section className={styles['about']} id="sobre">
      <div className={bootstrapStyles['container']}>
        <div className={bootstrapStyles['row']}>
          <div className={bootstrapStyles['col-lg-12']}>

            <div className={pageStyles['section-heading']}>
              <h2 className="title">Sobre</h2>
            </div>

            <div className={styles['band-members-holder']}>

              {bandMembers.length > 0 && bandMembers.map((BandMemberBoxProps, index) => {
                return (
                  <BandMemberBox
                    key={`unique_${index}`}
                    {...BandMemberBoxProps}
                  />
                )
              })}
              {bandMembers.length === 0 &&
                <p>Os membros da banda não foram configurados.</p>
              }
            </div>

            <div className={"content" + utilsStyles['df-mg-top']}>
              <p>Masskill é uma banda Sorocabana de Metal fundada no ano de 2015. Iniciou suas atividades com uma proposta mais visceral, mas com o passar do tempo e com a entrada dos integrantes da formação atual, a banda está se desenvolvendo para chegar em uma sonoridade mais moderna e com sua identidade própria.</p>
              <p>Atualmente a banda conta com: Giovanni Di Genova (Voz/Guitarra), Rafael Oliveira (Guitarra), Hugo Ferraz (Baixo) e Vinicius Prudêncio (Bateria). Formação que agora trabalha em novo material para lançar em breve.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionAbout