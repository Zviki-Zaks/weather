import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UserWeather } from "../cmps/UserWeather"
import { WeatherDetails } from "../cmps/WeatherDetails"
import { loadCityWeather } from "../store/actions/weatherActions"


export const Home = (props) => {
    
    const dispatch = useDispatch()

    const { weather } = useSelector(state => state.weatherModule)
    const [isDetails, setIsDetails] = useState(false)

    useEffect(() => {
        dispatch(loadCityWeather('Jerusalem'))
    }, [])

    const onDetails = () => { 
        console.log('on more')
        setIsDetails(preIsDetails => !preIsDetails)
     }

    if (!weather) return <div>Loading...</div>
    return (
        <section>
        { !isDetails?
            <UserWeather weather={weather} onMore={onDetails} />:
            <WeatherDetails weather={weather} onLess={onDetails}/>
        }
        </section>
    )
}

