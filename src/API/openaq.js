import axios from "axios";

export const getCities = (inputVal) => {
  return axios
    .get( `https://api.openaq.org/v1/cities?country=${inputVal}&order_by=count&sort=desc&limit=10`)
        .then(response => {
            return response.data.results.map(item => item.city);
        })
        .catch(function(error) {
            console.log(error);
        });
}
