import React from 'react';
import '../scss/style.scss';
import './App.scss';
import HomePage from '../Components/HomePage.jsx';
import MovieDetails from '../Components/MovieDetails/MovieDetails.jsx';
import NotFound from '../Components/NotFound/NotFound.jsx';
import Movies from '../Components/Movies/Movies';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path='/' to='/movie'></Redirect>
        <Route exact path='/movie' component={HomePage}></Route>
        <Route path='/movie/:id' render={(routerProps) => MovieDetails(routerProps)}></Route>
        <Route path='/movies/:filter' component={Movies}/>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
