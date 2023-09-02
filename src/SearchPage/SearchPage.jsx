import React, { useContext, useEffect, useState } from 'react'
import './SearchPage.css'
import { Button, Card, Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap'
import { userContext } from '../App'
import Pagin from '../Pagination/Pagin'
import PaginData from '../Pagination/PaginData'
import PaginationBasic from '../Pagination/PaginationBasic'
import axios from 'axios'

function SearchPage() {
    const [userFollowers, setuserFollowers] = useState([])
    const [userData,first,setfirst]=useContext(userContext)
    useEffect(() => {
        async function apiFetch(){
          const response1=await  axios.get(`https://api.github.com/users/mojombo/followers`);
          const res=await response1.data
          setuserFollowers(res)
          console.log("res1"+response1)
        }
        apiFetch()
      }, [])
  return (
    <section>
    <div className='user-card'>
        <Container>
        <Row >
     {userData.map((i)=>{
        return(
            <Col md={4} lg={2}>
            <Card >
      <Card.Img variant="top" src={i.avatar_url} />
      <Card.Body>
        <Card.Title>ID: {i.node_id} Name: {i.login}</Card.Title>
        <Card.Text>
          followers:{i.userFollowers}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

        )
     })} 
     </Row> 
     <Pagin/>
     {first&& <p>Not Found</p>}
     </Container>
    </div>
    </section>
  )
}

export default SearchPage