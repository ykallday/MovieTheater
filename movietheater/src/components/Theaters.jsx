import axios from 'axios'
import { BASE_URL } from '../globals'
import {useEffect, useState} from 'react'

export default function Theaters(){
    const [theaters, setTheaters] = useState([])
    useEffect(() => {
        const getTheaters = async () => {
            setTheaters(null);
            const response = await axios.get(`${BASE_URL}theaters`);
            setTheaters(Array.from(response.data));
                
        }
        getTheaters();
        console.log(theaters)
    }, [])

 if (!theaters){
    return(
        <div>
            <h1>loading</h1>
        </div>
        )
} else if(theaters.length===0){
        return (
    
            <div>
                <h1> There's been an error. Please try again! </h1>
            </div>
        
        )}
else{
    return (
        <div className = "grid-container">
            {theaters.map((theater) => (
                <div key={theater.id} className="card">
                    <h2>{theater.name}</h2>
                    <h4>Showings:</h4>
                    <h6>{theater.Movies[0].name}</h6>
                    <h6>{theater.Movies[1].name}</h6>
                    <h6>{theater.Movies[2].name}</h6>
                    { theater.Movies[3]? <h6>{theater.Movies[3].name}</h6> : null }
                </div>
    ) )}
        </div>
   
        
            )}
        }