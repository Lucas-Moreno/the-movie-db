import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card } from 'semantic-ui-react'

const PlanetsCard = () => {
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
          <Card.Description>
            <ul id='data'>
              <li>Rotation Period: {data.rotation_period} h</li>
              <li>Orbital Period: {data.orbital_period} days</li>
              <li>Diameter: {data.diameter}</li>
              <li>Climate: {data.climate}</li>
              <li>Gravity: {data.gravity === 'N/A' ? 'unknown' : data.gravity}</li>
              <li>Terrain: {data.terrain}</li>
              <li>Surface Water: {data.surface_water === 'unknown' ? 'unknown' : `${data.surface_water}%`}</li>
              <li>Population: {data.population === 'unknown' ? 'unknown' : `${data.population} peoples`}</li>
              {data.residents?.length > 0 && (
                <li>
                  Resident{data.residents?.length === 1 ? ':' : 's:'}
                  <ul>
                    {data.residents.map((item) => (
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

export default PlanetsCard