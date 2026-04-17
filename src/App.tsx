import { useEffect, useState } from 'react'
import { initLenis, destroyLenis } from './lib/lenis'
import CustomCursor from './components/ui/CustomCursor'
import Navbar from './components/layout/Navbar'
import Loader from './components/sections/Loader'
import Hero from './components/sections/Hero'
import Marquee from './components/sections/Marquee'
import Philosophy from './components/sections/Philosophy'
import Menu from './components/sections/Menu'
import Story from './components/sections/Story'
import Ingredients from './components/sections/Ingredients'
import Press from './components/sections/Press'
import Footer from './components/sections/Footer'

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false)

  useEffect(() => {
    if (loaderDone) {
      initLenis()
      return () => destroyLenis()
    }
  }, [loaderDone])

  return (
    <>
      <CustomCursor />
      <Loader onComplete={() => setLoaderDone(true)} />
      {loaderDone && (
        <>
          <Navbar />
          <Hero />
          <Marquee />
          <Philosophy />
          <Menu />
          <Story />
          <Ingredients />
          <Press />
          <Footer />
        </>
      )}
    </>
  )
}
