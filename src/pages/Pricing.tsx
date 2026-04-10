import { Helmet } from "react-helmet-async";

function Pricing() {
  return (
    <>
      <Helmet>
        <title>Myo Pilates Studio | Cennik</title>
        <meta name="description" content="Cennik zajęć w Myo Pilates Studio." />
        <link rel="canonical" href="https://myopilatesstudio.pl/cennik" />
      </Helmet>

      <div className="w-full py-12 px-2 lg:px-8 max-w-7xl mx-auto">
        <div
          className="w-full overflow-y-auto"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <iframe
            src="https://app.fitssey.com/myopilatesstudio/frontoffice/pricing/classes?embed=true"
            className="w-full min-h-[5250px] lg:min-h-[2450px] overflow-hidden border-0 block"
            title="Cennik Myo Pilates Studio"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
}

export default Pricing;