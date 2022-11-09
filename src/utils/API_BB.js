const API_BASE_URL = "https://www.breakingbadapi.com/api/"

class API_BB {
    constructor(charac){
        if(charac === undefined ) {
            charac="Walter White";
        }
        this.charac = charac;
    }

    fetchCharacData() {
        return axios
          .get(`${API_BASE_URL}characters?name=${this.charac}`)
      }
}

