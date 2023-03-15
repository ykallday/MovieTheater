import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <div>
            <Link to = "/">Home</Link>
            <Link to = "/Theaters">View Theaters</Link>
            <Link to = "/Movies">View Movies</Link>
            <Link to = "/Tickets">Tickets</Link>
        </div>
    )
}
