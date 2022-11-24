import {ProductCard} from './ProductCard';

export interface product {
    availableSizes: string[];
    currencyFormat: string;
    currencyId: string;
    description: string;
    id: number;
    installments?: number;
    isFreeShipping: boolean;
    price: number | string;
    sku: number;
    style: string;
    title: string
  };
 
type propsList ={
data :product[];
cardName?: string;
};

   const ProductsList = (props:propsList) => {
   // const products = props.data || []
    const {data:productList, cardName} = props;
    return (
      <div>
        <div>
          <div>
            <h2>{cardName}</h2>
          </div>
        </div>
         <div className="row">
          {productList.map((product) => <div className='col-3'><ProductCard key={product.sku} {...product} /></div>)}
        </div> 
      </div>
    )
  }
  export default ProductsList;