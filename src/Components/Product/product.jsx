import ProductItem from "../ProductItem/productItem";

const Product = ({ product }) => {
    return (
        <div className="row">
            {product.map((i) => {
                return (
                    <div className="col-md-4 col-sm-6 mb-grid-gutter" key={i.id}>
                        <ProductItem {...i} />
                    </div>
                )
            })}
        </div>
    )
}

export default Product;