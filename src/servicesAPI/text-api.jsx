import axios from "axios";
axios.defaults.baseURL = `http://tmgwebtest.azurewebsites.net/api`;
// axios.defaults.headers.common["TMG-Api-Key"] = "0J/RgNC40LLQtdGC0LjQutC4IQ==";

const serviceAPI = {
  getTextList(listID) {
    return axios.get(`/textstrings/${listID}`, {
      headers: {
        "TMG-Api-Key": "0J/RgNC40LLQtdGC0LjQutC4IQ==",
      },
      mode: "no-cors",
    });
  },
};

export default serviceAPI;
