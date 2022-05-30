import { weatherService } from "../../services/weatherService"

export function loadWeathers() {
    return async (dispatch) => {
        try {
            const weathers = await weatherService.query()
            dispatch({ type: 'SET_WEATHERs', weathers })
        } catch (error) {
            console.log('error', error)
            // throw new Error()
        }
    }
}

export function loadCityWeather(city) {
    return async (dispatch) => {
        try {
            const weather = await weatherService.getByCity(city)
            dispatch({ type: 'SET_WEATHER', weather })
        } catch (error) {
            console.log('error', error)
            // throw new Error()
        }
    }
}

export function saveWeather(newWeather) {
    return async (dispatch) => {
        try {
            const weather = await weatherService.save(newWeather)
            newWeather._id ? dispatch({ type: 'UPDATE_WEATHER', weather }) :
                dispatch({ type: 'ADD_WEATHER', weather })
        } catch (error) {
            console.log('error', error)
            // throw new Error()
        }
    }
}

export function removeWeather(weatherId) {
    return async (dispatch) => {
        try {
            await weatherService.remove(weatherId)
            dispatch({ type: 'REMOVE_WEATHER', weatherId })
        } catch (error) {
            console.log('error', error)
            // throw new Error()
        }
    }
}

export function setFilterBy(filterBy) {
    return async (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}

export function setIsPopup() {
    return async (dispatch) => {
        dispatch({ type: 'TOGGLE_IS_POPUP' })
    }
}
