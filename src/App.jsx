import React from "react"
import Header from "./Components/Header/header"
import './App.css'
import CategoryList from "./Components/CategoryList/categoryList"

function App() {

  return (
    <div className="wrapper bg-faded-dark">
      <Header/>
      <CategoryList/>
    </div>
  )
}

export default App
