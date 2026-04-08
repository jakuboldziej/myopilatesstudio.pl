export const businessData = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Myo Pilates Studio",
  telephone: "+48 665 311 097",
  email: "myopilatesstudio@gmail.com",
  url: "https://myopilatesstudio.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Tadeusza Kościuszki 14",
    addressLocality: "Oborniki Śląskie",
    postalCode: "55-120",
    addressCountry: "PL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
}