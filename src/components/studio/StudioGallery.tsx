import { ArrowRight } from "lucide-react"
import CustomLink from "../custom/CustomLink"

const galleryImages = [
  { src: "/images/hero-pilates.jpg", alt: "Studio Pilates z naturalnym swiatlem" },
  { src: "/images/studio-interior.jpg", alt: "Wnetrze studia z reformerami" },
  { src: "/images/pilates-class.jpg", alt: "Grupowe zajecia Pilates" },
]

function StudioGallery() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Nasza Przestrzeń
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Wejdź do naszego jasnego, przyjaznego studia zaprojektowanego dla Twojego komfortu i skupienia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden ${index === 0 ? "md:col-span-2 md:row-span-2 aspect-[4/3]" : "aspect-square"}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col items-center justify-center">
          <p className="text-muted-foreground mb-6">
            Gotowy, aby doświadczyć Myo Pilates na własnej skórze?
          </p>

          <CustomLink
            to="/grafik"
          >
            Zobacz Nasz Grafik Zajęć
            <ArrowRight className="ml-2 h-4 w-4" />
          </CustomLink>
        </div>
      </div>
    </section>
  )
}

export default StudioGallery