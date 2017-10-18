const article = require('./article');
const getFlags = require('./flags');
const axios = require('axios');

module.exports = async (environment = 'development') => {
  const d = article(environment);
  const flags = getFlags(environment);
  const berthaId = '1d-0ADsvOnvB-CnW53gBmcZbVVuqTtCsQZeZtQ_-1TcQ'
  const endpointChina = `http://bertha.ig.ft.com/view/publish/gss/${berthaId}/china`;
  const endpointHk = `http://bertha.ig.ft.com/view/publish/gss/${berthaId}/hong-kong`;
  const endpointTaiwan = `http://bertha.ig.ft.com/view/publish/gss/${berthaId}/taiwan`;
  let dataChina;
  let dataHk;
  let dataTaiwan;

  try {
    const resChina = await axios(endpointChina);
    const resHk = await axios(endpointHk);
    const resTaiwan = await axios(endpointTaiwan);

    dataChina = resChina.data;
    dataHk = resHk.data;
    dataTaiwan = resTaiwan.data;
  } catch (e) {
    console.log('Error getting content from Bertha', e);
  }

  return {
    ...d,
    flags,
    dataChina,
    dataHk,
    dataTaiwan,
  };
};
