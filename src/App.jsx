import { SpeedInsights } from "@vercel/speed-insights/react"
import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import './App.css'
import { isMobile } from "./utils/isMobile"
import Loading from "./components/Loading";
import Hero from "./components/Hero"
import About from "./components/About"
import TextScroll from "./components/TextScroll"
import Work from "./components/Work"
import CardList from "./components/CardList"
import Contact from "./components/Contact";

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis()

    function raf (time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);

  return (
    <>
      {isLoading && <Loading onAnimationFinish={() => setIsLoading(false)} />}
      {!isLoading && (
        <>
          <Hero isMobile={isMobile} />
          <About />
          <TextScroll baseVelocity={-5}><p>DESIGN + FRONTEND + BACKEND +</p></TextScroll>
          <TextScroll baseVelocity={+5}><p>+ BACKEND + FRONTEND + DESIGN</p></TextScroll>
          <Work />
          <CardList />
          <Contact />
          <SpeedInsights />
        </>
      )}
    </>
  )
}

export default App