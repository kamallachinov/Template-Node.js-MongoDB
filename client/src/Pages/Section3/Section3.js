import React from 'react'
import { Container } from '@mui/system';
import image from '../../Assets/atty_1.jpg.webp'
import image2 from '../../Assets/atty_2.jpg.webp'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section3.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
function Section3() {
    return (
        <>
            
            <section className='section3'>
                <Container>
                    <Row>
                        <Col sm={7}><img src={image} />
                            <img src={image2} />
                            </Col>
                       
                        <Col sm={5}>  <h3 >We Provide Highly <strong>Reliable &amp; Effective</strong> Legal Solutions </h3>
                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
                            <a type='submit' className='btn'>Book an appointment</a></Col>
                    </Row>
                 
                </Container>
            </section>


        </>
    )
}

export default Section3