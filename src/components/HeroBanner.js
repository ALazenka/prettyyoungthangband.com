import React from 'react'
import styled from 'styled-components'

import HamburgerMenu from './HamburgerMenu'
import { LocationAwareLink } from './Links'
import ModalMenu from './ModalMenu'
import SocialLinks from './SocialLinks'
import useFadeIn from './FadeIn'

import PYTLogo from '../assets/img/PrettyYoungThangLogo.png'

const LogoHeroBanner = styled.div`
  background: url(${PYTLogo});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: 50% 40%;
  height: 100vh;
  width: 100%;
  position: relative;

  @media only screen and (max-width: 767px) {
    height: 75vh;
  }
`

const SocialsAnchor = styled.div`
  position: absolute;
  bottom: 75px;
  left: 0;
  width: 100%;
`

const SocialsContainer = styled.div`
  width: 45%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  height: 75px;
  width: 100%;
  z-index: 1;
`

const MenuModelItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ItemPadding = styled.div`
  padding: 24px 0;
  margin: 0 auto;
`

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  min-height: 100px;
  padding: 0 10%;
`

const MENU_ITEMS = [
  // {
  //   name: 'Shows',
  //   to: '/#shows',
  // },
  {
    name: 'Songs',
    to: '/#songs',
  },
  {
    name: 'Featured Videos',
    to: '/#featured-video',
  },
  {
    name: 'Contact Us',
    to: '/#contact-us',
  },
]

function HeroBanner() {
  const [menuModalOpen, setMenuModalOpen] = React.useState(false)
  const [bannerFadeStyle, bannerDomRef] = useFadeIn(3)
  return (
    <div css={bannerFadeStyle} ref={bannerDomRef}>
      <LogoHeroBanner>
        <Header>
          <HamburgerMenu
            active={menuModalOpen}
            onClick={() => setMenuModalOpen(!menuModalOpen)}
          />
          <ModalMenu open={menuModalOpen}>
            <MenuModelItemsContainer>
              {MENU_ITEMS.map(({ name, to }, index) => (
                <ItemPadding key={`${name}-${index}`}>
                  <LocationAwareLink
                    to={to}
                    onClick={() => setMenuModalOpen(false)}
                  >
                    {name}
                  </LocationAwareLink>
                </ItemPadding>
              ))}
              <SocialLinksContainer>
                <SocialLinks />
              </SocialLinksContainer>
            </MenuModelItemsContainer>
          </ModalMenu>
        </Header>
        <SocialsAnchor>
          <SocialsContainer>
            <SocialLinks />
          </SocialsContainer>
        </SocialsAnchor>
      </LogoHeroBanner>
    </div>
  )
}

export default HeroBanner
