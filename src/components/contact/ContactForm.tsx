import { useState } from "react"
import { CheckCircle, Loader2 } from "lucide-react"
import { send } from "@emailjs/browser"

const titles = [
  { value: "", title: "Wybierz opcję", disabled: true },
  { value: "first-class", title: "Rezerwacja pierwszych zajęć", disabled: false },
  { value: "private-session", title: "Sesje indywidualne", disabled: false },
  { value: "membership", title: "Karnety", disabled: false },
  { value: "studio-tour", title: "Zwiedzanie studia", disabled: false },
  { value: "corporate", title: "Wellness korporacyjny", disabled: false },
  { value: "other", title: "Inne pytanie", disabled: false },
];

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  })

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const serviceID = "service_hgyss43";
    const templateID = "template_40qfuk2";
    const publicKey = "z-kLEAfdpZkoq6_Ic";

    const templateParams = {
      title: titles.find((titleEl) => titleEl.value === formData.title)?.title || "Kontakt",
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      time: new Date().toLocaleString('pl-PL'),
      message: formData.message,
    };

    send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          title: "",
          message: "",
        });

        setIsSubmitted(true)
      })
      .catch((error: Error) => {
        console.error("Email sending failed:", error);
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const inputClasses = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:cursor-not-allowed disabled:opacity-50"
  const labelClasses = "block text-sm font-medium text-foreground mb-1.5"

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 sm:p-10 py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Wiadomość Wysłana!
          </h3>
          <p className="text-muted-foreground max-w-sm mx-auto mb-8">
            Dziękujemy za kontakt. Odpowiemy tak szybko, jak to możliwe.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                title: "",
                message: "",
              });
            }}
            className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2"
          >
            Wyślij Kolejną Wiadomość
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 sm:p-8 border-b border-border/50">
        <h3 className="text-2xl font-semibold leading-none tracking-tight text-foreground mb-2">
          Wyślij Nam Wiadomość
        </h3>
        <p className="text-sm text-muted-foreground">
          Wypełnij poniższy formularz, a wkrótce się z Tobą skontaktujemy.
        </p>
      </div>

      <div className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">

          <div className=" gap-4">
            <div>
              <label htmlFor="fullName" className={labelClasses}>Imię i nazwisko</label>
              <input
                id="fullName"
                type="text"
                placeholder="Wpisz swoje imię i nazwisko"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                required
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>Email</label>
            <input
              id="email"
              type="email"
              placeholder="twój@email.pl"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClasses}>Telefon (opcjonalnie)</label>
            <input
              id="phone"
              type="tel"
              placeholder="+48 123 456 789"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="title" className={labelClasses}>Czym jesteś zainteresowany/a?</label>
            <div className="relative">
              <select
                id="title"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                required
                className={`${inputClasses} appearance-none pr-10`}
              >
                {titles.map((titleEl) => (
                  <option key={titleEl.value} value={titleEl.value} disabled={titleEl.disabled}>{titleEl.title}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>Wiadomość</label>
            <textarea
              id="message"
              placeholder="Powiedz nam więcej o tym, czego szukasz..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={5}
              required
              className={`${inputClasses} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Wysyłanie...
              </>
            ) : (
              "Wyślij Wiadomość"
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm;