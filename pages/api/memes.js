import axios from 'axios';

export function getMeme(){
    return axios.get('https://api.imgflip.com/get_memes')
    .then(function (response) {
      // handle success
      const random = Math.floor(Math.random()*100);
      return response.data.data.memes[random].url;
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