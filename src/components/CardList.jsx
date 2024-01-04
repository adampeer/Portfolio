import styled from "styled-components"
import { projects } from "../cardData"
import Card from "./Card";
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

const Main = styled.main`
  position: relative;
`

const CardList = () => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <Main ref={container} >
      {
        projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return <Card key={project.title} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
        })
      }
    </Main >
  )
}

export default CardList