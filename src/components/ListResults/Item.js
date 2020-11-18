import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

// La clé qui contient le nom d'un film est "title", et pas "name", le ternaire sert ici de filtre.
const Item = ({ original_title, url, poster_path, release_date }) => (
  <Card onClick={() => window.location = url}>
    <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
    <Card.Content>
      <Card.Header>{original_title}</Card.Header>
      <Card.Description>Date Release: {release_date}</Card.Description>
    </Card.Content>
  </Card>
)

Item.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string.isRequired, 
}

export default Item
