import { useState, useEffect } from 'react';
import styled, { keyframes } from "styled-components"
import PropTypes from "prop-types"

const loadAnimation = keyframes`
  0% {
    clip-path: circle(1% at 0% 50%); 
  }
  100% {
    clip-path: circle(200% at 0% 50%);
  }
`;

const LoadinContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #1a1d1d;
  position: fixed;
  z-index: 30;
  clip-path: circle(1% at 0% 0%);
  animation: ${loadAnimation} 3s;
`

const LoadingCountdownText = styled.h1`
  color: white;
  font-size: 8vmin;
  margin: auto;
  text-align: center;
`

const Loading = ({ onAnimationFinish }) => {

  Loading.propTypes = {
    onAnimationFinish: PropTypes.func
  };

  const [count, setCount] = useState(0);

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // start loading animation
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (showText) {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + 2);
      }, 25);

      // clear interval at 100%
      if (count >= 100) {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }
  }, [showText, count]);


  return (
    <LoadinContainer onAnimationEnd={onAnimationFinish}>
      {showText && <LoadingCountdownText>{count}%</LoadingCountdownText>}
    </LoadinContainer>
  );
}


export default Loading