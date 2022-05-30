import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setIsPopup } from '../store/actions/weatherActions'
import { Popup } from './Popup'
import { WeatherIcon } from './WeatherIcon'

export const WeatherDetails = ({ weather, onLess }) => {
    const { name, clouds } = weather
    let { dt } = weather
    const { temp, humidity, feels_like } = weather.main
    const { main, icon, description } = weather.weather[0]
    dt = new Date(dt * 1000)
    let unit = 'C'

    const [iFeel, setIFeel] = useState(null)

    const onFeel = () => {
        // togglePopup()
        setIFeel(prompt('?'))
    }

    const dispatch = useDispatch()
    const togglePopup = () => {
        dispatch(setIsPopup())
    }


    return (
        <section className="weather-details">
            <section className="details">
                <h2>{name}</h2>
                <div className="time">
                    <h3>{dt.toLocaleString('he-LI', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} </h3>
                    <h3>{dt.toLocaleTimeString('he-LI', { hour: '2-digit', minute: '2-digit' })} </h3>
                </div>
            </section>
            <section className="info">
                <p className="temp line">Temperature: {temp} <sup>o</sup>{unit}</p>
                <p className="feels line" onClick={onFeel}>Feels like: {feels_like} <sup>o</sup>{unit} {iFeel && <span> I feel like: {iFeel} <sup>o</sup>{unit}</span>}</p>
                <p className="description line">{description} <WeatherIcon icon={icon} /></p>
                <p className="humidity line">Humidity: {humidity}% </p>


                <button onClick={onLess}>Less</button>
            </section>
            {/* {isPopup && <Popup type={'prompt'} funcs={{ togglePopup, onClick }} />} */}
        </section>
    )
}
