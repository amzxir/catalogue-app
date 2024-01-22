import React, { useEffect } from "react";
import axios from "../../axios";


const CategoryList = () => {

    useEffect(() => {
        const handlerFetchData = async () => {
            try {
                const response = await axios.get('/FoodCategory/categories');
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        handlerFetchData();
    }, [])

    return (
        <div>
            category list
        </div>
    )
}

export default CategoryList;