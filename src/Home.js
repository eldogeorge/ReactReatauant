import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Menu';

function Home() {
  //ADstep3
  const [restaurants, setMenu] = useState([])
  //ADstep1
  //to access data as call api using fetch
  const fetchMenu = async () => {
    var result = await fetch('./db_restaurants.json')//async & await is convet to async to sync
    //convert to js is result.json
    result.json().then(data => setMenu(data.restaurants)
    )
  }
  //ADStep4
  console.log(restaurants);
  // ADStep2
  useEffect(() => {
    fetchMenu()
  },[])
  return (
    // step2
    <div>
      {/* step3 */}
      {/* ADStep5 */}
      <Menu data={restaurants}></Menu>
    </div>
  )
}

export default Home