import './weather-panel.scss'

export default function WeatherPanel ({loading, weatherData, zipCode, zipCodeChange, getWeather}) {
    const onChange = (e) => {
        e.preventDefault()
        zipCodeChange(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        getWeather()
    }

    const icon = () => {
        if (!weatherData?.iconURL) {return}

        return <img className="weather-icon" crossOrigin="https://openweathermap.org/" src={weatherData?.iconURL} alt={weatherData?.description} />
    }

    return (
        <div className="weather-panel">
            <span className="d-flex justify-content-center align-items-center">
                <h2 className="text-center m-0 my-2">{weatherData?.cityName || '...'}</h2>
                {icon()}
            </span>
            <h4 className="text-center text-capitalize">{weatherData?.description || '...'}</h4>
            <h1 className="text-center ml-4 current-temp">{Math.round(weatherData?.temp || 0)}˚</h1>
            <span className="d-flex mt-3 justify-content-center">
                <h3 className="mr-3">{Math.round(weatherData?.tempMin || 0)} ˚</h3>
                <h3 className="ml-3">{Math.round(weatherData?.tempMax || 0)} ˚</h3>
            </span>
            <hr className="my-5" />
            <form onSubmit={onSubmit} className="form-group">
                <label htmlFor="zipCode">Zip Code:</label>
                <span className="d-flex">
                    <input className="form-control input-zip-code mr-2" name="zipCode" value={zipCode} onChange={onChange} />
                    <button className="form-control btn btn-zip-code" type="submit">Update</button>
                </span>
            </form>
        </div>
    )
}