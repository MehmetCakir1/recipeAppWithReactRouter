import React from 'react'
import { useState,useEffect } from 'react';
import RecipeCard from '../components/RecipeCard'
import axios from "axios"
import Header from '../components/Header';
import Image from "../assets/images.png"
import ContentDiv from './HomeStyled';
import {Img} from './HomeStyled';
import {H2} from './HomeStyled';

const Home = () => {
  const mealType =["Breakfast","Lunch","Dinner","Snack","Teatime"]
  const [query,setQuery]=useState("egg")
  const [selectedMeal,setSelectedMeal]=useState(mealType[0])
  const [recipes,setRecipes]=useState(null)
  const appId="e4feea44";
  const appKey="7b8e8ffe84ef720248665bf5349e043b"
  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&mealType=${selectedMeal}`

  const getRecipe = async()=>{
    if(query){
       try{
        const {data} = await axios.get(url);
        setRecipes(data.hits)
    }catch(error){
      console.log(error);
  }
    }else{
      alert("Please fill in the blanks")
    }
   
}
  // console.log(recipes);

  console.log(recipes);
  return (
    <div>
       <div>
      <Header query={query} setQuery={setQuery} setSelectedMeal={setSelectedMeal} selectedMeal={selectedMeal} mealType={mealType} getRecipe={getRecipe}/>
    </div>
    <ContentDiv>
       {!recipes && (
      <Img src={Image}/>
    )}
    <H2>{recipes?.length==0 && ("The Food Could Not Be Found")}</H2> 
    {recipes?.length>0 &&  <RecipeCard recipes={recipes}/>}
    </ContentDiv>
    </div>
   
  )
}

export default Home