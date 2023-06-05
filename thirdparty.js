// https://newsapi.org/v2/everything?q=tesla&from=2023-05-05&sortBy=publishedAt&apiKey=bc1d0497e9a34c7495085e474698c65d
const axios = require('axios');

async function getnews(url) {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error(error.message);
  }
}


const apiurl = 'https://newsapi.org/v2/everything?q=tesla&from=2023-05-05&sortBy=publishedAt&apiKey=bc1d0497e9a34c7495085e474698c65d';
getnews(apiurl);
