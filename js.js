var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);


function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList,
         statusCode: {
    404: function(xhr) {
      alert("nie ma takiego kraju");
    }
  }
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function (item) {
        $('<li>').text("Name = " + item.name).appendTo(countriesList);
        $('<li>').text("Capital = " + item.capital).appendTo(countriesList);
        $('<li>').text("Currency = " + item.currencies).appendTo(countriesList);
        $('<li>').text("Population = " + item.population).appendTo(countriesList);
    });
}


console.log('test commits');