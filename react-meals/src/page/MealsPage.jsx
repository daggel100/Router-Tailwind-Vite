import { useEffect, useState } from "react";


import CardItemComponent from "../components/CardItemComponent";

import { fetchData } from "../utileties/apiFetch";

// "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
const MealsPage = () => {

  const [meals, setMeals] = useState([]);

  const mealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

  useEffect(() => 
  {
    async function fetchMeals() 
    {
      try 
      {
        const data = await fetchData(mealsUrl);
        console.log(data.meals);
        
        setMeals(data.meals);
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
        meals.length > 0 ? (
          meals.map((food) =>  
          <>  <p key={food.idMeal} >
            {food.strMeal}</p> 
            <CardItemComponent food={food}/> 
          </>)
        ) : (<p> Kein Essen ist da </p>)
      }


       {/* <CardItemComponent /> */}
    </div>
   
  )
}
export default MealsPage