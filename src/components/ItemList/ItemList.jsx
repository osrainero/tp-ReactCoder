import React from 'react';
import Item from '../Item/Item';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ItemList = ({ productos }) => {

    return (
        <>
            <Container>
                <Row>
               
                    {
                        productos.map((producto) => 
                        <Col key={producto.id} >
                            <Item producto={producto} />
                        </Col>                        
                        )
                    }
                </Row>
            </Container>
        </>
    );
};

export default ItemList;