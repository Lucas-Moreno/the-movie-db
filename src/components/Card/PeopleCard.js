import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card } from 'semantic-ui-react'

const PeopleCard = () => {
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
          {(data.gender === 'n/a' || data.gender === 'none' )? 'asexual' : data.gender}
          </Card.Meta>
          <Card.Description>
            <ul id='data'>
              <li>Height: {data.height === 'unknown' ? 'unknown' : `${data.height / 100} m`}</li>
              <li>Mass: {data.mass === 'unknown' ? 'unknown' : `${data.mass} kg`}</li>
              <li>Hair Color: {(data.hair_color === 'n/a' || data.hair_color === 'none') ? "this people don't have hair" : data.hair_color}</li>
              <li>Skin Color: {data.skin_color}</li>
              <li>Eye Color: {data.eye_color}</li>
              <li>Birth Year: {data.birth_year}</li>
              <li>Homeworld:
                <a href={data.homeworld}>Click Here</a>
              </li>
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
              {data.species?.length > 0 && (
                <li>
                  Species:
                  <ul>
                    {data.species.map((item) => (
                      <li key={item}>
                        <a href={item}>Click Here</a>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
              {data.vehicles?.length > 0 && (
                <li>
                  Vehicle{data.vehicles?.length === 1 ? ':' : 's:'}
                  <ul>
                    {data.vehicles.map((item) => (
                      <li key={item}>
                        <a href={item}>Click Here</a>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
              {data.starships?.length > 0 && (
                <li>
                  Starship{data.starships?.length === 1 ? ':' : 's:'}
                  <ul>
                    {data.starships.map((item) => (
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

export default PeopleCard