
document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.getElementById('country');
    const citySelect = document.getElementById('city');
    const { cities } = window.appData; 


    /* chatGPT assisted me with this function for updating the cities based on the 
    selected country for the dropdown menu in the registration form */
    function updateCities() {
        const selectedCountryId = countrySelect.value;
        citySelect.innerHTML = ''; 
        cities.filter(city => city.country_id == selectedCountryId).forEach(city => {
            const option = new Option(city.city_name, city.city_id);
            citySelect.add(option);
        });
    }
    countrySelect.addEventListener('change', updateCities);
    updateCities();
});
