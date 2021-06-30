import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/home';
import StartPage from './pages/startpage';

const App = (props) =>  {
    
        return(
            
                <BrowserRouter>
                
                    <Switch >
                        <Route exact path="/home" ><HomePage/> </Route> 
                        <Route exact path="/" ><StartPage/> </Route> 
                    </Switch>

                
                    
                </BrowserRouter>
        );
    
}

export default App