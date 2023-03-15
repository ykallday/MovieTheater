import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import Theater from './Theaters'
import Tickets from './Tickets'


export default function Main(){

    return(
        
        <div>
        <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/Theaters' element= {<Theater/>}/>
        <Route path = '/Movies' element= {<Movies/>}/>
        <Route path = '/Tickets' element= {<Tickets/>}/>
        </Routes>
           
        </div>
    )
}

