interface product {
    availableSizes: string[];
    currencyFormat: string;
    currencyId: string;
    description: string;
    id: number;
    installments: number;
    isFreeShipping: boolean;
    price: number;
    sku: number;
    style: string;
    title: string
  };
  type listOfProps = {
    data:product[];
    value?:string;

}
const ProductCard = (props:product) => {
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
   const ProductsList = (props:listOfProps) => {
    console.log(props);
    let { data: products } = props;
    return (
      <div>
        <div>
          <div>
            <h2>Products</h2>
          </div>
        </div>
         <div>
          {products.map((product) => {
            console.log(product);
         return <ProductCard key={product.sku} {...product} />
          }
          )}
        </div> 
      </div>
    )
  }
  export default ProductsList;