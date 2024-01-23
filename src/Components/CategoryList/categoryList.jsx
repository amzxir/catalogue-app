import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Loading from "../Loading/loading";


const CategoryList = ({ filterProduct, children }) => {

    const [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const handlerFetchData = async () => {
            const config = {
                headers : {
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*"      
                }
            }
            try {
                const response = await axios.get('/FoodCategory/categories' , config);
                setCategory(response.data);
                setIsLoading(false)
            } catch (error) {
                console.error(error);
            }
        }

        handlerFetchData();
    }, [])

    const renderContent = () => {
        if (isLoading) {
            return <Loading />
        }

        return (
            <div className="ps-3 w-100 d-flex align-items-center justify-content-between gap-5">
                <ul className="nav">
                    <li className="nav-item"><a className="nav-link" href="#" onClick={() => filterProduct()}>همه فست فودها</a></li>
                    {category.map((i) => {
                        return (
                            <li className="nav-item" key={i.id}><a className="nav-link" href="#" onClick={() => filterProduct(i.id)}>{i.name}</a></li>
                        )
                    })}
                </ul>
                {children}
            </div>
        )
    }


    return (
        <nav className="container mt-n5">
            <div style={{ height: '80px' }} className="d-flex align-items-center bg-white rounded-3 shdow-lg py-4">
                {renderContent()}
            </div>
        </nav>
    )
}

export default CategoryList;