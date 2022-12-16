import { Routes, Route, Navigate } from 'react-router-dom';
import PageNotFound from './component/PageNotFound';
import {UserForm} from './component/UserForm';
import LoginForm  from './component/LoginForm'
import Homepage from './component/HomePage';
 const WebRoute = () =>{

    const token = localStorage.getItem('token');

return <Routes>
<Route path="/user-form" element={<UserForm/>} />
<Route path="/" element={<Homepage/>} />
<Route path="/login" element={<LoginForm/>} />

<Route path="*" element={<Navigate to="/page-not-found" />} />
        <Route path="/page-not-found" element={<PageNotFound/>} />
</Routes>
    
  };  export default WebRoute;
  export const PublicRoute =()=>{
    return (<Routes>
    <Route path="/login" element={<LoginForm/>} />
    {/* <Route path="/" element={<Navigate to="/login" />} /> */}
    <Navigate replace to="/login" />
  </Routes>);
  }
