import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const { idProducto } = useParams()
    const db = getFirestore();
    const collectionRef = collection(db, 'ventaprod');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const snapshot = await getDocs(collectionRef);
    
            if (snapshot.docs.length > 0) {
              
              const foundProducto = snapshot.docs.find((doc) => doc.id === idProducto);
    
              if (foundProducto) {
                const productoData = { id: foundProducto.id, ...foundProducto.data() };
                setProducto(productoData);
              } 

            } else {
              console.log('No hay documentos en la colección');
            }
          } catch (error) {
            console.error('No esta llegando la info de Firebase:', error);
          }
        };
    
        fetchData();
      }, [collectionRef, idProducto]);

    return (
        <div>
            {
                producto 
                ? <ItemDetail producto={producto} /> 
                : <p>CARGANDO..</p>
            }
        </div>
    );
};

export default ItemDetailContainer;