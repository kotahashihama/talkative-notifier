const cron = require('node-cron')
const WeatherCheckerMain = require('./WeatherCheckerMain')

cron.schedule('* */10 * * * *', () => {
  WeatherCheckerMain.check()
})
