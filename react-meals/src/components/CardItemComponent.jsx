
import { Link } from "react-router-dom"
import { useEffect } from "react";



const CardItemComponent = ({food}) => {
  return (
    

    <div className="card bg-base-100 w-96 shadow-sm">

<Link to={`/meals/${food.idMeal}`}>

  <figure>
    <img
      src={food.strMealThumb}
      alt={food.strMeal} />
  </figure>
  <div className="card-body">
    
    <h2 className="card-title">
      {/* Card Title */}
      {food.strMeal}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
  
    
    {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{food.strCategory}</div>
      <div className="badge badge-outline">{food.strArea}</div>
    </div>
  </div>
  </Link>

    

</div>
  )
}
export default CardItemComponent