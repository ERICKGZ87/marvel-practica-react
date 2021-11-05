import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./vistas/Home";
import InjectContext from './store/appContext';
import Personajes from './vistas/Personajes';
import NavBar from './components/NavBar';
import Comics from './vistas/Comics';
import Series from './vistas/Series';
import Contact from './vistas/Contact';
import About from './vistas/About';
import DetallePersonaje from './vistas/DetallePersonaje';


const Main = () => {
    return (
        <BrowserRouter>
         <NavBar/>
   
       

      
       <Switch>

       <Route exact path="/" component={Home} />
       <Route exact path="/Personajes" component={Personajes} />
       <Route exact path="/Personajes/:product_id/DetallePersonaje" component={DetallePersonaje} />
       <Route exact path="/Comics" component={Comics} />
       <Route exact path="/Series" component={Series} />
       <Route exact path="/Contact" component={Contact} />
       <Route exact path="/About" component={About} />
        


       </Switch>
               
            
        </BrowserRouter>
    )
}

export default InjectContext(Main);
