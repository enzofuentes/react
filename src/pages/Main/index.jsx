import ProductList from "../../components/ProductList"
import { useEffect, useState } from "react";

const Main = () => {
  const [products, setProducts] = useState([])

  const getProducts = () => {
      fetch('http://localhost:3005/products')
          .then(res => res.json())
          .then(products => {
            console.log('Productos obtenidos:', products);
            setProducts(products);
          })
          .catch(error => console.error('Error al obtener los productos:', error));
      }
  useEffect(getProducts, []);
  
  //  const products = [];
    return ( 
      <ProductList title= "productos" products ={products} />


     );

}
 
export default Main;