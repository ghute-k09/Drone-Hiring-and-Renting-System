import { Link, Route ,Routes, Outlet} from 'react-router-dom';
import Login from './homepage';
import Logout from './Logout';
import ViewOperator from './ViewOperator';
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
export default function Admin()
{
    return(
    <div className='Back'>
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
            <ul className="navbar-nav">
		<UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              View Orders
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem> <Link to="viewBuyOrders" className="nav-link px-3">Buy Orders</Link></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><Link to="viewHireOrders" className="nav-link px-3">Hiring Orders</Link> </DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <li className="nav-item">
            <Link to="viewOperators" className="nav-link px-3">View Operators</Link>
            </li>
            <li className="nav-item">
            <Link to="viewCustomers" className="nav-link px-3">View Customers</Link>
            </li>
           
            <li className="nav-item">
            <Link to="viewProducts" className="nav-link px-3">Products</Link>
            </li>
		<li className="nav-item">
            <Link to="addproducts" className="nav-link px-3">Add Products</Link>
            </li>
            <li className="nav-item">
            <Link to="viewFeedback" className="nav-link px-3">Feedbacks</Link>
            </li>
	    
            <li className="nav-item">
            <Link to="/logout" className="nav-link px-3">Logout</Link>
            </li> 
            </ul>

            </div>
            

        </nav>

        <h1>Welcome Admin</h1>
         <Outlet />

    </div>
    )
}