import article from './article';
import getFlags from './flags';
import getOnwardJourney from './onward-journey';
import axios from 'axios';

export default async (environment = 'development') => {
  const d = await article(environment);
  const flags = await getFlags(environment);
  const onwardJourney = await getOnwardJourney(environment);
  const berthaId = '1caGngmG0spk3fYgtfX-LTjaIivHEVgjIinWupr_bhN4';
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
    onwardJourney,
    dataChina,
    dataHk,
    dataTaiwan,
  };
};
