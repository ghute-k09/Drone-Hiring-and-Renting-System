import { useEffect, useState } from "react";

export default function ViewCustomer()
{
    
    const[allcust,setAllCust] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8181/getAllCust")
        .then(resp=>resp.json())
        .then(ops=>setAllCust(ops))  
       },[]);

    return(

        <div>
        <table className = "table table-striped navbar-light bg-light">
                 <thead>
                     <tr>
                         <th> Customer Id</th>
                         <th> Customer First Name</th>
                         <th> Customer Last Name</th>
                         <th> Customer Email</th>
                         <th> Customer Contact</th>
                         <th> Customer Area</th>
                     </tr>
 
                 </thead>
                 <tbody>
                     {
                         allcust.map(
                                 custs =>
                                 <tr>
                                     <td> {custs.customer_id }</td>
                                     <td> {custs.fname}</td>
                                     <td> {custs.lname}</td>    
                                     <td> {custs.email}</td>
                                     <td> {custs.contact}</td>
                                     <td> {custs.address_id.area}</td>
                                 </tr>

                         )
                     }
                 </tbody>
             </table>
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