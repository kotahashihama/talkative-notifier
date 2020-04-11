const cron = require('node-cron')
const WeatherCheckerMain = require('./WeatherCheckerMain')

cron.schedule('00 00,10,20,30,40,50 00,01,08-23 * * *', () => {
  WeatherCheckerMain.check()
})
