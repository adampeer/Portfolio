import { scroller } from "react-scroll"
import PropTypes from "prop-types"
import styled from 'styled-components';
import { isMobile } from "../utils/isMobile";
import data from "../data";

const MenuContainer = styled.div`
  ${isMobile() ? `width: 100vw;` : `width: 35vw;`}
  height: 100vh;
  background-color: #1a1d1d;
  color: #fff;
  position: fixed;
  z-index: 40;
  right: 0;
`

const MenuCloseContainer = styled.div`
  ${isMobile() ? `` : `padding: 4vh;`}
  position: absolute;
  right: 0;
`

const MenuItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const MenuNavContainer = styled.div`
  position: absolute;
  top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${isMobile() ? `padding: 2vh;` : `padding: 4vh;`}
`

const MenuNav = styled.a`
  font-family: "GeneralSans-Regular";
  text-transform: uppercase;
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
  ${isMobile() ? `font-size: 3vh;` : `font-size: 5vh;`}
  ${isMobile() ? `padding-top: 1vh;` : `padding-top: 1vh;`}
  &::before {
    content: '•\\00a0'; // Unicode for a bullet point followed by a non-breaking space
    display: inline-block;
    margin-right: 5px; // Adjust the space between the bullet point and the text as needed
    opacity: 0; // Start with an invisible bullet point
    transition: opacity 0.3s ease; // Smooth transition for the opacity
    width: 0; // Start with a width of 0 to not affect the layout
  }
  &:hover::before {
    opacity: 1; // Fully visible bullet point on hover
    width: auto; // Allow the width to expand to fit the content
  }
`

const MenuLinkContainer = styled.div`
  position: absolute;
  bottom: 0.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${isMobile() ? `padding: 2vh;` : `padding: 4vh;`}
  display: flex;
`

const MenuLink = styled(MenuNav)``

const MenuText = styled.p`
  width: 200px;
  font-family: "GeneralSans-Regular";
  text-transform: uppercase;
  padding-bottom: 1.5vh;
  border-bottom: 1px solid #fff;
  letter-spacing: 4px;
`

const scrollToSection = (sectionId) => {
  scroller.scrollTo(sectionId, {
    duration: 1000,
    delay: 0,
    smooth: 'easeInOutQuart'
  })
}

const Menu = ({ style, isOpen, toggleMenu }) => {

  // Props Validation
  Menu.propTypes = {
    style: PropTypes.object,
    isOpen: PropTypes.bool,
    toggleMenu: PropTypes.func
  }

  return (
    <MenuContainer style={style} isOpen={isOpen}>
      <MenuCloseContainer>
      </MenuCloseContainer>
      <MenuItemContainer>
        <MenuNavContainer>
          <MenuText>Navigation</MenuText>
          <MenuNav onClick={() => { toggleMenu(), scrollToSection("about") }}>About</MenuNav>
          <MenuNav onClick={() => { toggleMenu(), scrollToSection("selected-work") }}>Work</MenuNav>
          <MenuNav onClick={() => { toggleMenu(), scrollToSection("skills") }}>Skills</MenuNav>
          <MenuNav onClick={() => { toggleMenu(), scrollToSection("contact") }}>Contact</MenuNav>
        </MenuNavContainer>
        <MenuLinkContainer>
          <MenuText>Social</MenuText>
          <MenuLink href={data.socialMedia.linkedIn} target="_blank">LinkedIn</MenuLink>
          <MenuLink href={data.socialMedia.github} target="_blank">GitHub</MenuLink>
        </MenuLinkContainer>
      </MenuItemContainer>
    </MenuContainer>
  )
}

export default Menu