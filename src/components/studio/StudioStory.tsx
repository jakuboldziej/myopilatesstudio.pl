import CustomImage from "@/components/custom/CustomImage";

function StudioStory() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Historia Myo
            </h2>
            <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Zalozone w 2026 roku przez Anne Kowalska, Myo Pilates Studio
                zaczelo sie jako marzenie o stworzeniu miejsca, gdzie ludzie moga
                odkryc zmieniajace zycie korzysci Pilatesu w przyjaznym, wspierajacym
                srodowisku.
              </p>
              <p>
                Nazwa &quot;Myo&quot; pochodzi od łacińskiego słowa oznaczajacego niezapominajkę,
                odzwierciedlajac nasze zaangazowanie w budowanie sily od wewnatrz.
                Ale wiecej niz fizyczna sila, wierzymy w kultywowanie mentalnej
                odpornosci, swiadomosci ciala i glebokiego polaczenia miedzy
                umyslem a ruchem.
              </p>
              <p>
                To, co zaczelo sie jako male studio z zaledwie kilkoma reformerami,
                rozroslo sie w prosperujaca spolecznosc praktykow zjednoczonych
                miloscido Pilatesu. Jednak pozostajemy wierni naszej podstawowej
                zasadzie: kazda osoba, ktora przekracza nasze progi, otrzymuje
                spersonalizowana uwage i szczera troske.
              </p>
              <p>
                Dzis nasze studio nadal jest oaza dla tych, ktorzy szukaja
                rownowagi w swoim zaganianym zyciu. Czy dochodzisz do siebie po
                kontuzji, trenujesz do osiagow sportowych, czy po prostu chcesz
                czuc sie lepiej w swoim ciele - Myo jest tu, aby wspierac Twoja
                podroz.
              </p>
            </div>
          </div>

          <div className="relative">
            <CustomImage
              src="/images/interior-2.jpg"
              alt="Wnętrze Myo Pilates Studio"
              containerClassName="rounded-lg relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/30 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioStory;