import React, { useEffect } from 'react'
// en cas de conflit dans les noms d'imports on peut donner des alias avec as
import { Message as MessageSemanticUi } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Message = ({ hasError, content, setMessageVisible }) => {

  useEffect(() => {
    // je veux cacher le message au bout de 4 secondes.
    // on a un problème ici : on ne nettoie pas nos timers, donc si un message est affiché avant que le précédent ai disparu, tout le décompte serait faussé.
    const timeout = setTimeout(() => {
      setMessageVisible(false)
    }, 4000)

    // useEffect peut retourner une fonction de nettoyage, qui sera executée au moment où le composant "meurt" dans son état actuel
    return () => {
      clearTimeout(timeout)
    }
  }, [content, setMessageVisible])
  return (
    <MessageSemanticUi negative={hasError}>
      {content}
    </MessageSemanticUi>
  )
}

Message.propTypes = {
  hasError: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  setMessageVisible: PropTypes.func.isRequired,
}

export default Message
