import axios from "axios";

const cors = "https://cors-anywhere.herokuapp.com/";
axios.defaults.baseURL = `${cors}http://tmgwebtest.azurewebsites.net/api`;

const serviceAPI = {
  getTextList(listID) {
    return axios.get(`/textstrings/${listID}`, {
      headers: {
        Accept: "aplication/json",
        "TMG-Api-Key": "0J/RgNC40LLQtdGC0LjQutC4IQ==",
        "Content-Type": "aplication/json",
      },
    });
  },
};

export default serviceAPI;
