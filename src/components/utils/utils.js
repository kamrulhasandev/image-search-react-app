import axios from 'axios';
const apiUrl = `https://pixabay.com/api/`
const apiKey = `25529223-8f6f85d274c575e2cc052ff49`

export const getImages = async (searchText, imageQuantity) => {
    try {
      return await axios.get(`${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${imageQuantity}&safe_search=true`);
    }catch(error){
        console.log(error.message);
    }
}