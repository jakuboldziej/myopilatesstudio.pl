import Instagram from "./assets/icons/instagram.png"

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img className="w-3/4 sm:w-2/3 max-w-180" src="logo.svg" />


      <span className="text-center text-7xl sm:text-9xl">Wkrótce otwarcie!</span>

      <div className="pt-6">
        <a className="transition-opacity hover:opacity-75" target="_blank" href="https://www.instagram.com/myopilatesstudio/">
          <img className="w-14" src={Instagram} />
        </a>
      </div>
    </div>
  )
}

export default App
