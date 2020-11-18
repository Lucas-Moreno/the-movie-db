import React from 'react'
import { Card } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import Item from './Item'

const ListResults = ({ items }) => {

  return (
    <Card.Group itemsPerRow={5} doubling centered>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </Card.Group>
  )
}

ListResults.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
}

export default ListResults
