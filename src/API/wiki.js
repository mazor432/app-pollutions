import axios from "axios";

export const getCityInfo = (city) => {
  return axios
    .get( `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=${city}`)
        .then(response => {
            return response.data.query.pages;
        })
        .catch(function(error) {
            console.log(error);
        });
}
