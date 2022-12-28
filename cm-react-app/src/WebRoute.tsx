import { Routes, Route, Navigate } from 'react-router-dom';
import PageNotFound from './component/PageNotFound';
import {UserForm} from './component/UserForm';
import LoginForm  from './component/LoginForm'
import Homepage from './component/HomePage';
 import ContentComp from './component/Contents';
 import {UserList} from './component/UserList';
import { Counter } from './component/Counter';
import  Posts from './component/Posts'

 const WebRoute = () =>{
return <Routes>
<Route path="/user-form" element={<UserForm/>} />
<Route path="/" element={<Homepage/>} />
<Route path="/login" element={<LoginForm/>} />
<Route path="/content" element={<ContentComp/>} />
<Route path="/users" element={<UserList/>} /> 
<Route path="/counter" element={<Counter/>} />
<Route path="/posts" element={<Posts/>} />

<Route path="*" element={<Navigate to="/page-not-found" />} />
<Route path="/page-not-found" element={<PageNotFound/>} />
</Routes>
    
  };  
  export default WebRoute;
