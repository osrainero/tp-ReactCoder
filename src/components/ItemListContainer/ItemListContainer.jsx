import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
            {productos.length == 0
                ? <h1>CARGANDO...</h1>
                : <ItemList productos={productos} />}
        </>
    );
};

export default ItemListContainer;