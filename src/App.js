import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom';
import HomePage from './pages/home';
import StartPage from './pages/startpage';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Route exact path="/" render={(props) => <StartPage {...props} />} />
                    <Route exact path="/home" render={(props) => <HomePage {...props} />} />
                </BrowserRouter>
            </div>
        );
    }
}