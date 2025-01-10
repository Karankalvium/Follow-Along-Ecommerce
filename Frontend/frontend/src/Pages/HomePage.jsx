import { useEffect, useState } from 'react';
import Card from '../components/authorization/ProductCard/Card';
import axios from 'axios';

function HomePage() {
  const [data, setdata] = useState();
  const getProducts = async () => {
    const response =await axios.get('http://localhost:8000/product/get-products');
    setdata(response.data.data)
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
        {data?.map((ele, index) => {
          return (
          
              <div style={{ margin: 'auto' }} key={index} >
                <Card 
                title={ele.title}
                image={ele.images[0] ? ele.images[0] : 'Product Image missing'}
                Index={index}
                description={ele.description}
                originalPrice={ele.originalPrice}
                discountedPrice={ele.discountedPrice}
                rating={ele.rating}
                id={ele._id}
                 />
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