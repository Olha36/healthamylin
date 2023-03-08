import type { ChangeEvent } from 'react'
import React, { useState } from 'react'
import location from './location.png'
import './index.css'

export type LogoProps = {
  alt?: string
  src: string
}

function Location(props: LogoProps) {
  const { alt, src } = props
  return <img alt={alt} src={src} className="location" />
}

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
    <div className="city">
      <Location src={location} alt="location" />
      <select id="citySelect" onChange={handleCityChange}>
        <option value="">Виберіть своє місто:</option>
        {cityOptions.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {selectedCity === 'Other' && (
        <div className="other-city">
          <label htmlFor="otherCity">Enter your city:</label>
          <input type="text" id="otherCity" onChange={handleOtherCityChange} value={otherCity} />
        </div>
      )}
    </div>
  )
}

export default UkrainianCities
