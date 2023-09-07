import { useReducer, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { Table  } from "react-bootstrap";

export default function Customer()
{
    const navigate=useNavigate();
    const reduxAction = useDispatch(); 
  
    /*   
    const [data,setData]=useState([]);
    useEffect(()=>{
      let result =fetch("")
    },[])
*/


    const[allop,setAllop]=useState([]);
    
    useEffect(()=>{
     fetch("http://localhost:8181/getAllProd")
     .then(resp=>resp.json())
     .then(ops=>setAllop(ops))
 
 
    },[]);
    return(
        <div>
        <table className = "table table-striped">
           
                
                <div className='container'>
                <div className='row'>
              
                    <div class="col-md-8"  >
      <div class="card-body">
    
      <tbody>
                    {
                        allop.map(
                                product =>
                                <tr key = {product.product_id}>

<div className='col-md-8'>
         
         <img src="https://media.wired.com/photos/59264baf7034dc5f91beaf03/master/w_2560%2Cc_limit/DroneTA_GettyImages-599365398.jpg" class="img-fluid rounded-start" alt="..."/>
                           </div>
                                    <td> {product.imageA }</td>
                               
                                    
                                    <td> {product.pname }</td>
                                    <br/>
                                    <td> {product.description }</td>
                                    <td>  price=
                                   {product.price }    </td>
                                   <td>
                                    product=<br/>
                                 
                                     {product.deposite }</td>
                                     
             <Button color="primary" ><Link to="/login" className="nav-link px-3">Buy</Link></Button>
                                     
                                    
                                <br/>
                                <br/>
                                <br/>

                                </tr>
                        )
                    }

                </tbody>
    
    <br/><br/>
    <br/><br/><br/><br/>      </div>
    </div>

<br/>
                
                </div>
                </div>
                
                





                            </table>

                            
                            </div>
    )
}