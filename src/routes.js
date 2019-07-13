import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import New from './pages/new';

function Routes() {
    return ( 
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/new" component={New} />
        </Switch>
    )
}; 

export default Routes;