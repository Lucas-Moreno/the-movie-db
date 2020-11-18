// == Import npm
import React, { useState } from 'react'
import axios from 'axios'

// == Import
import ListResults from '../ListResults'
import SearchBar from '../SearchBar'
import Message from '../Message'

// == Composant
const App = () => {

  const [newSearchValue, setNewSearchValue] = useState('')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('Welcome, young padawan.')
  const [hasError, setHasError] = useState(false)
  const [messageVisible, setMessageVisible] = useState(true)

  const API_KEY = process.env.REACT_APP_API_KEY

  const displayMessage = (messageToDisplay) => {
    setMessageVisible(true)
    setMessage(messageToDisplay)
  }

  const reset = () => {
    setHasError(false)
    displayMessage('Please wait, your request is being processed...')
    setLoading(true)
  }

  // Charge des éléments via le champ de recherche.
  const doSearch = async () => {
    try {
      reset()
      let id = 1
      const url = `https://api.themoviedb.org/3/search/movie?api_key=325e4a633b85a4ad0f68aa6594634b88&query=${newSearchValue}`
      let responseItems = await axios.get(url)
      console.log(responseItems.data)
      responseItems.data.results.forEach(element => {
        element.id = id++
      })
      setPosts(responseItems.data.results)
      displayMessage('Request successfully completed.')
    } catch(error) {
      console.error(error)
      setHasError(true)
      if (error.response.status === 400)
        displayMessage('You made a typing error. Check and patch it before retry.')
      else if (error.response.status === 404)
        displayMessage(`${error.message}. Check and patch your potential typing error before retry.`)
      else
        displayMessage(`${error.message}. Please, retry later.`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id={'app'}>
      <SearchBar
        doSearch={doSearch}
        value={newSearchValue}
        changeValue={setNewSearchValue}
        loading={loading}
      />
      {messageVisible && (
        <Message
          hasError={hasError}
          content={message}
          setMessageVisible={setMessageVisible}
        />
      )}
      {newSearchValue && (
        <ListResults items={posts} />
      )}
    </div>
  )
}

// == Export
export default App
