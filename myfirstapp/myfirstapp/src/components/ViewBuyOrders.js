import { useEffect, useState } from "react";
export default function ViewBuyOrders()
{
    const[allorders,setAllOrders] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8181/getBuyOrder")
        .then(resp=>resp.json())
        .then(os=>setAllOrders(os))  
       },[]);

       return(

        <div>
        <table className = "table table-striped navbar-light bg-light">
                 <thead>
                     <tr>
                         <th> Order Id</th>
                         <th> Customer Id</th>
                         <th> Customer Name</th>
                         <th> Order Date</th>
                         <th> Order Status</th>
                         <th> Order Type</th>
                         
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
                                     
                                  
                                 </tr>

                         )
                         
                         
                     }
                 </tbody>
             </table>
            
            
     </div>
       )
}