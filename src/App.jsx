
import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import SearchField from './components/SearchField/SearchField'
import Images from './components/Images/Images'
import { getImages } from './components/utils/utils'

function App() {

  const [searchText, setSearchText] = useState('')
  const [imageQuantity, setImageQuantity] = useState(8)
  const [data, setData] = useState([])

  useEffect(()=>{
    if(imageQuantity < 3 || imageQuantity > 200) {
      return
    }
    const getData = async () => {
    const response =  await getImages(searchText, imageQuantity);
    setData(response?.data.hits);
    }
    getData();
  },[searchText, imageQuantity])

  return (
    <div>
      <Navbar/>
      <SearchField setSearchText={setSearchText} setImageQuantity={setImageQuantity}/>
      <Images data={data}/>
    </div>
  )
}

export default App
