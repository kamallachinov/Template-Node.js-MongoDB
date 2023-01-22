import React from 'react'
import './Section4.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../../Assets/person_1.jpg.webp'
import image2 from '../../Assets/person_2.jpg.webp'
import image3 from '../../Assets/person_3.jpg.webp'
import { Container } from '@mui/system';
function Section4() {

  return (
    <>
      <section className='section4'>
        <div className='centeredDiv'>
          <h2 className='header'>Happy Customers</h2>
        </div>
        <Container>
          <Row>
            <Col sm={4}>
              <div className='Card'>
                <div className='card-header'>
                  <img src={image1} />
                  <div className='text'>
                    <span>Lina Gold</span><br />
                    <span>Owner, Ford</span>
                  </div>
                </div>
                <p className='paragraph'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
              </div></Col>
            <Col sm={4}>
              <div className='Card'>
                <div className='card-header'>
                  <img src={image2} />
                  <div className='text'>
                    <span>Mike Fisher</span><br />
                    <span>Owner, Ford</span>
                  </div>
                </div>
                <p className='paragraph'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
              </div></Col> <Col sm={4}>
              <div className='Card'>
                <div className='card-header'>
                  <img src={image3} />
                  <div className='text'>
                    <span>Sheen Yu</span><br />
                    <span>Owner, Ford</span>
                  </div>
                </div>
                <p className='paragraph'>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
              </div></Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Section4