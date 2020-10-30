import axios from 'axios';

export function getMeme(){
    const url = `https://api.giphy.com/v1/gifs/random?tag=random&api_key=${process.env.api_key}`;
    return axios.get(url)
    .then(function (response) {
      // handle success
      const random = Math.floor(Math.random()*10);
      return response.data.data.image_url;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      throw error;
    })
}

export function getQuote(){
    return axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes')
    .then(function (response) {
      // handle success
      const random = Math.floor(Math.random()*100);
      return response.data.messages.personalized[random];
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      throw error;
    })
}