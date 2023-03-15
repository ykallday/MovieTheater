import TicketPic from '../assets/movieticket.png'
import { useLocation, Link } from 'react-router-dom'

export default function Tickets(){

    function changeButtons (e){
        e.target.innerText='Purchased!'
        e.target.style.backgroundColor='yellow';
        e.target.style.color="black";
    }

    const location = useLocation();
    // if (location.state != null){
    //     const { id } = location.state;
    // }else{
    //     const {id} = '';
    // }
    
    return(
        <div>
            <div className = 'ticketbutton'>
            <button onClick = {changeButtons}>Get Ticket: {location.state ? location.state.id : ''}</button>
            </div>
            <img src = {TicketPic}/>
            <div className = 'go-back'>
                <Link to='/Movies'><button>Go Back!</button></Link>
            </div>
             
        </div>
    )
}