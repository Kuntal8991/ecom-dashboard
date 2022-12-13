
import './App.css';
import { Button } from 'react-bootstrap'
import React from "react";
import { Route, Routes,Link} from 'react-router-dom'
import Hader from './component/Hader';
import AddProduct from './component/AddProduct'
import UpdateProduct from './component/UpdateProduct';
import Login from './component/Login'
import Register from './component/Register'
import Protected from './component/Protected';
function App() {
  return (

    <div className="App">



     


    

      {/* <Routes>
        <Route exact path='' element={<App />}></Route>
       
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/add' element={<Protected Cmp={AddProduct}/>} ></Route>
        <Route path='/update' element={<Protected Cmp={UpdateProduct}/>} ></Route>
      </Routes> */}
      <Routes>
      <Route  path='/' element={<AddProduct />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>

      <Route path='/add' element={<Protected Cmp={AddProduct}/>} ></Route>
        <Route path='/update' element={<Protected Cmp={UpdateProduct}/>} ></Route>
      </Routes>

      {/* <Link to='/login'>Login</Link> */}
     
      <button>Normal BUtton</button>
      <Button>Bootstrap Buttom</Button>
      <h1> Ecom Prpject</h1>

    </div>

  );
}

export default App;
