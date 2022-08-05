var baseUrl= "https://api.coinranking.com/v2/coins"
var proxyUrl= "https://cors-anywhere.herokuapp.com/"
var apiKey="coinranking57d43e59974fa1bcd868058c427203974832b6ecf47c59c6"

fetch(`${proxyUrl}${baseUrl}`,{
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        "x-access-token":`${apiKey}`,
        'Access-Control-Allow-Origin' : '*'
    }
}).then((response) => {
    if(response.ok) {
        response.json().then((json) => {
            console.log(json.data.coins)

            let coinsData = json.data.coins

            if(coinsData.length>0){
                var cryptoCoin=""
            }

            //For Loop Starts
            coinsData.forEach((coin) => {
                cryptoCoin += "<tr>"
                cryptoCoin +=  `<td> ${coin.uuid} </td>`
                cryptoCoin +=  `<td> ${coin.btcPrice} </td>`
                cryptoCoin +=  `<td> ${coin.rank} </td>`
                cryptoCoin +=  `<td> ${coin.tier} </td>`
                cryptoCoin +=  `<td> ${coin.name} </td>`
                cryptoCoin +=  `<td> ${coin.price} </td>`
                cryptoCoin +=  `<td> ${coin.symbol} </td>`;"<tr>";
            });
            document.getElementById("data").innerHTML=cryptoCoin
        })
    }
}).catch((error) => {
    console.log(error)
})