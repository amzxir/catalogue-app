import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Loading from "../Loading/loading";


const CategoryList = () => {

    const [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const handlerFetchData = async () => {
            try {
                const response = await axios.get('/FoodCategory/categories');
                setCategory(response.data);
                setIsLoading(false)
            } catch (error) {
                console.error(error);
            }
        }

        handlerFetchData();
    }, [])


    return (
        <nav className="container mt-n5">
            <div style={{ height: '80px' }} className="d-flex align-items-center bg-white rounded-3 shdow-lg py-4">
                {isLoading
                    ?
                    <Loading />
                    :
                    <ul className="nav">
                        <li className="nav-item"><a className="nav-link" href="#">همه فست فودها</a></li>
                        {category.map((i) => {
                            return (
                                <li className="nav-item" key={i.id}><a className="nav-link" href="#">{i.name}</a></li>
                            )
                        })}
                    </ul>
                }
            </div>
        </nav>
    )
}

export default CategoryList;