const functions = require('firebase-functions')
const runtimeOpts = {
  timeoutSeconds: 120, // Aumenta o tempo limite para 120 segundos
  memory: '256MB'
}
const cors = require('cors')({origin: true})
const axios = require('axios')

exports.fetchPlaces = functions
  .runWith(runtimeOpts)
  .https.onRequest((request, response) => {
    cors(request, response, async () => {

      if (request.method !== 'POST') {
        return response.status(403).send('Método HTTP não suportado')
      }
      const apiKey = 'AIzaSyDSdTrDltNnwQ1l5Fuo5jhHiGcBsBf_0Sk' // Substitua pela sua chave de API do Google Places
      const { location, radius, type } = request.body.data // Dados recebidos do app cliente
      const encodedLocation = encodeURIComponent(location)
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${encodedLocation}&radius=${radius}&type=${type}&key=${apiKey}`

      axios.get(url)
      .then( axiosResponse => {
        if(axiosResponse.data.status === 'REQUEST_DENIED'){
          //console.error('Erro ao buscar locais:', axiosResponse.data.status)
          return response.status(403).send('Acesso negado')
        }

        return response.status(200).send({
          "status": 'success',
          "data": axiosResponse.data.results
        }) // Retorna os resultados da API
      })

    })
  })


