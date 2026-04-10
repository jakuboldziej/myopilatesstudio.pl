import { ArrowRight } from "lucide-react"
import CustomLink from "../custom/CustomLink"
import CustomImage from "@/components/custom/CustomImage";

const galleryImages = [
  { src: "/images/interior-5.jpg", alt: "Wnętrze studia z reformerami" },
  { src: "/images/interior-3.jpg", alt: "Główne studio Myo Pilates" },
  { src: "/images/interior-logo.jpg", alt: "Reformer w studiu Myo" },
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

        <div className="flex flex-col gap-4 lg:gap-6">
          <CustomImage
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            containerClassName="w-full rounded-2xl overflow-hidden shadow-sm bg-transparent"
            className="w-full h-auto hover:scale-[1.02] transition-transform duration-700"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <CustomImage
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              containerClassName="w-full rounded-2xl overflow-hidden shadow-sm bg-transparent"
              className="w-full h-auto hover:scale-[1.03] transition-transform duration-700"
            />
            <CustomImage
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              containerClassName="w-full rounded-2xl overflow-hidden shadow-sm bg-transparent"
              className="w-full h-auto hover:scale-[1.03] transition-transform duration-700"
            />
          </div>

        </div>

        <div className="text-center mt-12 flex flex-col items-center justify-center">
          <p className="text-muted-foreground mb-6">
            Gotowy, aby doświadczyć Myo Pilates na własnej skórze?
          </p>

          <CustomLink to="/grafik">
            Zobacz Nasz Grafik Zajęć
            <ArrowRight className="ml-2 h-4 w-4" />
          </CustomLink>
        </div>
      </div>
    </section>
  )
}

export default StudioGallery;