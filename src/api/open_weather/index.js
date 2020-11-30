import axios from 'axios'
import WeatherModel from './weather-model'

const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5'

export default class OpenWeatherAPI {
    constructor(apiKey) {
        this.apiKey = apiKey
    }

    getCurrentWeatherByZip(zipCode, countryCode) {
        const params = {
            zip: `${zipCode},${countryCode}`,
            appid: this.apiKey,
            units: 'imperial'
        }
        return axios.get(`${API_ENDPOINT}/weather`, {params})
            .then((response) => new WeatherModel(response.data))
    }
}