import { useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import PropTypes from "prop-types"
import styled from "styled-components"
import { isMobile } from "../utils/isMobile";
import data from "../data";

const CardContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0px;
`

const CardItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -25%;
  border-radius: 25px;
  transform-origin: top;
  border: 2px solid white;
  background-color: #000000;
  background-image: url(${props => props.image}); 
  background-size: cover;
  background-position: center;
  object-fit: cover;
  ${isMobile() ? `height: 80vh;` : `height: 50vh;`}
  ${isMobile() ? `width: 70vw;` : `width: 50vw;`}
  ${isMobile() ? `padding: 50px;` : `padding: 5vh;`}
`

const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  margin-top: 50px;
  align-content: flex-end;
  gap: 0.8rem;
`

const Title = styled.h1`
  color: #ffffff;
  text-transform: uppercase;
  padding-bottom: 2rem;
  ${isMobile() ? ` padding-top: 3rem;` : `padding-top: 0rem;`}
  ${isMobile() ? `font-size: 2.3rem;` : `font-size: clamp(3rem,7.5vw,9rem);`}
`

const CardTitle = styled.h1`
  color: #fff;
  padding-bottom: 1rem;
  border-bottom: 0.2rem solid #fff;
  ${isMobile() ? `font-size: 2rem;` : `font-size: clamp(2rem,6vw,3rem);`}
`

const CardContentPill = styled.div`
  display: inline-block;
  color: #ffffff;
  border-radius: 2rem; 
  border: 2px solid #ffffff;
  ${isMobile() ? `font-size: 0.9rem;` : `font-size: clamp(0.9rem,1vw,1.2rem);`}
  ${isMobile() ? `padding: 0.5rem 2rem;` : `padding: 0.5rem 2rem;`}
`

const Card = ({ i, title, skills, progress, range, targetScale }) => {

  Card.propTypes = {
    i: PropTypes.number,
    title: PropTypes.string,
    skills: PropTypes.array,
    progress: PropTypes.number,
    range: PropTypes.number,
    targetScale: PropTypes.number
  };

  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <CardContainer ref={container}>
      <Title style={{ opacity: `${i === 0 ? 100 : 0}%` }} id="skills">SKILLS</Title>
      <CardItem style={{ scale, top: `calc(-0vh + ${i * 15}px)`, zIndex: i }} image={data.skillBgImgUrl} >
        <CardTitle>{title}</CardTitle>
        <CardBody>
          {
            skills.map((skill, index) => {
              return (
                <CardContentPill key={index}>{skill}</CardContentPill>
              )
            })
          }
        </CardBody>
      </CardItem>
    </CardContainer>
  )
}

export default Card