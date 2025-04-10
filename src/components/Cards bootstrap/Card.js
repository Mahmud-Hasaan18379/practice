import React from 'react';
import Card from 'react-bootstrap/Card';
const Cards = (props) => {
const {hd, bd} = props;
    return (
        <div>
              <Card border="danger" bg='dark' text='white'>
                <Card.Body>
                    <Card.Title>{hd}</Card.Title>
                    <Card.Text>{bd}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;