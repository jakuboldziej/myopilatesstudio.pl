import { Heart, Users, Target, Sparkles } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Indywidualne Podejście",
    description: "Widzimy każdą osobę, nie tylko ciało. Nasi instruktorzy poświęcają czas na zrozumienie Twoich unikalnych potrzeb, celów i ograniczeń, aby stworzyć praktykę, która naprawde Ci słuzy.",
  },
  {
    icon: Users,
    title: "Inkluzywna Społeczność",
    description: "Pilates jest dla kazdego. Witamy praktyków w kazdym wieku, na każdym poziomie sprawnoćci i z kazdego środowiska. Nasze studio to strefa wolna od oceniania, gdzie każdy jest mile widziany.",
  },
  {
    icon: Target,
    title: "Jakość Instruktażu",
    description: "Nasi instruktorzy posiadają zaawansowane certyfikaty i regularnie kontynuują edukacje. Wnosimy ekspertyzę, pasję i precyzje do każdych zajęć, które prowadzimy.",
  },
  {
    icon: Sparkles,
    title: "Holistyczny Wellness",
    description: "Wierzymy, że prawdziwy wellness wykracza poza sprawność fizyczną. Nasza praktyka integruje prace z oddechem, uważność i swiadomość ciała dla pełnego dobrostanu.",
  },
]

function StudioValues() {
  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Nasza Filozofia
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Te podstawowe wartości kierują wszystkim, co robimy w Myo Pilates Studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {values.map((value) => (
            <div key={value.title} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default StudioValues