import type { ChangeEvent } from 'react'
import React, { useState } from 'react'

function UkrainianCities() {
  const [selectedCity, setSelectedCity] = useState('')
  const [otherCity, setOtherCity] = useState('')

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
  }

  const handleOtherCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOtherCity(event.target.value)
  }

  const cityOptions = ['Київ', 'Житомир', 'Львів', 'Одеса', 'Вінниця', 'Луцьк', 'Рівне', 'Other']

  return (
    <div>
      <label htmlFor="citySelect">Виберіть своє місто:</label>
      <select id="citySelect" onChange={handleCityChange}>
        <option value="">Виберіть своє місто:</option>
        {cityOptions.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {selectedCity === 'Other' && (
        <div>
          <label htmlFor="otherCity">Enter your city:</label>
          <input type="text" id="otherCity" onChange={handleOtherCityChange} value={otherCity} />
        </div>
      )}
      {selectedCity && selectedCity !== 'Other' && <p>You selected {selectedCity}.</p>}
    </div>
  )
}

export default UkrainianCities
