import PropTypes from "prop-types"
import styled from "styled-components"
import data from "../data"
import { isMobile } from "../utils/isMobile"

const Section = styled.section`
  margin-top: 10rem;
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  height: min(200vh,100%);
  width: max(80vw,1200px);
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  ${isMobile() ? `font-size: 2.3rem;` : `font-size: clamp(3rem,7.5vw,9rem);`}
`

const Subtitle = styled.h2`
  color: #fff;
  opacity: 0.8;
  padding-bottom: 2rem;
  ${isMobile() ? `font-size: 1rem;` : `font-size: clamp(1.3rem,1.5vw,2rem);`}
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Card = styled.div`
  ${isMobile() ? `width: 90vw;` : ``}
  ${isMobile() ? `height: 60vh;` : ``}
  aspect-ratio: 16/10;
  margin: 0.8rem;
  border-radius: 1.5rem;
  flex: ${isMobile() ? '1 1 1' : props => props.flex};
  overflow: hidden;
  position: relative;
`

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  object-fit: cover;
  transition: transform 0.3s ease;
  ${Card}:hover & {
    transform: scale(0.9);
    filter: blur(0.3rem);
  }
`

const CardContentContainer = styled.div`
  position: absolute;
  bottom: 0%;
  width: calc(100% - 2rem);
  border-radius: 2rem;
  background-color: #151515;
  z-index: 3;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  padding: 1rem;
  ${Card}:hover & {
    height: auto;
    transform: translateY(0%);
  }
`

const CardContentTitle = styled.h2`
  color: #fff;
  font-weight: 300;
  margin-top: 0.5rem;
  margin-bottom: -0.5rem;
  font-family: "GeneralSans-Medium";
  ${isMobile() ? `font-size: 1.2rem;` : `font-size: min(5vh,2.5rem);`}
`

const CardContentSubtitle = styled.h3`
  color: #ffffff7f;
  margin: 1rem 0;
  ${isMobile() ? `font-size: 0.8rem;` : `font-size: min(2.5vh,1.3rem);`}
`

const CardContentPill = styled.div`
  display: inline-block;
  padding: 0.5rem 2rem;
  margin: 0 0.6rem 0.6rem 0rem;
  background-color: #ffffff;
  color: #000000;
  border-radius: 2rem;
  font-family: "GeneralSans-Medium";
  ${isMobile() ? `font-size: 0.8rem;` : `font-size: min(2vh,1rem);`}
`

const WorkCard = ({ title, subtitle, skills, imgSrc, flex }) => (

  WorkCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    skills: PropTypes.object,
    imgSrc: PropTypes.string,
    flex: PropTypes.string,
  },

  <Card flex={flex}>
    <CardContentContainer>
      <CardContentTitle>{title}</CardContentTitle>
      <CardContentSubtitle>{subtitle}</CardContentSubtitle>
      {Object.keys(skills).map((key, index) => (
        <CardContentPill key={index}>{skills[key]}</CardContentPill>
      ))}
    </CardContentContainer>
    <CardImg src={imgSrc} />
  </Card>
);

const Work = () => {
  return (
    <Section>
      <Wrapper>
        <TitleContainer id="selected-work">
          <Title>Selected Work</Title>
          <Subtitle>
            {
              isMobile() ? "Tap to learn more" : "Hover to learn more"
            }
          </Subtitle>
        </TitleContainer>
        <CardContainer>
          <WorkCard {...data.work.portfolio} flex="3 1 0" />
          <WorkCard {...data.work.employeeTimesheetApplication} flex="2 1 0" />
        </CardContainer>
        <CardContainer>
          <WorkCard {...data.work.nlpFeedbackApplication} flex="2 1 0" />
          <WorkCard {...data.work.chatApplication} flex="3 1 0" />
        </CardContainer>
      </Wrapper>
    </Section >
  )
}

export default Work