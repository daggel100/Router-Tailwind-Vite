import { useEffect, useState } from "react";


import CardItemComponent from "../components/CardItemComponent";

import { fetchData } from "../utileties/apiFetch";

// "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
const MealsPage = () => {

  const [essen, setEssen] = useState([]);

  const mealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

  useEffect(() => 
  {
    async function fetchMeals() 
    {
      try 
      {
        const data = await fetchData(mealsUrl);
        console.log(data.meals);
        
        setEssen(data.meals);
      } 
      catch (error) 
      {
        console.error( error.message);
      }
    }

    fetchMeals();
  }, []) 



  return (
    // <div>MealsPage</div>
    <div className="container mx-auto p-4">

      {
        essen.length > 0 ? (
          essen.map((food) =>  <p key={food.idMeal} >{food.strMeal}</p>)
        ) : (<p> Kein Essen ist da </p>)
      }


       <CardItemComponent />
    </div>
   
  )
}
export default MealsPage