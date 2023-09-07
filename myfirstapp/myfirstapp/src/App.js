import logo from "./image/Drona1.png";
import './App.css';
import AboutUs from './components/AboutUs';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './components/homepage';
import Admin from './components/AdminHome';
import Customer from './components/CustomerHome';
import Operator from './components/OperatorHome';
import CustomerReg from './components/CustomerReg';
//! ADDING THE CONTACTUS HERE

import ViewCustomer from './components/ViewCustomer';




import ViewOperator from './components/ViewOperator';
import Logout from './components/Logout';
// import Footer from './Footer';
import Productlist from "./components/Productlist";
import { useSelector } from 'react-redux';
import CustomerBuy from "./components/CustomerBuy";
import AgricultureRent from "./components/AgricultureRent";
import {Helmet} from "react-helmet";

import AddOperator from './components/AddOperator';
import AdminProd from "./components/AdminProd";
import ViewFeedback from './components/ViewFeedback';
import ViewAppointments from "./components/ViewAppointment";
import OpFeeedback from "./components/OpFeedback";
import AddProductComponent from "./components/AddProductComponent";
import RoadMap from "./components/RoadMap";
import PhotoGraphy from "./components/PhotoGraphy";
import ForgotPassword from "./components/ForgotPasswordComponent";
import ChangePassword from "./components/ChangePasswordComponent";
import EditCust from "./components/EditCustomer";
import EditUser from "./components/EditOperator"
import ViewCart from "./components/Viewcart";
import ViewRentOrder from "./components/ViewRentOrder";
import ViewBuyOrders from "./components/ViewBuyOrders";
import ViewHireOrders from "./components/ViewHireOrder";
import ViewCustomerOrder from "./components/ViewCustomerOrder";
import Payment from "./components/Payment";
import Slider from "./components/Slide";

import Verificationsucc from './components/Verificationsucc'; // Check the correct path to your Verificationsucc component

function App() {
  const mystate = useSelector((state)=> state.logged);
  return (
    <div className="App Back">
	<Helmet>
                <meta charSet="utf-8" />
                <title>AeroHire</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                {/* <meta name="description" content="Helmet application" /> */}
            </Helmet>
      <div className="banner" style={{display: mystate.loggedIn ? "none":"block" }}>
    <nav className="navbar navbar-expand-sm ">
    <div className="container-fluid">
    <img src={logo} className="Logo" width="210" height="180" />
    <ul className="navbar-nav">

     <li className="nav-item">
       <Link to="/slider" className="nav-link px-3">Home</Link>
       </li>
       <li className="nav-item">
       <Link to="login" className="nav-link px-3">Login</Link>
       </li>
       <li className="nav-item">
       <Link to="products" className="nav-link px-3">Products</Link>
       </li>
       <li className="nav-item">
       <Link to="customer_reg" className="nav-link px-3">Register</Link>
       </li> 
     
    </ul>

    </div>

    </nav>
    </div>
    
    <Routes>
    <Route path="/AboutUs" element={<AboutUs/>}></Route>
<Route path="/slider" element={<Slider/>}></Route>
    <Route path="login" element={<Login/>}></Route>
<Route path="forgot" element={<ForgotPassword/>}></Route>
    <Route path="changePassword" element={<ChangePassword/>}></Route>
    {/* <Route path="/contactus" element={<contactus/>}></Route> */}
    {/* <Route path ="/contactus" Component={contactus}/> */}
    <Route path="/admin_home" element={<Admin/>}>
      <Route path="viewOperators" element={<ViewOperator/>} >
        <Route path="addoperator" element={<AddOperator/>}></Route>
      </Route>
      <Route path="viewCustomers" element={<ViewCustomer/>} />
      <Route path="viewBuyOrders" element={<ViewBuyOrders/>} />
      <Route path="viewHireOrders" element={<ViewHireOrders/>} />
      <Route path="viewFeedback" element={<ViewFeedback/>} />
      <Route path="viewProducts" element={<AdminProd/>} /> 
      <Route path="addProducts" element={<AddProductComponent/>}/>
      
    </Route>


    <Route path="products" element={<Productlist/>}></Route>
    <Route path="/logout" element={<Logout/>}></Route>
    <Route path="/customer_home" element={<Customer/>}>
	  <Route path="agre" element={<AgricultureRent/>}/> 
    <Route path="road" element={<RoadMap/>}/>  
    <Route path="photo" element={<PhotoGraphy/>}/>  
    <Route path="viewRentOrder" element={<ViewRentOrder/>}/>
    <Route path="buy" element={<CustomerBuy/>}/>
    <Route path="payment" element={<Payment/>}/> 
    <Route path="viewCart" element={<ViewCart/>}/>
	<Route path="viewMyOrders" element={<ViewCustomerOrder/>}/>
    <Route path="updateCustomer" element={<EditCust/>}/>
	</Route>
    <Route path="/operator_home" element={<Operator/>}>
      <Route path="viewAppointments" element={<ViewAppointments/>} />
      <Route path="edit"  element={<EditUser/>}/>
      <Route path="giveFeedback" element={<OpFeeedback/>} />
    </Route>
    <Route path="customer_reg" element={<CustomerReg/>}></Route>
    <Route path="/verification-success" element={<Verificationsucc/>} />
    </Routes>
    
    
    
    {/* <Footer/> */}
    </div>
   
  );
 
}

export default App;