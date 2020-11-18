import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card } from 'semantic-ui-react'

const FilmsCard = () => {
  const [data, setData] = useState({})

  const BACK_URL = process.env.REACT_APP_BACK_URL

  useEffect(() => {
    const axiosData = async () => {
      try {
        const responseItems = await axios.get(`${BACK_URL}${window.location.pathname}`)
        setData(responseItems.data)
      } catch(error) {
        console.error(error)
      }
    }
    axiosData()
  }, [BACK_URL])

  return (
    <div id='card-container'>
      <Card>
        <Card.Content>
          <Card.Header>{data.title}</Card.Header>
          <Card.Description>
            <ul id='data'>
              <li>Episode ID: {data.episode_id}</li>
              <li>Release Date: {data.release_date}</li>
              <li>Director: {data.director}</li>
              <li>Producer: {data.producer}</li>
              <li id='opening_crawl'>Opening Crawl: {data.opening_crawl}</li>
            </ul>
          </Card.Description>
        </Card.Content>
      </Card>
      <div id='button-container'>
        <Button onClick={() => window.location = '/'}>Return to Homepage</Button>
      </div>
    </div>
  )
}

export default FilmsCard