import React from 'react'
import { Card } from 'semantic-ui-react'
import PropTypes from 'prop-types'

// La clé qui contient le nom d'un film est "title", et pas "name", le ternaire sert ici de filtre.
const Item = ({ name, title, url }) => (
  <Card onClick={() => window.location = url}>
    <Card.Content>
      <Card.Header>{name ? name : title}</Card.Header>
    </Card.Content>
  </Card>
)

Item.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string.isRequired, 
}

export default Item
