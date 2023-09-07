import { useReducer, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { Table  } from "react-bootstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function Productlist()
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
     fetch("http://localhost:8181/getByProduct")
     .then(resp=>resp.json())
     .then(ops=>setAllop(ops))
 
 
    },[]);
    return(
        
        
           
                
               
             
                    <div   >
      <div class="">
    
      <tbody>
                    {
                        allop.map(
                                product =>

                                    

<div class="row">
                                <div class="col-sm-12">
                                    <div class="card">
                                        <div class="card-body">
                                            
                                        <img class="card-img-center" src={`data:image/jpeg;base64,${product && product.imageA}`} width="200" height="180"/>
                                        <b><u><h4 class="card-title" >{product.pname }</h4></u></b>
                                            <h4 class="card-title" >{product.description }</h4>
                                            
                                            <h5 class="card-text">Rs{product.price }</h5><br/>
                                            <a href="/login" class="btn btn-info">Add to Cart</a>
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

                                    


     