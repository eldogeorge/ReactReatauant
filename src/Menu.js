import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// ADStep6
function Menu({ data }) {
    return (
        // step3
        <div>
            {/* ADStep 7 */}
            <div>

                <Container>
                    <Row>
                        {
                            data.map(i => (

                                <Col xs={12} sm={6} md={4} lg={3} xl={3} className='mt-5 '>
                                    <Link to={`menuView/${i.id}`} style={{textDecoration:'none', transition: '.5sease-in'}}>
                                        <Card style={{ width:'18rem'}}>
                                            <Card.Img className='p-3' variant="top" src={i.photograph} />
                                            <Card.Body>
                                                <Card.Title className=' text-center text-dark'>{i.name}</Card.Title>
                                                <Card.Text className='p-1 text-dark'>
                                                    {i.address}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>

            </div>

        </div>
    )
}

export default Menu