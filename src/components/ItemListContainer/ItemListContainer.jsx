import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();
    const db = getFirestore();
    const collectionRef = collection(db, 'ventaprod');


    useEffect(() => {
        const fetchData = async () => {

            try {
                const snapshot = await getDocs(collectionRef);

                if (snapshot.docs.length > 0) {
             
                    const filteredProductos = categoryId
                        ? snapshot.docs
                            .filter((doc) => doc.data().categoria === categoryId)
                            .map((doc) => ({ id: doc.id, ...doc.data() }))
                        : snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

                    setProductos(filteredProductos);

                } else {
                    setProductos([]);
                }

            } catch (error) {
                console.error('Error al incorporar informacion desde Firebase:', error);
            }
        };

        fetchData();
    }, [categoryId])



    return (
        <>

            <div className='productsContainer'>
                <Container>
                    <Row>
                    {productos.length == 0
                    ? <h2>CARGANDO...</h2>
                    : <ItemList productos={productos} />} 
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ItemListContainer;