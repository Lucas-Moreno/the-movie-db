import React from 'react';
import '../scss/style.scss';
import './App.scss';
import Genre from '../Components/Genre/Genre';
import Movies from '../Components/Movies/Movies';
import HomePage from '../Components/HomePage';
import MovieDetails from '../Components/MovieDetails/MovieDetails';
import NotFound from '../Components/NotFound/NotFound';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Series from '../Components/Series/Series';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path='/' to='/movie'></Redirect>
        <Route exact path='/movie' component={HomePage}></Route>
        <Route exact path='/movies/:genreId/:genreName' component={Genre} />
        <Route path='/movie/:id' component={(routerProps) => MovieDetails(routerProps)}></Route>
        <Route path='/movies/:filter' component={Movies} />
        <Route path='/series/:filter' component={Series} />
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
