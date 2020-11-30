import React from 'react'

import OpenWeatherAPI from '../api/open_weather'
import WeatherPanel from './components/weather-panel'

export default class WeatherPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            openWeatherAPI: new OpenWeatherAPI('709847967f5e54b97308c1b2cae4dee5'),
            weatherData: {},
            loading: false,
            error: '',
            zipCode: 10001
        }

        this.setZipCode = this.setZipCode.bind(this)
        this.getWeather = this.getWeather.bind(this)
    }

    componentDidMount() {
        this.getWeather()
    }

    setZipCode(zipCode) {
        this.setState({zipCode})
    }

    getWeather() {
        this.setState({loading: true, error: ''}, () => {
            this.state.openWeatherAPI.getCurrentWeatherByZip(this.state.zipCode, 'us')
                .then((weatherData) => this.setState({weatherData}))
                .catch((error) => this.setState({error: error?.response?.data?.message || 'Something went wrong.', weatherData: {}}))
                .then(() => this.setState({loading: false}))
        })
    }

    render() {
        const {loading, weatherData, zipCode, error} = this.state

        return (
            <div className="container mt-5">
                <WeatherPanel
                    weatherData={weatherData}
                    loading={loading}
                    zipCodeChange={this.setZipCode}
                    getWeather={this.getWeather}
                    zipCode={zipCode}
                />
                <h5 className="mt-2 text-danger text-center">{error}</h5>
            </div>
        )
    }
}