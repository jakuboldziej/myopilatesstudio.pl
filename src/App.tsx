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
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <div className="flex-1 flex flex-col">
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={basePath}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className="flex-1 flex flex-col origin-top"
          >
            {currentOutlet}
          </motion.main>
        </AnimatePresence>
      </div>

      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default App