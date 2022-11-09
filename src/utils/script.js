function searchCharacter(charac) {
    console.info(charac)
    
    const apiBB = new API_WEATHER(charac);
    // Appel de la fonction fetchTodayForecast
  
    apiBB
      .fetchCharacData()
      .then(function (response) {
        // Récupère la donnée d'une API
        const data = response.data.list;
  
        for (let i = 0; i < 4; i++) {
          // On récupère l'information principal
          const name = data.name;
          const img = data.img;
  
          // Modifier le DOM
          document.getElementById(`name`).innerHTML = name;
          document.getElementById(`img`).innerHTML = img;
        }
      })
      .catch(function (error) {
        // Affiche une erreur
        console.error(error);
      }
    );
    
}