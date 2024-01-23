const functions = require('firebase-functions');
const admin = require('firebase-admin');
const fetch = require('node-fetch');

admin.initializeApp();

exports.updateInstagramToken = functions.pubsub.schedule('every 12 hours').onRun(async (context) => {
  try {
    const db = admin.firestore();
    const tokenRef = db.collection('configuration').doc('instagramToken');

    // Buscar o token antigo no Firestore
    const doc = await tokenRef.get();
    if (!doc.exists) {
      throw new Error('Token antigo não encontrado no Firestore');
    }
    const oldTokenData = doc.data();
    const oldAccessToken = oldTokenData.token;

    // Substitua URL_DA_API_PARA_OBTER_NOVO_TOKEN pelas informações corretas da sua API
    const accessTokenUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${oldAccessToken}`;

    const response = await fetch(accessTokenUrl);

    if (!response.ok) {
      throw new Error('Falha ao renovar o token do Instagram');
    }

    const data = await response.json();
    const newAccessToken = data.access_token;

    // Salvar o novo token no Firestore
    await tokenRef.set({
      token: newAccessToken,
      lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log('Token do Instagram atualizado com sucesso');
    return null;
  } catch (error) {
    console.error('Erro ao atualizar o token do Instagram:', error);
    return null;
  }
});
