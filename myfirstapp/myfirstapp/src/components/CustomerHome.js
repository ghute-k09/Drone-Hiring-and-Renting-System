import { Link, Outlet} from 'react-router-dom';
import logo from "../image/Drona1.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

export default function Customer()
{
    return(
    <div className='Back'>
        <nav className="navbar navbar-expand-sm b ">
            <div className="container-fluid">
                
    <img src={logo} class="Logo" width="210" height="180" />
            <ul className="navbar-nav">
          
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Rent Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem> <Link to="agre" className="nav-link px-3">Agriculture</Link></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><Link to="road" className="nav-link px-3">Road Mapping</Link> </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <Link to="photo" className="nav-link px-3">PhotoGraphy</Link>   
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <li className="nav-item">
            <Link to="buy" className="nav-link px-3">Buy Products</Link>
            </li>
            <li className="nav-item">
            <Link to="viewCart" className="nav-link px-3">View Cart</Link>
            </li>
		<li className="nav-item">
            <Link to="viewMyOrders" className="nav-link px-3"> My Orders</Link>
            </li>
            <li className="nav-item">
            <Link to="updateCustomer" className="nav-link px-3">Update Profile</Link>
            </li>
            <li className="nav-item">
            <Link to="/logout" className="nav-link px-3">Logout</Link>
            </li> 
            </ul>

            </div>
           
        </nav>

        
          <Outlet></Outlet>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>


        

    </div>
    )
}