import { isMobile } from "../utils/isMobile";
import styled from "styled-components"
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import PropTypes from 'prop-types';

const Parallax = styled.div`
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  color: white;
  transform: rotate(-5deg);
  font-family: "GeneralSans-Medium";
  ${isMobile() ? `margin-top: 5rem;` : `margin: 0;`}
`

const Scroller = styled(motion.div)`
  font-weight: 100;
  text-transform: uppercase;
  display: flex;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  height: fit-content;
  ${isMobile() ? `font-size: 6rem;` : `font-size: 25vh;`}
`

const Text = styled(motion.span)`
  display: block;
  margin-right: 30px;
`

const TextScroll = ({ children, baseVelocity = 100 }) => {

  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef(1)

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 8000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  // component definition
  TextScroll.propTypes = {
    children: PropTypes.string,
    baseVelocity: PropTypes.number
  };

  return (
    <Parallax>
      <Scroller style={{ x }}>
        {[...Array(4)].map((_, i) => (
          <Text key={i}>{children}</Text>
        ))}
      </Scroller>
    </Parallax>
  )
}

export default TextScroll