/* 
  Les ref permettent de mémoriser un élement du DOM réel (un peu comme ce que nous retourne getElementById) et des infos sur le composant qui l'a instancié.
  On va déclarer une ref à l'aide du hook useRef, elle sera remplie automatiquement au moment du rendu.
*/
import React, { useEffect, useRef } from 'react'

// "semantic-ui" nous fourni des composants tout fait. Il nous suffit des les instancier. Ces composants sont configurables via des props (à voir dans la doc) et gère déjà des comportements.
import { Input, Form, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const SearchBar = ({
  doSearch,
  value,
  loading,
  changeValue,
}) => {
  // Je déclare la ref et l'initialise à null, tant que le rendu dans le dom réel n'est pas fait, il sera impossible de cibler l'élement dans le dom réel
  const inputElement = useRef(null)

  // Donne le focus à la barre de recherche.
  useEffect(() => {
    inputElement.current.focus()
  }, [])

  return (
    <Segment>
      <Form onSubmit={doSearch}>
        <Input
          value={value}
          onChange={(event) => {
            changeValue(event.target.value)
            doSearch()
          }}
          // Pour remplir la ref, on ajoute une prop ref sur le composant qui nous intéresse et on lui associe notre ref "inputElement", elle sera remplie et accessible après le rendu.
          ref={inputElement}
          fluid
          loading={loading}
          icon='search'
          iconPosition='left'
          placeholder='"people/", "species/2/", ...'
        />
      </Form>
    </Segment>
  )
}

SearchBar.propTypes = {
  doSearch: PropTypes.func.isRequired,
  value: PropTypes.string,
  loading: PropTypes.bool,
  changeValue: PropTypes.func.isRequired,
}

export default SearchBar
