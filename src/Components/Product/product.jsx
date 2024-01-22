import ProductItem from "../ProductItem/productItem";

const Product = ({ product }) => {

    let delay = 0.1;

    return (
        <div className="row">
            {product.map((i) => {
                delay += 0.030;
                return (
                    <div className="col-md-4 col-sm-6 mb-grid-gutter" key={i.id}>
                        <ProductItem {...i} delay={delay} />
                    </div>
                )
            })}
        </div>
    )
}

export default Product;