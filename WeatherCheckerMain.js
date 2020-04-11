module.exports = class WeatherCheckerMain {
  static check() {
    require('dotenv').config()

    const GoogleHome = require('./GoogleHome')
    const googleHome = new GoogleHome(process.env.GOOGLE_HOME_IP_ADDRESS)
    const WeatherApi = require('./WeatherApi')
    const weatherApi = new WeatherApi(process.env.YAHOO_APP_ID)

    weatherApi.request(process.env.LATITUDE, process.env.LONGITUDE, (error, weathers) => {
      if (!error) {
        console.log('Request ok.')
        const current = weathers[0]
        const next = weathers[1]

        if (current.Rainfall == 0 && next.Rainfall > 0) {
          googleHome.tell("雨がふりそうですよ")
        }
      } else {
        console.log(error)
      }
    })
  }
}
