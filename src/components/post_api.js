import { readAPI } from './read_api';

const postAPI = (event) => {
  event.preventDefault();

  const inputs = event.currentTarget.children; // hacker way to extract the data
  const brand = inputs[0].value;
  const model = inputs[1].value;
  const plate = inputs[2].value;
  const owner = inputs[3].value;
  // console.log(brand);
  // console.log(model);
  // console.log(owner);
  // console.log(plate);

  const data = {
    brand: brand,
    model: model,
    owner: owner,
    plate: plate
  };

  const dataAsString = JSON.stringify(data);

  const options = {
    body: dataAsString,
    method: 'POST',
    headers: {
      "Content-Type": 'application/json'
    }
  };

  const url = 'https://wagon-garage-api.herokuapp.com/lions_den/cars';

  fetch(url, options)
    .then(res => res.json())
    .then((car) => {
      readAPI(); // display the cars in the lazy way
    });
}

export { postAPI };