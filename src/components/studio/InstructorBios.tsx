import CustomImage from "@/components/custom/CustomImage";

const instructors = [
  {
    name: "Oliwia Kandefer",
    role: "Założycielka i Główna Instruktorka",
    image: "/images/instructors/oliwia.png",
    bio: (
      <div>
        <p>
          Moja przygoda z ruchem zaczęła się od tańca klasycznego i współczesnego. To właśnie taniec ukształtował moją wrażliwość, a studia choreograficzne na Akademii Muzycznej w Łodzi stały się małym przełomem, tam poznałam metodę Pilates, która szybko przerodziła się w pasję.
        </p>
        🩵<br />
        <p>
          W pilatesie najbardziej cenię dbałość o detal, budowanie świadomej siły oraz integrację ciała z oddechem. Wierzę, że nawet najmniejsza modyfikacja w ćwiczeniu może stać się nowym wyzwaniem, prowadzącym do głębszego zrozumienia własnych możliwości.
        </p>
        🩵<br />
        <p>
          Wierzę, że pilates jest dla każdego. Dzięki indywidualnemu podejściu pomogę Ci odkryć potencjał Twojego ciała, niezależnie od Twojego stopnia zaawansowania.
        </p>
      </div>
    ),
    certifications: ["BASI Pilates", "Balanced Body", "Pre/Postnatal"],
    specialties: ["Rehabilitacja", "Kondycja taneczna", "Siła core"],
  }
];

function InstructorBios() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Nasz Zespół
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Poznaj Swoich Instruktorów
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nasi certyfikowani instruktorzy wnoszą pasję, ekspertyzę i indywidualne
            podejście do każdych zajęć, które prowadzą.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 max-w-6xl">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="flex flex-col md:flex-row bg-card border border-border rounded-2xl max-w-[640px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CustomImage
                src={instructor.image}
                alt={instructor.name}
                containerClassName="md:w-2/5 aspect-square md:aspect-auto relative shrink-0"
                className="object-cover object-top"
              />

              <div className="flex flex-col p-6 md:p-8 md:w-3/5">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {instructor.name}
                  </h3>
                  <p className="text-accent font-medium text-sm mt-1">
                    {instructor.role}
                  </p>
                </div>

                <div className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {instructor.bio}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default InstructorBios;