import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css'
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login'
import Preferences from '../Preferences/Preferences';
import useToken from './useToken'

function App () {
  const { token, setToken } = useToken()

  if(!token) { return <Login setToken={ setToken }/> }
  
  return (
    <div className='wrapper'>
        <h1>Application</h1>
        <BrowserRouter> {/* Browser's router managment*/}
            <Switch> {/* Allows just one component can be rendered at time*/}
                <Route path='/dashboard'>{/* Path of the component */}
                    <Dashboard/>
                </Route>
                <Route path='/preferences'>
                    <Preferences/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;