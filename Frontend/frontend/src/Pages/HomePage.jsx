import { useEffect, useState } from 'react';
import Card from '../components/authorization/ProductCard/Card';
import axios from 'axios';

function HomePage() {
  const [data, setdata] = useState(
    new Array(20).fill({ title: 'Product Title' })
  );

  const [product , setProduct] = useState([])

  const getProducts = async () => {
    const response =await axios.get('http://localhost:8000/product/get-products');
    setProduct(response.data.data)
     console.log(response);
  }

  useEffect(()=>{
    const callProducts = async () =>{
      await getProducts();
    }

    callProducts();
  },[]);


  return (
    <>
      <h1 className="text-center">Home Page for Follow Along</h1>
      <div className="grid grid-cols-3">
        {product.map((ele, index) => {
          return (
          
              <div style={{ margin: 'auto' }} key={index} >
                <Card product={ele} />
              </div>
            
          );
        })}


        {/* {product.map((ele,index)=>{
          <Card key={index} product={ele} />
        })} */}


      </div>
    </>
  );
}

export default HomePage;