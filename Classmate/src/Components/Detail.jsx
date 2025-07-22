import { useParams } from 'react-router-dom';
import Footer from './Footer';
import { Button } from 'antd';
const productData = {
  predator: {
    name: "HRX Predator Cycle",
    desc: "Black Front Suspension and Dual Disc Brakes 85% Assembled 26 T Mountain Cycle ",
    image: "https://nimbuscluster.blob.core.windows.net/server01/hrx/product/productImage-5jBT9b9a301WEgmhEgWMG-1663325998",
    Price:"RS.2300"
  },
  dumbbell: {
    name: "HRX Dumbbell 30KG",
    desc: "Premium Coloured 30 KG DM COMBO 16 Adjustable Dumbbell",
    image: "https://nimbuscluster.blob.core.windows.net/server01/hrx/subcatImage/subcatImage-H_F5VuiBIpHsJCN4aRMRG-1662630893",
  },
  bagpack: {
    name: "HRX Backpack",
    desc: "Unisex Black Lifestyle Backpack",
    image: "https://nimbuscluster.blob.core.windows.net/server01/hrx/product/productImage-L0LRoS3JKilvziLUd7jhS-1662623992",
  },
  tshirt: {
    name: "HRX T-Shirt",
    desc: "Men Teal Blue Printed Pure Cotton T-shirt",
    image: "https://nimbuscluster.blob.core.windows.net/server01/hrx/product/productImage-38gbSSJ24kq6rgB96WFSO-1662610620",
  }
};
const Detail = () => {
   const { id } = useParams();
  const product = productData[id];
   if (!product) return <p>Product not found</p>;
  return (
    <div className="pt-20 justify-center text-center">
      <h1 className="text-4xl pl-5 text-red-800 font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="mx-auto my-5 max-w-md" />
      <p className="text-lg text-gray-700 font-bold">{product.desc}</p>
      <p className="text-lg text-gray-700 font-bold">{product.Price}</p>
      <Button>Buy now</Button>

      <Footer/>
    </div>
  );
};
export default Detail