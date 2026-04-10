import { ArrowRight } from "lucide-react"
import { motion, type Variants } from "framer-motion"
import { useEffect, useState } from "react" // Dodajemy useState
import CustomLink from "../custom/CustomLink";
import CustomImage from "@/components/custom/CustomImage";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2, // Lekko przyspieszone
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// Zmienna żyje poza cyklem życia Reacta
let hasAnimated = false;

function HeroSection() {
  // TRIK: Domyślny stan to "hidden" (jeśli pierwsze wejście) lub "show" (jeśli wracamy z innej podstrony)
  const [animTrigger, setAnimTrigger] = useState(hasAnimated ? "show" : "hidden");

  useEffect(() => {
    if (!hasAnimated) {
      // Jeśli to pierwsze załadowanie, czekamy 50ms i ręcznie odpalamy animację.
      // To całkowicie omija blokadę initial={false} z pliku App.tsx!
      const timer = setTimeout(() => {
        setAnimTrigger("show");
        hasAnimated = true;
      }, 50);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <CustomImage
          src="/images/interior-6.jpg"
          alt="Studio Pilates z naturalnym swiatlem"
          containerClassName="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30 z-10" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden" // Zawsze startuje z tego punktu, żeby nie mrugnąć tekstem
          animate={animTrigger} // Kontrolowane przez nasz stan (useState)
          className="max-w-2xl"
        >
          <motion.p variants={itemVariants} className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Witamy w Myo Pilates
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-tight">
            Przekształć Swoje Ciało,{" "}
            <span className="text-accent">Wznieś Swój Umysł</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
            Odkryj sztukę świadomego ruchu w Myo Pilates Studio.
            Nasi doświadczeni instruktorzy prowadzą spersonalizowane sesje
            zaprojektowane, aby budować siłę, poprawiać elastyczność i przywracać
            harmonię Twojemu ciału i umysłowi.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
            <CustomLink to="/grafik">
              Grafik Zajęć
              <ArrowRight className="ml-2 h-4 w-4" />
            </CustomLink>
            <CustomLink
              to="/cennik"
              className="bg-transparent text-accent hover:text-primary-foreground"
            >
              Cennik
              <ArrowRight className="ml-2 h-4 w-4" />
            </CustomLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection;