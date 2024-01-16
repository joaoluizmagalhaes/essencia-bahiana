const functions = require('firebase-functions');
const cors = require('cors')({origin: true})
const axios = require('axios');

eexports.fetchPlaces = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    // Verifique se o método é GET
    if (request.method !== 'GET') {
      return response.status(403).send('Método HTTP não suportado');
    }
    console.log('here')
    const apiKey = 'AIzaSyDSdTrDltNnwQ1l5Fuo5jhHiGcBsBf_0Sk'; // Substitua pela sua chave de API do Google Places
    const { location, radius, type } = data; // Dados recebidos do app cliente
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      return response.data.results; // Retorna os resultados da API
    } catch (error) {
      console.error('Erro ao buscar locais:', error);
      throw new functions.https.HttpsError('internal', 'Erro ao buscar locais');
    }
  });
});
