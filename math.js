let data = '{"ticker":{"base":"BTC","target":"USD","price":"17852.08217000","volume":"11275.44897350","change":"1.89645789"},"timestamp":1671059585,"success":true,"error":""}'

let parsedDat = JSON.parse(data)

console.log(parsedDat)

setInterval(() => {
    console.log(parsedDat.ticker.price)
}, 2000);