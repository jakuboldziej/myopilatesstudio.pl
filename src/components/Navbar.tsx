import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { routerItems } from '@/lib/variables';
import CustomLink from './custom/CustomLink';
import { MenuButton } from './MenuButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = routerItems.filter((item) => item.showInNav === true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`sticky top-0 inset-x-0 z-50 transition-colors duration-300 ease-in-out bg-primary shadow-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]`}
    >
      <div className="flex items-center justify-between px-6 h-navbar max-w-7xl mx-auto">
        <Link
          to="/"
          onClick={closeMenu}
          className="font-cookie text-4xl text-primary-foreground"
        >
          Myo Pilates Studio
        </Link>

        <div className="hidden md:flex gap-6 font-semibold absolute left-1/2 transform -translate-x-1/2">
          {menuItems.map((item, index) => (
            <Link
              key={`${item.title}-${index}`}
              to={item.href}
              className={`transition-colors text-primary-foreground hover:text-secondary ${location.pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link
            className='py-2 px-3 rounded-md bg-accent text-primary-foreground hover:bg-accent/90 w-fit'
            to="/grafik"
          >
            Grafik 🩵 Cennik
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-primary-foreground focus:outline-none w-10 h-10 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <MenuButton isOpen={isOpen} width={28} height={28} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-primary shadow-lg shadow-[0_4px_30px_rgba(0,0,0,0.5)] absolute w-full"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {menuItems.map((item, index) => (
                <Link
                  key={`${item.title}-${index}`}
                  to={item.href}
                  onClick={closeMenu}
                  className={`text-lg font-semibold text-primary-foreground transition-colors ${location.pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                    }`}
                >
                  {item.title}
                </Link>
              ))}

              <CustomLink
                to="/grafik"
                onClick={closeMenu}
              >
                Grafik 🩵 Cennik
              </CustomLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}