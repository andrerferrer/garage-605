const displayTheCarInTheDOM = (car) => {
  // creating the car html
  const carHTML = `
    <div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
      </div>
      <div class="car-info">
        <h4>${car.brand} ${car.model}</h4>
        <p><strong>Owner:</strong> ${car.owner}</p>
        <p><strong>Plate:</strong> ${car.plate}</p>
      </div>
    </div>  
  `;
  // finding the list
  const carsList = document.querySelector('.cars-list');
  // inserting the carHTML into the DOM
  carsList.insertAdjacentHTML('beforeend', carHTML);
};

const readAPI = () => {
  const url = "https://wagon-garage-api.herokuapp.com/lions_den/cars";
  // fetch information from the api
  fetch(url)
    .then(res => res.json())
    .then((cars) => {
      // clear the list of cars
      const carsList = document.querySelector('.cars-list');
      carsList.innerHTML = '';

      // display it in the DOM
      cars.forEach(displayTheCarInTheDOM);
    });
};

export { readAPI };
