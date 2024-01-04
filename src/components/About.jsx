import styled from "styled-components"
import data from "../data"
import { isMobile } from "../utils/isMobile"
import { motion, useScroll } from 'framer-motion';
import { useRef } from "react";

const Section = styled.section`
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div``

const AboutTextContainer = styled.div`
  ${isMobile() ? `height: auto;` : `height: 100%;`}
  width: 100%;
  display: flex;
  align-items: center;
`

const AboutText = styled(motion.p)`
  color: #fff;
  ${isMobile()
    ?
    `font-size: 2rem;
    letter-spacing: 0;
    padding: 0 2rem;
    `
    :
    `font-size: min(4vw,4rem);
    padding: 5vh 5vw 20vh 5vw;
  `
  }
  font-family: "GeneralSans-Medium";
  font-weight: 500;
  line-height: 1.4;
  text-indent: min(10vw,100rem);
`

const About = () => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["0 0.5", "start 0.2"]
  })

  return (
    <Section>
      <Wrapper>
        <AboutTextContainer id="about">
          <AboutText ref={container} style={{ opacity: scrollYProgress }}>{data.aboutText}</AboutText>
        </AboutTextContainer>
      </Wrapper>
    </Section>
  )
}

export default About