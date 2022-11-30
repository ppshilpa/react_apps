import { Routes, Route } from 'react-router-dom';
import Homepage from './component/HomePage';
import PageNotFound from './component/PageNotFound';
import ProductDetail from './component/ProductDetail';
import ProductList from './component/ProductList';
import Topics from './component/Topic';

 const WebRoute = () =>{
return <Routes>
      <Route path="/" element={<Homepage/>}/>
<Route path="/topics" element={<Topics/>}/>
<Route path="/product-list" element={<ProductList/>} />
<Route path="/product-details/:sku/:name" element={<ProductDetail/>} />
<Route path="*" element={<PageNotFound/>} />

</Routes>
 }
 export default WebRoute;