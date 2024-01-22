import React, { useEffect, useState } from "react"
import Header from "./Components/Header/header"
import CategoryList from "./Components/CategoryList/categoryList"
import Loading from "./Components/Loading/loading"
import Product from "./Components/Product/product"
import SearchBar from "./Components/SearchBar/searchBar"
import './App.css'
import notFount from "./assets/images/404.png";
import axios from "./axios"


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

  const filterProduct = (categoryId) => {
    fetchData(categoryId)
  }

  const searchProduct = async (term) => {
    setLoading(true)
    try {
      const response = await axios.get(`/FastFood/search${term ? "?term=" + term : ""}`);
      setProduct(response.data);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  const renderContent = () => {
    if (loading) {
      <Loading theme="success" />
    }

    if (product.length === 0) {
      return (
        <div className="fade-in-horize">
          <div className="alert alert-warning text-center">
            محصولی یافت نشد
          </div>
          <img src={notFount} className="mx-auto mt-5 d-block" alt="" />
        </div>
      )
    }

    return <Product product={product} />
  }

  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList filterProduct={filterProduct} >
        <SearchBar searchProduct={searchProduct} />
      </CategoryList>
      <div className="container mt-4">
        {renderContent()}
      </div>
    </div>
  )
}

export default App
