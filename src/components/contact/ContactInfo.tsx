import { MapPin, Phone, Mail } from "lucide-react"
import Facebook from "@/assets/icons/facebook.png"
import Instagram from "@/assets/icons/instagram.png"
import { businessData } from "@/lib/businessData"
import CustomImage from "@/components/custom/CustomImage";

const contactDetails = [
  {
    icon: MapPin,
    title: "Odwiedź Nas",
    details: [businessData.address.streetAddress, `${businessData.address.postalCode} ${businessData.address.addressLocality}`],
    action: {
      label: "Sprawdź Dojazd",
      href: "https://www.google.com/maps/dir//Myo+Pilates+Studio,+Tadeusza+Ko%C5%9Bciuszki+14,+55-120+Oborniki+%C5%9Al%C4%85skie/@51.3031617,16.9056968,684m/data=!3m1!1e3!4m17!1m7!3m6!1s0x470f8db1f09504ad:0x4ead11e04485032e!2sMyo+Pilates+Studio!8m2!3d51.3031584!4d16.9105677!16s%2Fg%2F11z2d1sb2q!4m8!1m0!1m5!1m1!1s0x470f8db1f09504ad:0x4ead11e04485032e!2m2!1d16.9105677!2d51.3031584!3e0?entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D",
    },
  },
  {
    icon: Phone,
    title: "Zadzwoń",
    details: [businessData.telephone],
    action: {
      label: "Zadzwoń Teraz",
      href: `tel:${businessData.telephone}`,
    },
  },
  {
    icon: Mail,
    title: "Napisz do Nas",
    details: [businessData.email],
    action: {
      label: "Wyślij Email",
      href: `mailto:${businessData.email}`,
    },
  },
]

function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        {contactDetails.map((item) => (
          <div key={item.title} className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <div className="mt-1 text-muted-foreground text-sm space-y-1">
                    {item.details.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>
                  <a
                    href={item.action.href}
                    target={item.action.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-block mt-3 text-sm text-accent hover:text-accent/80 font-medium transition-colors"
                  >
                    {item.action.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <h3 className="font-semibold text-foreground mb-4">Obserwuj Nas</h3>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/myopilatesstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <CustomImage
                src={Instagram}
                alt="Instagram"
                containerClassName="h-5 w-5 flex-shrink-0"
                className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-sm font-medium">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61583752617489"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <CustomImage
                src={Facebook}
                alt="Facebook"
                containerClassName="h-5 w-5 flex-shrink-0"
                className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-sm font-medium">Facebook</span>
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Bądź na bieżąco z aktualnościami o zajęciach i wydarzeniami społeczności.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo;