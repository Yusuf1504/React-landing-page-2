import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './About.css';

function BasicExample() {
  return (
    <div className='empty'>

        <div />
      <div className="d-flex justify-content-center">
        <h1>About us</h1>
      </div>
      <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/10924362/pexels-photo-10924362.jpeg?auto=compress&cs=tinysrgb&w=600/100px180"
          />
          <Card.Body>
            <Card.Title>Card Title 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Know more</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/10660486/pexels-photo-10660486.jpeg?auto=compress&cs=tinysrgb&w=600/100px180"
          />
          <Card.Body>
            <Card.Title>Card Title 2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/10924312/pexels-photo-10924312.jpeg?auto=compress&cs=tinysrgb&w=600/100px180"
          />
          <Card.Body>
            <Card.Title>Card Title 3</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/17425911/pexels-photo-17425911/free-photo-of-ducati-scrambler-on-dirt-road-with-hill-behind.jpeg?auto=compress&cs=tinysrgb&w=600/100px180"
          />
          <Card.Body>
            <Card.Title>Card Title 3</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default BasicExample;