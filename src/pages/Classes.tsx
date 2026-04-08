import ClassTypes from "@/components/classes/ClassTypes";
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Myo Pilates Studio | Zajęcia</title>
  <meta name="description" content="Znajdź idealne zajęcia dla siebie." />
  <link rel="canonical" href="https://myopilatesstudio.pl/zajecia" />
</Helmet>

function Classes() {
  return (
    <main className="flex-1">
      <section className="bg-secondary/20 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Nasze Zajęcia
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
              Znajdź Idealne Zajęcia
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Od łagodnych ćwiczen na macie po wymagające sesje na reformerze,
              oferujemy zajęcia dla każdego poziomu i celu. Przeglądaj nasz
              grafik i zarezerwuj swoje miejsce już dziś.
            </p>
          </div>
        </div>
      </section>

      <ClassTypes />
    </main>
  )
}

export default Classes;