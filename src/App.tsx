import InstagramImg from "./assets/icons/instagram.png"
import FacebookImg from "./assets/icons/facebook.png"

function App() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <img
        className="w-3/4 sm:w-2/3 max-w-180 h-auto"
        src="logo.svg"
        alt="Myo Pilates Studio Logo"
        width="800"
        height="800"
      />

      <span className="text-center text-7xl sm:text-9xl">Wkrótce otwarcie!</span>

      <div className="pt-6 flex flex-row gap-2">
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
