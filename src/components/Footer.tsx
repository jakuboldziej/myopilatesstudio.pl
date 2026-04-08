import { MapPin, Phone, Mail, Map } from "lucide-react"
import { Link } from "react-router-dom"
import Facebook from "@/assets/icons/facebook.png"
import Instagram from "@/assets/icons/instagram.png"
import { routerItems } from "@/lib/variables";
import { businessData } from "@/lib/businessData";

const menuItems = routerItems;

const navigation = {
  classes: [
    { name: "🩵 Barre 🩵 mata", href: "/zajecia/barremata" },
    { name: "🩵 Reformer+", href: "/zajecia/reformer" },
    { name: "🩵 Zajęcia indywidualne", href: "/zajecia/indywidualne" },
  ],
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Myo Pilates Studio"
                width={120}
                height={120}
                className="h-28 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Znajdź balans między ciałem a umysłem. W Myo Studio każdy ruch przybliża Cię do lepszej wersji siebie - zyskaj siłę, świadomość i wewnętrzny spokój.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/myopilatesstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Obserwuj nas na Instagram"
              >
                <img src={Instagram} alt="Instagram" className="h-10 w-10" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61583752617489"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Obserwuj nas na Facebook"
              >
                <img src={Facebook} alt="Facebook" className="h-10 w-10" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Nawigacja
            </h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Zajęcia
            </h3>
            <ul className="space-y-3">
              {navigation.classes.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-secondary" />
                <a
                  href="https://maps.app.goo.gl/Qa4o6RX2xzcrdazY6"
                  target="_blank"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {businessData.address.streetAddress}<br />
                  {businessData.address.postalCode} {businessData.address.addressLocality}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a
                  href={`tel:${businessData.telephone}`}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {businessData.telephone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a
                  href={`mailto:${businessData.email}`}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {businessData.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Map className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a
                  href="https://g.page/r/CS4DhUTgEa1OEAE/review"
                  target="_blank"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Zostaw opinię
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-xs text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Myo Pilates Studio. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;