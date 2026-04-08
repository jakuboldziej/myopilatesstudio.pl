import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import LocationMap from "@/components/contact/LocationMap"
import { businessData } from "@/lib/businessData";
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Myo Pilates Studio | Kontakt</title>
  <meta name="description" content="Skontaktuj się z Myo Pilates Studio. Zadzwoń lub napisz, aby umówić się na zajęcia." />
  <link rel="canonical" href="https://myopilatesstudio.pl/kontakt" />
</Helmet>

function Contact() {
  return (
    <main className="flex-1">
      <section className="bg-secondary/20 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Kontakt
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
              Skontaktuj Się z Nami
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Masz pytania dotyczące naszych zajęć lub jesteś gotowy rozpocząć
              swoją przygodę z Pilatesem? Chętnie od Ciebie usłyszymy. Napisz
              do nas, a odpowiemy tak szybko, jak to możliwe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <LocationMap />

      <div className="flex justify-center items-center px-6 lg:px-8">
        <div className="my-12 w-fit text-center p-8 bg-card rounded-lg border border-border">
          <h3 className="font-semibold text-foreground mb-2">
            Nadal masz pytania?
          </h3>
          <p className="text-muted-foreground mb-4">
            Jesteśmy tu, aby pomóc. Skontaktuj się z nami, a odpowiemy tak szybko, jak to możliwe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`mailto:${businessData.email}`}
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {businessData.email}
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a
              href={`tel:${businessData.telephone}`}
              className="text-accent hover:text-accent/80 font-medium transition-colors"
            >
              {businessData.telephone}
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact