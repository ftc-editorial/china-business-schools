import article from './article';
import getFlags from './flags';
import getOnwardJourney from './onward-journey';
import axios from 'axios';

export default async () => {
  const d = await article();
  const flags = await getFlags();
  const onwardJourney = await getOnwardJourney();
  const berthaId = '1caGngmG0spk3fYgtfX-LTjaIivHEVgjIinWupr_bhN4';
  const endpoint = `http://bertha.ig.ft.com/view/publish/gss/${berthaId}/china`;
  let data;

  try {
    const res = await axios(endpoint);

    data = res.data;

    // console.log(data);
  } catch (e) {
    console.log('Error getting content from Bertha', e);
  }

  return {
    ...d,
    flags,
    onwardJourney,
    data,
  };
};
