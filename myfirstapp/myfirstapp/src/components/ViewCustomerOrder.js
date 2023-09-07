import React from 'react';
import { useEffect, useState } from 'react';

function ViewCustomerOrder() {
    const[allorders,setAllOrders] = useState([]);
    //const [login_id, setLogin_id] = useState();

    var user = JSON.parse(localStorage.getItem('currentUser'));
    //setLogin_id(user.login_id);
    //alert(user.login_id)


    useEffect(()=>{
        fetch("http://localhost:8181/viewMyOrder?login_id="+user.login_id)
        .then(resp=>resp.json())
        .then(os=>setAllOrders(os))  
       },[]);

       return(

        <div>
        <table className = "table table-white table-striped navbar-light bg-light">
                 <thead>
                     <tr>
                         <th> Order Id</th>
                         <th> Customer Id</th>
                         <th> Customer Name</th>
                         <th> Order Date</th>
                         <th> Order Status</th>
                         <th> Order Type</th>
                         <th> Operator Id</th>
                         <th> Operator Name</th>
                     </tr>
 
                 </thead>
                 <tbody>
                     {
                         allorders.map(
                                 os =>
                                 <tr>
                                     <td> {os.order_id }</td>
                                     <td> {os.customer_id.customer_id}</td>
                                     <td> {os.customer_id.fname}</td>    
                                     <td> {os.order_date}</td>
                                     <td> {os.order_status.toString()}</td>
                                     <td> {os.order_type_id.order_type}</td>
                                     <td> {os?.operator_id?.operator_id }</td>
                                     <td> {os?.operator_id?.fname}</td>
                                     
                                 </tr>

                         )
                         
                         
                     }
                 </tbody>
             </table>
            
            
     </div>
       )
}

export default ViewCustomerOrder;
