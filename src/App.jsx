import React, { useEffect, useState } from "react"
import Header from "./Components/Header/header"
import CategoryList from "./Components/CategoryList/categoryList"
import './App.css'
import axios from "./axios"
import Loading from "./Components/Loading/loading"
import Product from "./Components/Product/product"


const App = () => {

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([])

  const fetchData = async (categoryId = null) => {
    setLoading(true)
    try {
      const response = await axios.get(`/FastFood/list${categoryId ? "?categoryId=" + categoryId : ""}`);
      setProduct(response.data);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList />
      {loading
        ?
        <Loading theme="success" />
        :
        <div className="container mt-4">
          <Product product={product}/>
        </div>
      }
    </div>
  )
}

export default App
