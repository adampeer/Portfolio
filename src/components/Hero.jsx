import styled from "styled-components"
import PropTypes from "prop-types"
import { Section, Wrapper } from "./common"
import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import Menu from "./Menu"
import { isMobile } from "../utils/isMobile"
import data from "../data"

const Header = styled.header`
  height: 10vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: transparent;
  z-index: 50;
`

const HeaderTextContainer = styled.div`
  height: auto;
  margin-top: 2rem;
  position: absolute;
  display: flex;
  justify-content: space-between;
  ${isMobile() ? `width: 95vw;` : `width: 90vw;`}
`

const HeaderText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0px;
  ${isMobile() ? `margin: 0 1rem;` : `margin: 0;`}
  ${isMobile() ? `font-size: 1rem;` : `font-size: 2.4vh;`}
`

const MenuText = styled(HeaderText)`
  &:hover {
    padding-bottom: 0.5vh;
    border-bottom: 2px solid #fff;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`

const HeroTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HeroTextGrid = styled.div`
  display: flex;
  align-items: center;
  ${isMobile() ? `flex-direction: column;` : `flex-direction: row;`}
`

const HeroText = styled.p`
  color: #fff;
  padding: 0 2rem;
  line-height: 1.3;
  font-family: 'GeneralSans-Medium';
  font-weight: 600;
  ${isMobile() ? `font-size: 2.5rem;` : `font-size: clamp(3rem,7vw,8rem);`}
`

const ImgDiv = styled.div`
  border-radius: 500px;
  background-image: url(${props => props.image}); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${isMobile() ? `margin: 1rem 0;` : ``}
  ${isMobile() ? `width: 70vw;` : `width: 20vw;`}
  aspect-ratio: 25/10;
`

const Circle = styled(motion.div)`
  position: fixed;
  width: 4vw;
  aspect-ratio: 1;
  background-color: transparent;
  border-radius: 50%;
  left: 4rem;
  border: 4px solid #ddd;
  pointer-events: none;
  z-index: 5;
  ${isMobile() ? `display: none` : ``}
`;

const MenuOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: #00000094;
  z-index: 30;
`

const Hero = ({ isMobile }) => {

  const cursorSize = 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const manageMouseMove = e => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize * 2);
    mouse.y.set(clientY - cursorSize * 2);
  }

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove)
    }
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleText = isMenuOpen ? "CLOSE" : "MENU";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Menu style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.8s cubic-bezier(.36,.01,.51,1)' }} isOpen={isMenuOpen.isOpen} toggleMenu={toggleMenu} />
      <MenuOverlay style={{ display: isMenuOpen ? 'block' : 'none', transition: 'display 0.8s cubic-bezier(.36,.01,.51,1)' }} onClick={toggleMenu} />
      <Section>
        <Circle style={{ left: smoothMouse.x, top: smoothMouse.y }} />
        <Wrapper>
          <Header>
            <HeaderTextContainer>
              <HeaderText>ADAM PEER</HeaderText>
              <MenuText onClick={toggleMenu}>{toggleText}</MenuText>
            </HeaderTextContainer>
          </Header>
          <HeroTextContainer>
            <HeroTextGrid>
              <HeroText>FULL-STACK</HeroText>
              <ImgDiv image={data.bgImgUrl1} />
            </HeroTextGrid>
            {isMobile() ? (
              <HeroTextGrid>
                <HeroText>WEB</HeroText>
                <ImgDiv image={data.bgImgUrl2} />
              </HeroTextGrid>
            ) : (
              <HeroTextGrid>
                <ImgDiv image={data.bgImgUrl2} />
                <HeroText>WEB</HeroText>
              </HeroTextGrid>
            )}
            <HeroTextGrid>
              <HeroText>DEVELOPER</HeroText>
              <ImgDiv image={data.bgImgUrl3} />
            </HeroTextGrid>
          </HeroTextContainer>
        </Wrapper>
      </Section >
    </>
  );
};

Hero.propTypes = {
  isMobile: PropTypes.func
};


export default Hero