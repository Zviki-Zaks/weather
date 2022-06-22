import axios from "axios";
// import { storageService } from "./asyncService";

// const options = {
// method: 'GET',
const url = 'https://community-open-weather-map.p.rapidapi.com/weather'
//   params: {
//     q: '',
const lat = '0'
const lon = '0'
// callback: 'test',
//     id: '2172797',
//     lang: 'null',
const units = 'metric'
//     mode: 'xml'
//   },
const headers = {
    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
}
// };
const WEATHER_KEY = 'weather'

function query() {

}

async function getByCity(city) {
    let cityWeather = await _load(city)
    console.log('cityWeather', cityWeather)
    if (!cityWeather) {
        console.log('api')
        try {
            const res = await axios({ url, headers, params: { q: city, units } })
            console.log(res.data)
            await _save(city, res.data)
            cityWeather = res.data
        } catch (error) {
            console.log('error', error)
            throw new Error('Cannot get weather now')
        }
    }
    return cityWeather[0] || cityWeather
}

function getByLatLon(latLon) {

}


export const weatherService = {
    query,
    getByCity,
    getByLatLon,

}

function _save(city, item) {
    return new Promise((resolve, reject) => {
        localStorage.setItem(WEATHER_KEY + city, JSON.stringify(item))
        resolve(item)
    })
}

function _load(city) {
    return new Promise((resolve, reject) => {
        const item = JSON.parse(localStorage.getItem(WEATHER_KEY + city) || 'null')
        resolve(item)
    })
}