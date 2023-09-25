
import { NavLink } from 'react-router-dom';

function Dogs({ dogs }) {


    return (

        <nav >
            <ul>
                {Object.keys(dogs).map(d => <li key={d}><NavLink to={`/dogs/${d}`}>{dogs[d].name}</NavLink></li>)}
            </ul>
        </nav>
    )
}

export default Dogs;