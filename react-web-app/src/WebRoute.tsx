import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './component/HomePage';
import PageNotFound from './component/PageNotFound';
import ProductDetail from './component/ProductDetail';
import ProductList from './component/ProductList';
import TopicWrap from './component/Topic';
import UserProfile from './component/UserProfile';

 const WebRoute = () =>{
return <Routes>
      <Route path="/" element={<Homepage/>}/>
<Route path="/topics/:topicId" element={<TopicWrap/>}/>
<Route path="/product-list" element={<ProductList/>} />
<Route path="/product-details/:sku/:name/:price" element={<ProductDetail/>} />
<Route path="/product-details/:sku/:name" element={<ProductDetail/>} />
<Route path="/product-details/:sku" element={<ProductDetail/>} />
<Route path="/user/:login" element={<UserProfile/>} />

<Route path="/page-not-found" element={<PageNotFound/>} />
<Route path="*" element={<Navigate to="/page-not-found" />} />
</Routes>
 }
 export default WebRoute;