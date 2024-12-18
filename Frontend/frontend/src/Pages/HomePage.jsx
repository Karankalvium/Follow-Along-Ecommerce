import { useEffect, useState } from 'react';
import Card from '../components/authorization/ProductCard/Card';

function HomePage() {
  const [data, setdata] = useState(
    new Array(20).fill({ title: 'Product Title' })
  );

  console.log(data);

  return (
    <>
      <h1 className="text-center">Home Page for Follow Along</h1>
      <div className="grid grid-cols-3">
        {data.map((ele, index) => {
          return (
            <>
              <div style={{ margin: 'auto' }}>
                <Card title={ele.title} Index={index} />
              </div>
              <div style={{ margin: 'auto' }} className="border border-white">
                <Card title={ele.title} Index={index} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;