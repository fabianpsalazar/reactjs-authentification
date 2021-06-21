import React, { useState } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css'
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';

function App () {
  const [token, setToken] = useState()
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