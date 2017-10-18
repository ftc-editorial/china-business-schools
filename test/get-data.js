const writeJsonFile = require('write-json-file');
const path = require('path');
const fetchData = require('../data');

async function fetchAndSaveData() {
  const data = await fetchData();
  const dest = path.resolve(__dirname, '../dist/data.json');

  try {
    await writeJsonFile(dest, data);
  } catch (e) {
    console.log(e);
  }
}

fetchAndSaveData()
 .catch(err => {
   console.log(err);
 });