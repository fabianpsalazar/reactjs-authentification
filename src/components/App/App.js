import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Preferences from '../Preferences/Preferences';

function App () {
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