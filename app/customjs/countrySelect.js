
fetch("./data/countries.json").then(function (response) {
    return response.json();
}).then(function (data) {
    loadCountries(data);
})

const travelFrom = document.getElementById("travelFrom");
const travelTo = document.getElementById("travelTo");

function loadCountries(data){
    var option = document.createElement("option");
    var i = 0;

    for (const item of data) {
        option.text = item.name;
        option.value = i;

        var tempFrom = option.cloneNode(true);
        travelFrom.appendChild(tempFrom);
        
        var tempTo = option.cloneNode(true);
        travelTo.appendChild(tempTo);

        i++;
    }
}