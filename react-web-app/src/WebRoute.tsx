import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './component/HomePage';
import LoginForm from './component/LoginForm';
import PageNotFound from './component/PageNotFound';
import Posts from './component/Posts';
import ProductDetail from './component/ProductDetail';
import ProductList from './component/ProductList';
import TopicWrap from './component/Topic';
import { UserList } from './component/UserList';
import UserProfile from './component/UserProfile';
import { UserDetails } from './component/UserDetails';

 const WebRoute = () =>{
return <Routes>
      <Route path="/" element={<Homepage/>}/>
<Route path="/topics/:topicId" element={<TopicWrap/>}/>
<Route path="/posts" element={<Posts/>}/>
<Route path="/product-list" element={<ProductList/>} />
<Route path="/product-details/:sku/:name/:price" element={<ProductDetail/>} />
<Route path="/product-details/:sku/:name" element={<ProductDetail/>} />
<Route path="/product-details/:sku" element={<ProductDetail/>} />
<Route path="/user/:login" element={<UserProfile/>} />
<Route path="/page-not-found" element={<PageNotFound/>} />
<Route path="*" element={<Navigate to="/page-not-found" />} />
<Route path="/signin" element={<LoginForm/>} />
<Route path="/user-list" element={<UserList/>} />
<Route path="/user-detail/:id" element={<UserDetails/>} />



</Routes>
 }
 export default WebRoute;