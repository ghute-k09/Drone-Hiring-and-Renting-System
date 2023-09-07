import { useState, useEffect } from 'react';
import { Link, Outlet} from 'react-router-dom';
export default function Operator()
{
    const[op,setOp]=useState(null);

    useEffect(()=>{
        const loginid= JSON.parse(localStorage.getItem("currentUser")).login_id;

        fetch("http://localhost:8181/getOperator?uid="+loginid)
        .then(resp=>resp.json())
        .then(obj=>{
            localStorage.setItem("currentOp",JSON.stringify(obj));
            setOp(obj);
        })  
       },[]);

    return(
        <div className='Back'>
        <nav className="navbar navbar-expand-sm 6+v">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="viewAppointments" className="nav-link px-3">View Appointments</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="giveFeedback" className="nav-link px-3">Give Feedback</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="edit" className="nav-link px-3">Update Profile</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/logout" className="nav-link px-3">Logout</Link>
                    </li> 
                    
                </ul>
            </div>           
        </nav>
        <h2 className="Text">Welcome {op && op.fname} {op && op.lname}</h2>
         
           
        <Outlet />
        <br/>
               </div>
    )
}