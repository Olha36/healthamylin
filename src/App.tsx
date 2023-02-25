import React from 'react'
import './App.css'
import ResponsiveAppBar from './components/HeaderApp'
import UkrainianCities from './components/CityApp/index'

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <UkrainianCities />
    </div>
  )
}

export default App
