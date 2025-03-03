
import { useParams, Link } from "react-router-dom";



const MealsDetailsPage = () => {

  const {id} = useParams();

  return (

    <div>
      MealsDetailsPage für {id}
      <br />
      <button className="btn btn-primary">
        <Link to="/meals">Zurück</Link>
      </button>

    </div>
  )
}
export default MealsDetailsPage