import React from 'react'
import { WeatherPreview } from './WeatherPreview'

export const WeatherList = ({ weathers }) => {
    return (
        <section className="weather-list">
            <div>WeatherList</div>
            {weathers.map(weather => <WeatherPreview weather={weather} key={weather._id} />)}
        </section>

    )
}
