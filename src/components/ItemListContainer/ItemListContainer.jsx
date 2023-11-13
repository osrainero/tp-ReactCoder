import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

import { useParams } from "react-router-dom";
import "./itemListContainer.scss";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = () => {
      return fetch("/data/products.json")
        .then((response) => response.json())
        .then((data) => {
          if (categoryId) {
            const filterProducts = data.filter(
              (p) => p.category === categoryId
            );
            setProducts(filterProducts);
          } else {
            setProducts(data);
          }
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [categoryId]);

  return (
    <>
      <Container>
        {products.length == 0 ? (
          <Spinner animation="grow" />
        ) : (
          <section className="productos">
            <ItemList products={products} />
          </section>
        )}
      </Container>
    </>
  );
};

export default ItemListContainer;
