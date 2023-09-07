import { useEffect, useState } from "react";

export default function ViewAppointments()
{
    const[allapps,setAllApp] = useState([]);

    useEffect(()=>{
        const operator_id= JSON.parse(localStorage.getItem("currentOp")).operator_id;

        fetch("http://localhost:8181/getByOp?operator_id="+operator_id)
        .then(resp=>resp.json())
        .then(aps=>setAllApp(aps))  
       },[]);
    

       function changeStatusFalse(order_id)                   //this to change Order Status
       {
           alert(order_id)
           fetch("http://localhost:8181/setFalseOrder?order_id="+order_id,{
               mode: 'no-cors',
               method: "GET",
               headers: {
                   "Content-Type": "application/json"
               }
           })
           .then((result)=> result.json())
           .then((resp)=>console.log(resp))      
       }
       
       function changeStatusTrue(order_id)                    //this to change Order Status
       {
           alert(order_id)
           fetch("http://localhost:8181/setTrueOrder?order_id="+order_id,{
               mode: 'no-cors',
               method: "GET",
               headers: {
                   "Content-Type": "application/json"
               }
           })
           .then((result)=> result.json())
           .then((resp)=>console.log(resp))      
       }

       return(

        <div>
        <table className = "table table-striped navbar-light bg-light">
                 <thead>
                     <tr>
                         <th> Order Id</th>
                         <th> Customer First Name</th>
                         <th> Customer Last Name</th>
                         <th> Customer Contact</th>
                         <th> Customer Area</th>
                         <th> Customer City</th>
                         <th> Customer Pincode</th>
                         <th> Assignment Date</th>
                         <th> Order Status</th>
                         <th>Change Order Status</th>
                     </tr>
 
                 </thead>
                 <tbody>
                     {
                         allapps.map(
                                 apps =>
                                 <tr>
                                     <td> {apps.order_id }</td>
                                     <td> {apps.customer_id.fname }</td>
                                     <td> {apps.customer_id.lname }</td>
                                     <td> {apps.customer_id.contact }</td>
                                     <td> {apps.customer_id.address_id.area }</td>
                                     <td> {apps.customer_id.address_id.city }</td>
                                     <td> {apps.customer_id.address_id.pincode }</td>
                                     <td> {apps.assignment_date }</td>
                                     <td> {apps.order_status.toString() }</td>
                                     <td><button className="btn btn-primary" onClick={()=>changeStatusTrue(apps.order_id )} disabled={(apps.order_status)}>Completed</button>  </td>
                                     <td><button className="btn btn-primary" onClick={()=>changeStatusFalse(apps.order_id )} disabled={!(apps.order_status)}>Incomplete</button>  </td>

                                 </tr>
                         )
                     }
                 </tbody>
             </table>
     </div>
       )
}