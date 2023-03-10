import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdBanner from './AdBanner';


const HomeScreen = () => {  
  const [recipes, setRecipes] = useState([])
  const getRecipes = () => {
    axios
        .get("https://recipes.devmoutain.com/recipes")
        .then((res) => {
           setRecipes(res.data)
           console.log(res.data)
        })
        
  }

  useEffect(() => {
    getRecipes()
  }, [])
  
  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen