function getJSON(response) {
	let data = response.json();
	return data
}

function getCurrencyRate(currency) {

		let url = "https://api.exchangeratesapi.io/latest?symbols=" + currency;

			/* const config = {
				method: "POST", // "POST", "PUT"
				body: JSON.stringify(data)
			} */
			// fetch(url, config)

			fetch(url)
				.then(getJSON)
				.then(data => {
					//console.log("Data: ", data)
					let rate = Object.values(data.rates)[0];
					document.querySelector("#exchange-results").innerHTML = '1.00 Euro corrisponde a ' + rate + currency;
				})
				.catch( err => {
					//console.log("Error: ", err)
					document.querySelector("#exchange-results").innerHTML = 'Errore' + err;
				})



				/*.then(function(response) {
					response.json()
						.then(function(data) {
						})
				})

		}
		getCurrencyRate("USD");*/
	}

	document.addEventListener("DOMContentLoaded", () => {
		document.querySelector("#form").onsubmit = event => {

			event.preventDefult();

			const currency = document.querySelector("#currency").value;
			getCurrencyRate(currency)

			document.querySelector("#currency").value = "";

		}
	})