import axios from 'axios'
import { BASE_URL } from '../globals'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

export default function Movies(){
    // const navigate = useNavigate();
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const getMovies = async () => {
            setMovies(null);
            const response = await axios.get(`${BASE_URL}movies`);
            setMovies(Array.from(response.data));
                
        }
        getMovies();
    }, [])

 if (!movies){
    return(
        <div>
            <h1>loading</h1>
        </div>
        )
} else if(movies.length===0){
        return (
    
            <div>
                <h1> There's been an error. Please try again! </h1>
            </div>
        
        )}
else{
    return (
        <div className = "grid-container">
            {movies.map((movie) => (
                <div key={movie.id} className="card">
                    <h2>{movie.name}</h2>
                    <img src= {movie.poster_url}/>
                    <h4>Next Showing: {movie.movie_starttime}</h4>
                    <h4>Runtime: {movie.movie_runtime}</h4>
                    <h6>In theater: {movie.theater_id}</h6>
                    <div className='ticketbutton'>
                    <Link to='/Tickets' state={{id: movie.name}}><button>Get Ticket</button></Link>
                    </div>
                </div>
    ) )}
        </div>
   
        
            )}
        }