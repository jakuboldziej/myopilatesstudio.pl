import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="h-dvh">
      <Navbar />

      <lb-schedule-widget
        category="0047C679-E9BF-42D4-A9DA-14183946D971"
        class-service="0944DE42-9D28-4447-8D3D-B4A9DFC7E203"
        member="F45B68AA-D7F4-4B4D-8255-48C2D25F7C5B"
        location="36996B54-6B91-43B6-985B-39D33FD6B602"
      ></lb-schedule-widget>
    </div>
  )
}

export default App
