import { useState, useEffect } from "react"
import InstagramImg from "./assets/icons/instagram.png"
import FacebookImg from "./assets/icons/facebook.png"

const TARGET_DATE = new Date("2026-04-07T16:00:00+02:00").getTime();

const calculateTimeLeft = () => {
  const difference = TARGET_DATE - new Date().getTime();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 100);

    return () => clearInterval(timerId);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const isOpened =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <img
        className="w-3/4 sm:w-2/3 max-w-122.5 h-auto"
        src="logo.svg"
        alt="Myo Pilates Studio Logo"
        width="800"
        height="800"
      />

      <div className="flex flex-col items-center gap-4 sm:gap-6 my-4">
        <div className="text-center flex flex-col items-center">
          {isOpened ? (
            <span className="text-5xl sm:text-7xl text-gray-800 mt-2">Zapraszamy do studia!</span>
          ) : (
            <>
              <span className="text-5xl sm:text-7xl">Otwarcie za</span>
              <span className="text-4xl sm:text-6xl font-mono mt-2 text-gray-800">
                {timeLeft.days}d {formatNumber(timeLeft.hours)}h {formatNumber(timeLeft.minutes)}m {formatNumber(timeLeft.seconds)}s
              </span>
            </>
          )}
        </div>

        <a
          className="text-center w-fit text-6xl sm:text-8xl underline underline-offset-10 hover:opacity-70 transition-colors"
          href="https://app.fitssey.com/myopilatesstudio/frontoffice#filters:2026-04-13,0"
          target="_blank"
          rel="noreferrer"
        >
          Grafik
        </a>
      </div>

      <div className="pt-12 flex flex-row gap-2">
        <a className="transition-opacity hover:opacity-75" target="_blank" rel="noreferrer" href="https://www.instagram.com/myopilatesstudio/">
          <img className="w-14 h-14" src={InstagramImg} alt="Instagram" />
        </a>
        <a className="transition-opacity hover:opacity-75" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61583752617489">
          <img className="w-14 h-14" src={FacebookImg} alt="Facebook" />
        </a>
      </div>
    </div>
  )
}

export default App