import { Link, useParams } from 'react-router-dom';
import products from '../data/products.json';
import {product as productType } from './ProductList';
import { ProductCard } from './ProductCard';

const ProductDetail = () => {
    const param = useParams();

   const product:productType|object = products.find(x => x.sku ===parseInt(param.sku ||'')) ||{};
    return <div className='row'><ProductCard {...product} /></div>;
}
export default ProductDetail;