const ProductCard = props => {
    return (
      <div className="product">
        <p>
          <b>Title:</b> {props.title}
        </p>
        <p>
          <b>Style:</b> {props.style}
        </p>
        <p>
          <b>Price:</b> {props.price}
        </p>
        <p>
          <b>Description:</b> {props.description}
        </p>
        <p>
          <b>Free shipping:</b> {props.isFreeShipping}
        </p>
        <hr />
      </div>
    );
  };
   const ProductsList = (props) => {
    let { data: products } = props;
    return (
      <div>
        <div>
          <div>
            <h2>Products</h2>
          </div>
        </div>
        <div>
          {products.map((product) => <ProductCard key={product.sku} {...product} />)}
        </div>
      </div>
    )
  }
  export default ProductsList;