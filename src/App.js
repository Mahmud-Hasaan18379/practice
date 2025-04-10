import React, { useState } from 'react';
import './App.css'
import { FaLaptopCode } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
// import DynamicStyle from './components/DynamicStyle/DynamicStyle';
// import Count from './components/Count/Count';
// import Toggle from './components/Toggle/Toggle';
// import Formik from './components/LOGIN/LoginWithFormik';
// import LoginCondition from './components/LOGIN/LoginCondition';
// import { BrowserRouter, Route, Routes } from 'react-router';
// import Home from './components/Pages/Home';
// import Contact from './components/Pages/Contact';
// import Blogs from './components/Pages/Blogs';
// import Error from './components/Pages/Error';
// import NavBar from './components/Pages/NavBar';
// import Blog from './components/Pages/Blog';
// import Products from './components/Pages/Products';
// import Privecy from './components/Pages/Privecy';
// import Protected from './components/Pages/Protected';
// import Parent from './components/UseContext/Parent';
// import HomeTodo from './components/Todos/HomeTodo';
// import UseContext1 from './components/UseContext/UseContext1';
// import RefHoks from './components/Hoks/RefHoks';
// import Style from './components/Style/Style';
// import Countries from './components/Countries/Countries';
// import UseEfect from './components/Effect/UseEffect';
// import Tog from './components/New/tog';


const head1 = 'palastine'

const App = () => {

// const [isLog , setLog]=useState(false)

// const page = <BrowserRouter>
//     <NavBar/>
//         <button onClick={()=>setLog(!isLog)}>{isLog ? "logOut" :"logIn"}</button>
//         <Routes>
//             <Route path='' element={<Home/>}/>
//             <Route path='/contact' element={<Contact/>}/>
//             <Route path='/blogs' element={<Blogs/>}/>
//             <Route path='/blogs/:title' element={<Blog/>}/>
//             <Route path='*' element={<Error/>}/>
//             <Route path='/products' element={<Products/>}/>
//             <Route path='/products/:id' element={<Products/>}/>
//             <Route   path='/product'  element={<Products/>}/>
//             <Route path='/privecy' element={<Protected isLog={isLog}>
//                 <Privecy/>
//             </Protected>}/>
//         </Routes>
//     </BrowserRouter>






    return (
        <div>
        <h1 className='head'>{head1}</h1>
        <h1 className='button'><FaLaptopCode /></h1>
        {/* <Formik/> */}
        {/* <LoginCondition/> */}
        {/* <Tog/> */}
        {/* <UseEfect/> */}
        {/* <Countries/> */}
        {/* <Style/> */}
        {/* <RefHoks/> */}
        {/* <UseContext1/> */}
        {/* <HomeTodo/> */}
        {/* <Parent/> */}
        {/* {page} */}
        {/* <Toggle/> */}
        {/* <Count/> */}
        {/* <DynamicStyle/> */}
        
        </div>
    );
};

export default App;

