import InstructorBios from "@/components/studio/InstructorBios";
import StudioGallery from "@/components/studio/StudioGallery";
import StudioStory from "@/components/studio/StudioStory";
import StudioValues from "@/components/studio/StudioValues";
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Myo Pilates Studio | Studio</title>
  <meta name="description" content="Poznaj nasze studio." />
  <link rel="canonical" href="https://myopilatesstudio.pl/studio" />
</Helmet>

function Studio() {
  return (
    <main className="flex-1">
      <section className="bg-secondary/20 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Studio
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
              Nasza Historia i Misja
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              W Myo Pilates Studio wierzymy w transformującą moc świadomego
              ruchu. Nasz oddany zespół jest zaangażowany w pomaganie Ci
              odkrywać siłę i równowagę poprzez praktykę Pilatesu.
            </p>
          </div>
        </div>
      </section>

      <StudioStory />
      <StudioValues />
      <InstructorBios />
      <StudioGallery />
    </main>
  )
}

export default Studio;