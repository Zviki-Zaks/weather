import { WeatherList } from '../cmps/WeatherList'

export const Forecast = () => {
    const weathers = [
        { _id: 1, name: 'aaa' },
        { _id: 2, name: 'bbb' },
        { _id: 3, name: 'ccc' },
    ]
    return (
        <section className="forecast">
            <div>Forecast</div>
            {weathers && <WeatherList weathers={weathers} />}
        </section>
    )
}
