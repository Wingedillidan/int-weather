export default function WeatherPanel ({loading, weatherData, zipCode, zipCodeChange, getWeather}) {
    const onChange = (e) => {
        e.preventDefault()
        zipCodeChange(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        getWeather()
    }

    return (
        <div>
            <h2 className="text-center">{weatherData?.cityName || '...'}</h2>
            <h3 className="text-center text-capitalize">{weatherData?.description || '...'}</h3>
            <h1 className="text-center mt-5">{Math.round(weatherData?.temp || 0)} ˚</h1>
            <span className="d-flex mt-2 justify-content-center">
                <h4 className="mr-4">{Math.round(weatherData?.tempMin || 0)} ˚</h4>
                <h4 className="d-inline">{Math.round(weatherData?.tempMax || 0)} ˚</h4>
            </span>
            <hr className="my-5" />
            <form onSubmit={onSubmit} class="form-group">
                <label htmlFor="zipCode">Zip Code</label>
                <span className="d-flex">
                    <input className="form-control mr-2" name="zipCode" value={zipCode} onChange={onChange} />
                    <button className="form-control btn btn-primary" type="submit">Update</button>
                </span>
            </form>
        </div>
    )
}