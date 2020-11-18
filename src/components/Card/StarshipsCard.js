import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card } from 'semantic-ui-react'

const StarshipsCard = () => {
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
            {data.model}
          </Card.Meta>
          <Card.Description>
            <ul id='data'>
              <li>Manufacturer: {data.manufacturer}</li>
              <li>Class: {data.starship_class}</li>
              <li>Cost: {data.cost_in_credits === 'unknown' ? 'unknown' : `${data.cost_in_credits} galactic credits`}</li>
              <li>Length: {data.length} m</li>
              <li>Max Atmosphering Speed: {data.max_atmosphering_speed === 'n/a' ? 'This starship is incapable of atmospheric flight.' : `${data.max_atmosphering_speed} km/h`}</li>
              <li>Minimum Crew: {data.crew}</li>
              <li>Maximum Passenger Capacity: {data.passengers === 'n/a' ? 'unknown' : data.passengers}</li>
              <li>Cargo Capacity: {data.cargo_capacity} kg</li>
              <li>Hyperdrive Rating: {data.hyperdrive_rating}</li>
              <li>MGLT: {data.MGLT}</li>
              {data.pilots?.length > 0 && (
                <li>
                  Pilot{data.pilots?.length === 1 ? ':' : 's:'}
                  <ul>
                    {data.pilots.map((item) => (
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

export default StarshipsCard