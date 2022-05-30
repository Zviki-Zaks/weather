import React from 'react'
import { WeatherIcon } from './WeatherIcon'

export const UserWeather = ({ weather, onMore }) => {
    let { name, dt } = weather
    const { temp } = weather.main
    const { main, icon } = weather.weather[0]
    let unit = 'C'
    dt = new Date(dt * 1000)
    return (
        <section className="user-weather">
            <section className="details">
                <h2>{name}</h2>
                <div className="time">
                    <h3 className="day-date">
                        <span className="day">{dt.toLocaleString('he-LI', { weekday: 'long' })}, </span>
                        <span className="date">{dt.toLocaleString('he-LI', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </h3>
                    {/* <h3>{dt.toLocaleString('he-LI', { year: 'numeric', month: 'long', day: 'numeric' })} </h3> */}
                    <h3 className="time">{dt.toLocaleTimeString('he-LI', { hour: '2-digit', minute: '2-digit' })} </h3>
                </div>
            </section>
            <section className="info flex">
                <p className="temp">{temp} <sup>o</sup>{unit}</p>
                <p className="description">{main} </p>
                <WeatherIcon icon={icon} />
                <button onClick={onMore}>More</button>
            </section>

        </section>
    )
}
