import './App.css';

import Listings from './components/Listings';
import React from 'react';
import Selected from './components/Selected';
import { SelectedContext } from './context/SelectedContext';

function App() {
  const [selected, setSelected] = React.useState({ id: null, name: null });

  return (
    <>
      <div className="flex justify-evenly items-center h-screen">
        <SelectedContext.Provider value={{ selected, setSelected }}>
          <Listings />
          <Selected />
        </SelectedContext.Provider>
      </div>
    </>
  )
}

export default App
