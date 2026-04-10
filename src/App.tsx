import { useLocation, useOutlet, ScrollRestoration } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useEffect } from "react";
import ReactGA from 'react-ga4'

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname })
  }, [location.pathname])

  const basePath = location.pathname.split('/')[1] || 'home';

  return (
    <div className="bg-background">
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-1 flex flex-col relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.main
              key={basePath}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              className="flex-1 flex flex-col w-full origin-top"
            >
              {currentOutlet}
            </motion.main>
          </AnimatePresence>
        </div>
      </div>

      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default App