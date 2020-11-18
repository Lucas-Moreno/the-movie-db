import React from 'react';
import '../css/style.css';
import './App.css';
import HomePage from '../Components/HomePage.jsx';
import MovieDetails from '../Components/MovieDetails/MovieDetails.jsx';
import NotFound from '../Components/NotFound/NotFound.jsx';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path='/' to='/movie'></Redirect>
        <Route exact path='/movie' component={HomePage}></Route>
        <Route path='/movie/:id' render={(routerProps) => MovieDetails(routerProps)}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
