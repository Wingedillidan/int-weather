export default class WeatherModel {
    constructor({main, weather, name}) {
        this.cityName = name
        this.description = weather[0]?.description
        this.temp = main?.temp
        this.tempMin = main?.temp_min
        this.tempMax = main?.temp_max
    }
}