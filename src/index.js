import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import './assets/styles/index.css'

import App from './components/App'
import Header from './components/Header'
import PeopleCard from './components/Card/PeopleCard'
import PlanetsCard from './components/Card/PlanetsCard'
import FilmsCard from './components/Card/FilmsCard'
import SpeciesCard from './components/Card/SpeciesCard'
import StarshipsCard from './components/Card/StarshipsCard'
import VehiclesCard from './components/Card/VehiclesCard'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Route path='/people/' component={PeopleCard} />
      <Route path='/planets/' component={PlanetsCard} />
      <Route path='/films/' component={FilmsCard} />
      <Route path='/species/' component={SpeciesCard} />
      <Route path='/starships/' component={StarshipsCard} />
      <Route path='/vehicles/' component={VehiclesCard} />
      <Route exact path='/' component={App}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
