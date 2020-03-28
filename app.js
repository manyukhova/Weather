window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/f56c5e41f40b21bfaf68ce3c77b05b21/${lat},${long}`;

            fetch(api)
            .then(response => {
            return response.json();
        })
            .then(data => {
            console.log(data);
            const { temperature,summary } = data.currently;

            //Elements from API
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;

            
            locationTimezone.textContent = data.timezone;


            
        });
        });

        

    }
});