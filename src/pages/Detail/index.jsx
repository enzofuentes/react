import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [product, setProduct] = useState ({});
 const { id } = useParams ();

const getProduct = ()   => {
    fetch (`http://localhost3005/products/id${id}`)
     .then(res=> res.json)
     .then(product => {
       console.log (product);
    })
      .catch(error => console.log(error))
  }



useEffect(getProduct, [id]);







 
  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>Descripción: {product.description}</p>
          <p>Precio: {product.price}</p>
       
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default Detail;

