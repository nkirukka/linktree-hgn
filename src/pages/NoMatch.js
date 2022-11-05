import { Link } from "react-router-dom";
import '../components/styles/NoMatch.css';


const NoMatch = () => {
  return (
    <div className='NoMatch'>
      <div className='Oops_container'>
      <p className="Oops">Oops!</p>
      <h3>404 - PAGE NOT FOUND</h3>
        <p className="message">The page you are looking for might have been removed, had
          its name changed or is temporarily unavailable.
        </p>
        <Link to='/'>BACK TO HOMEPAGE</Link>
      </div>
    </div>
  )
}

export default NoMatch;