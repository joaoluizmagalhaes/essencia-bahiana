const functions = require('firebase-functions');
const axios = require('axios');

exports.fetchPlaces = functions.https.onCall(async (data, context) => {
  const apiKey = 'SUA_CHAVE_API'; // Substitua pela sua chave de API do Google Places
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
