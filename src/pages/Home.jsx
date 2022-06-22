import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from "../cmps/Modal"
import { UserWeather } from "../cmps/UserWeather"
import { WeatherDetails } from "../cmps/WeatherDetails"
import { logGuest } from "../store/actions/userActions"
import { loadCityWeather, setIsModal } from "../store/actions/weatherActions"


export const Home = (props) => {

    const dispatch = useDispatch()

    const { weather } = useSelector(state => state.weatherModule)
    const [isDetails, setIsDetails] = useState(false)
    const [modalTxt, setModalTxt] = useState('')
    const onClick = () => {
        console.log('click')
    }
    const { modal } = useSelector(state => state.weatherModule)
    const toggleModal = (type) => {
        const txt = type === 'feel' ? 'How do you feel?' : ''
        setModalTxt(txt)
        dispatch(setIsModal())
    }
    useEffect(() => {
        dispatch(logGuest())
        dispatch(loadCityWeather('Jerusalem'))
    }, [])

    const onDetails = () => {
        console.log('on more')
        setIsDetails(preIsDetails => !preIsDetails)
    }

    if (!weather) return <div>Loading...</div>
    return (
        <section>
            {!isDetails ?
                <UserWeather weather={weather} onMore={onDetails} /> :
                <WeatherDetails weather={weather} onLess={onDetails} />
            }
            {modal.isModal && <Modal type={'feel'} funcs={{ toggleModal, onClick }} text={modal.txt} />}

        </section>
    )
}

