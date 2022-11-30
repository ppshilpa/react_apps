import { Link, useParams } from 'react-router-dom';
import products from '../data/products.json';
import { product as productType } from './ProductList';
import { ProductCard } from './ProductCard';
const ProductDetail = () => {
    const { sku, name } = useParams();
    let product: productType | undefined;
    if (sku) {
        product = products.find(x => x.sku === parseInt(sku));
    }
    return product! && <div className='row'><ProductCard {...product} /></div>;
}
export default ProductDetail;