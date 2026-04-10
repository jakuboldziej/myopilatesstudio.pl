function LocationMap() {
  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Znajdź Nas
          </h2>
        </div>

        <div className="relative rounded-xl overflow-hidden bg-muted min-h-[350px] md:min-h-0 md:aspect-[21/9] w-full shadow-sm border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d744.5932975053971!2d16.910522!3d51.3032469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f8db1f09504ad%3A0x4ead11e04485032e!2sMyo%20Pilates%20Studio!5e1!3m2!1sen!2spl!4v1775637470771!5m2!1sen!2spl"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa dojazdu do Myo Pilates Studio"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default LocationMap;