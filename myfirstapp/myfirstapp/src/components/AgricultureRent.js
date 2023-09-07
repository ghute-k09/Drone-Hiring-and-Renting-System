import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";




export default function AgricultureRent()
{
    const navigate=useNavigate();
    


    const[allop,setAllop]=useState([]);
    
    useEffect(()=>{
     fetch("http://localhost:8181/getAgriProd")
     .then(resp=>resp.json())
     .then(ops=>setAllop(ops))
 
 
    },[]);

    const rentprodcart=(prod_obj)=>{
        localStorage.setItem("rentcart",JSON.stringify(prod_obj));
        console.log(prod_obj);
        navigate("/customer_home/viewRentOrder");
    }

    //const[msg,setMsg]=useState('');

    return(
        <div>
         
        <div className=''>
        
        <tbody>
            {
               
                                 allop.map(
                                    product =>
    
                                        
    
    <div class="row">
                                    <div class="col-sm-12">
                                        <div class="card">
                                            <div class="card-body">
                                                
                                            <img class="card-img-center" src={`data:image/jpeg;base64,${product && product.imageA}`} width="250" height="180"/>
                                                <b><u><h4 class="card-title" >{product.pname }</h4></u></b>
                                                <h4 class="card-title" >{product.description }</h4>
                                                
                                                <h5 class="card-text">Rs {product.rent }</h5><br/>
                                                <Button outline  color="primary" className="btn btn--success" onClick={()=>rentprodcart(product)} >Rent</Button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                   </div>
    
                            )
                        }
    
                    </tbody>
        
                    </div>
                    <br/>
                    <br/>
                                
                                </div>
                                
        )
}