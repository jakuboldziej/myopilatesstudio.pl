import { ArrowRight } from "lucide-react"
import CustomLink from "../custom/CustomLink";
import CustomImage from "@/components/custom/CustomImage";

function HeroSection() {
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
        <div className="max-w-2xl">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Witamy w Myo Pilates
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-tight">
            Przekształć Swoje Ciało,{" "}
            <span className="text-accent">Wznieś Swój Umysł</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
            Odkryj sztuke świadomego ruchu w Myo Pilates Studio.
            Nasi doświadczeni instruktorzy prowadzą spersonalizowane sesje
            zaprojektowane, aby budować siłę, poprawiać elastyczność i przywracać
            harmonię Twojemu ciału i umysłowi.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CustomLink to="/grafik">
              Grafik Zajęć
              <ArrowRight className="ml-2 h-4 w-4" />
            </CustomLink>
            <CustomLink
              to="/grafik"
              className="bg-transparent text-accent hover:text-primary-foreground"
            >
              Cennik
              <ArrowRight className="ml-2 h-4 w-4" />
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;