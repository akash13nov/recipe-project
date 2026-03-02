import { useEffect } from "react";
import axios from "../utils/Axios";

const Home = () => {
  const getProduct = async () => {
    try {
      // Method : 1 (Mostly use)
      // const response = await axios.get("https://fakestoreapi.com/products");
      // console.log(response.data);

      const response = await axios.get("/products");
      console.log(response.data);

      // Method : 2
      // const { data } = await axios.get("https://fakestoreapi.com/products");
      // console.log(data);
      // Method : 3 (Without Axios - Old method)
      // const strData = await fetch("https://fakestoreapi.com/products");
      // const jsonData = await strData.json();
      // console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getProduct}>Get Product</button>
    </div>
  );
};

export default Home;
