import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from 'Routes/Home';
import Search from 'Routes/Search';
import TV from 'Routes/TV';
// import Detail from 'Routes/Detail';

export default ()=>(
    <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tv" exact component={TV}/>
            <Route path="/tv/popular" render={()=>{return <h1>popular</h1>}}></Route>
            <Route path="/search" exact component={Search}/>
            <Redirect from="*" to="/"/>
        </Switch>
    </Router>
);
