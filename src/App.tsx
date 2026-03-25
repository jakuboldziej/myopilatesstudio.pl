import InstagramImg from "./assets/icons/instagram.png"
import FacebookImg from "./assets/icons/facebook.png"

function App() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <img
        className="w-3/4 sm:w-2/3 max-w-137.5 h-auto"
        src="logo.svg"
        alt="Myo Pilates Studio Logo"
        width="800"
        height="800"
      />

      <div className="flex flex-col items-center gap-2">
        <span className="text-center text-7xl sm:text-9xl">Wkrótce otwarcie!</span>
        <a
          className="text-center w-fit text-7xl sm:text-9xl underline underline-offset-30 hover:opacity-70 transition-colors"
          href="https://app.fitssey.com/myopilatesstudio/frontoffice#filters:2026-04-13,0" target="_blank"
        >
          Grafik
        </a>
      </div>

      <div className="pt-12 flex flex-row gap-2">
        <a className="transition-opacity hover:opacity-75" target="_blank" href="https://www.instagram.com/myopilatesstudio/">
          <img className="w-14 h-14" src={InstagramImg} />
        </a>
        <a className="transition-opacity hover:opacity-75" target="_blank" href="https://www.facebook.com/profile.php?id=61583752617489">
          <img className="w-14 h-14" src={FacebookImg} />
        </a>
      </div>
    </div>
  )
}

export default App
