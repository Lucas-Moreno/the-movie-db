import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card } from 'semantic-ui-react'

const SpeciesCard = () => {
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
          <Card.Header>{data.name}</Card.Header>
          <Card.Meta>
            {data.classification}
          </Card.Meta>
          <Card.Description>
            <ul id='data'>
              <li>Designation: {data.designation}</li>
              <li>Average Height: {data.average_height === 'n/a' ? 'unknown' : `${data.average_height} cm`}</li>
              <li>Skin Color(s): {data.skin_colors === 'n/a' ? 'unknown' : data.skin_colors}</li>
              <li>Hair Color(s): {data.hair_colors === 'n/a' ? 'unknown' : data.hair_colors}</li>
              <li>Eye Color(s): {data.eye_colors === 'n/a' ? 'unknown' : data.eye_colors}</li>
              <li>Average Lifespan: {(data.average_lifespan === 'unknown' || data.average_lifespan === 'indefinite')  ? data.average_lifespan : `${data.average_lifespan} year(s)`}</li>
              <li>Homeworld:
                <a href={data.homeworld}>Click Here</a>
              </li>
              <li>Language: {data.language === 'n/a' ? 'unknown' : data.language}</li>
              {data.people?.length > 0 && (
                <li>
                  People{data.people?.length === 1 ? ':' : 's:'}
                  <ul>
                    {data.people.map((item) => (
                      <li key={item}>
                        <a href={item}>Click Here</a>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
              {data.films?.length > 0 && (
                <li>
                  Film{data.films?.length === 1 ? ':' : 's:'}
                  <ul>
                    {data.films.map((item) => (
                      <li key={item}>
                        <a href={item}>Click Here</a>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
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

export default SpeciesCard