import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Myo Pilates Studio | Grafik</title>
  <meta name="description" content="Grafik zajęć w Myo Pilates Studio." />
  <link rel="canonical" href="https://myopilatesstudio.pl/grafik" />
</Helmet>

const widgetWrapper = document.createElement("div");
widgetWrapper.className = "w-full";
const widgetTag = document.createElement("lb-schedule-widget");
widgetWrapper.appendChild(widgetTag);

let isScriptInjected = false;

function Schedule() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = containerRef.current;

    if (currentContainer) {
      currentContainer.appendChild(widgetWrapper);
    }

    if (!isScriptInjected) {
      isScriptInjected = true;

      // @ts-expect-error Fitssey
      window.FitsseyWidget = "lb";
      // @ts-expect-error Fitssey
      window.lb = window.lb || function () {
        // @ts-expect-error Fitssey
        // eslint-disable-next-line prefer-rest-params
        (window.lb.q = window.lb.q || []).push(arguments);
      };
      // @ts-expect-error Fitssey
      window.lb.l = 1 * new Date();

      // @ts-expect-error Fitssey
      window.lb("init", "myopilatesstudio");

      const script = document.createElement("script");
      script.src = "https://app.fitssey.com/assets/js/lb.widget.prod.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      if (
        currentContainer &&
        widgetWrapper.parentNode === currentContainer
      ) {
        currentContainer.removeChild(widgetWrapper);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[600px] flex justify-center"></div>
  );
}

export default Schedule;