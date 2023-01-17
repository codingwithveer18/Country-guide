let searchBtn = document.getElementById("seach-btn")
    ;
let countryInp = document.getElementById("country-inp")
    ;
searchBtn.addEventListener('click', () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(finalURL);
    fetch(finalURL).then((response) => response.json())
        .then((data) => {
            // console.log(data[0]);
            // console.log(data[0].flags.svg);
            // console.log(data[0].capital[0]);
            // console.log(Object.values(data[0].borders).toString().split(" , ").join(","));
            // console.log(data[0].name.common);
            // console.log(data[0].continents[0]);
            // console.log(Object.keys(data[0].currencies)[0]);
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            // console.log(Object.values(data[0].languages).toString().split(" , ").join(",")
            // );
            result.innerHTML = `
        <img src="${data[0].flags.svg}" 
        class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Neighbours:</h4>
                <span>${Object.values(data[0].borders)
                .toString()
                .split(" , ")
                .join(",")}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                    .toString()
                    .split(",")
                    .join(", ")}</span>
            </div>
        </div>
        <input type="checkbox" checked="checked" id="favorite" class="container01" name="favorite-checkbox" value="favorite-button">
        <label for="favorite" class="container01">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <div class="action">
            <span class="option-1">Add to Favorites</span>
            <span class="option-2">Added to Favorites</span>
          </div>
        </label>
      `;
        })
        .catch(() => {
            if (countryName.length == 0) {
                result.innerHTML = `<h3>The input field cannot be empty</h3>`;
            } else {
                result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
            }
        });
});