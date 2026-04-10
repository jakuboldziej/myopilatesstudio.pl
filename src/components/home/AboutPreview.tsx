import { ArrowRight, CheckCircle } from "lucide-react"
import CustomLink from "../custom/CustomLink";
import CustomImage from "@/components/custom/CustomImage";

const highlights = [
  "Nowoczesny sprzęt i wyposażenie",
  "Małe grupy dla indywidualnego podejścia",
  "Przyjazna społeczność dla wszystkich poziomów"
]

function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <CustomImage
                  src="/images/interior-2.jpg"
                  alt="Wnętrze Myo Pilates Studio"
                  containerClassName=" rounded-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <CustomImage
                  src="/images/interior-3.jpg"
                  alt="Zajęcia Pilates w trakcie"
                  containerClassName=" rounded-lg"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-lg -z-10" />
          </div>

          <div>
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              O Naszym Studio
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              Oaza Harmonii Ciała i Umysłu
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Założone w 2026 roku, Myo Pilates Studio zrodziło się z pasji
              pomagania ludziom w odkrywaniu transformującej mocy Pilatesu.
              Nasza nazwa, pochodząca od łacińskiego słowa oznaczajacego niezapominajkę,
              odzwierciedla nasze zaangażowanie w budowanie siły od wewnątrz.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Wierzymy, że ruch powinien być dostępny, przyjemny i skuteczny.
              Nasze studio zapewnia spokojne środowisko, w którym możesz skupić
              się na praktyce, wspierany przez instruktorów, którym naprawdę
              zależy na Twoich postępach.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <CustomLink to="/studio">
                Poznaj Nasz Zespół
                <ArrowRight className="ml-2 h-4 w-4" />
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview;