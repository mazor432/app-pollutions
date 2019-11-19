import axios from "axios";

export const getCities = (inputVal) => {
  return axios
    .get( `https://api.openaq.org/v1/latest?country=${inputVal}&order_by=measurements[0].value&sort=desc&parameter=pm25`)
        .then(response => {
            const truncatedData = [...new Set(response.data.results.map(item => item.city))].slice(0, 10)
            return truncatedData;
        })
        .catch(function(error) {
            console.log(error);
        });
}
