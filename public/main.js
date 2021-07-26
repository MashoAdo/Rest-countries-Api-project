

// api url
const api_url =
	"https://restcountries.eu/rest/v2/all";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	 var data =  await response.json()
   
   const html = data.map(user =>{
      return `
    <div class="country">
        <div class="country-flag" style="background-image:url(${user.flag})"></div>
        <div class="country-info">
          <h1 class="country-name">${user.name}</h1>
          <div class="info-key-values">
              <h3>Population:</h3>
              <p class="population">${user.population}</p>
          </div>
          <div class="info-key-values">
              <h3>Region:</h3>
              <p class="region">${user.region}</p>
          </div>
          <div class="info-key-values">
              <h3>Capital:</h3>
              <p class="capital">${user.capital}</p>
          </div>
        </div>
     </div>`
   }).join("")
  
   document.querySelector(".countries-section").insertAdjacentHTML("afterbegin",html)
 
}

getapi(api_url);
