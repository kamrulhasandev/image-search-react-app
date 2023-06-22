import axios from 'axios';
const apiUrl = `https://pixabay.com/api/`
const apiKey = import.meta.env.VITE_API_KEY

export const getImages = async (searchText, imageQuantity) => {
    try {
      return await axios.get(`${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${imageQuantity}&safe_search=true`);
    }catch(error){
        console.log(error.message);
    }
}