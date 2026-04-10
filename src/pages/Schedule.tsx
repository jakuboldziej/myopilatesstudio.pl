import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

declare global {
  interface Window {
    lb: (action: string) => void;
  }
}

function Schedule() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.lb) {
      window.lb('mounted');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Myo Pilates Studio | Grafik</title>
        <meta name="description" content="Grafik zajęć w Myo Pilates Studio." />
        <link rel="canonical" href="https://myopilatesstudio.pl/grafik" />
      </Helmet>

      <lb-schedule-widget></lb-schedule-widget>
    </>
  );
}

export default Schedule;