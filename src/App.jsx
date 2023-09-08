import './App.css'

import Listings from './components/Listings'

function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Listings />
        <div className="border border-solid border-gray-700 w-2/4 text-center">Bye</div>
      </div>
    </>
  )
}

export default App
