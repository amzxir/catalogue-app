import { useState } from "react";
import { BsSearch } from "react-icons/bs"

const SearchBar = ({ searchProduct }) => {

    const [value , setValue] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        searchProduct(value)
    }

    return(
        <form onSubmit={onSubmit} className="search flex-fill d-flex align-items-center">
            <div className="input-group">
                <input onChange={(e) => setValue(e.target.value)} value={value} type="text" className="form-control rounded-end pe-5 border-success" placeholder="جستجو کنید ..." />
                <BsSearch className="position-absolute top-50 translate-middle-y text-munted me-3"/>
            </div>
        </form>
    )
}

export default SearchBar;