import React, { useReducer, useState, useEffect } from "react"
import swal from "sweetalert";


export default function CustomerBuy()
{
   
  
    /*   
    const [data,setData]=useState([]);
    useEffect(()=>{
      let result =fetch("")
    },[])
*/


    const[allop,setAllop]=useState([]);
    //const[prod,setProd]=useState();
    
    useEffect(()=>{
     fetch("http://localhost:8181/getByProduct")
     .then(resp=>resp.json())
     .then(ops=>setAllop(ops))
        
     
 
    },[]);

  
    const AddToCart=(prod)=>
    {
        swal("Add to Cart")
        
        var items = [];

     if(localStorage.getItem('prodcart')){
         items = JSON.parse(localStorage.getItem('prodcart'));
     }
 items.push(prod)
 localStorage.setItem("prodcart",JSON.stringify(items));

    }

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
                                                    
                                                <img class="card-img-center" src={`data:image/jpeg;base64,${product && product.imageA}`} width="200" height="180"/>
                                                <b><u><h4 class="card-title" >{product.pname }</h4></u></b>
                                                    <h4 class="card-title" >{product.description }</h4>
                                                    
                                                    <h5 class="card-text">Rs{product.price }</h5><br/>
                                                    <button style={{color: "red"}}  onClick={()=>AddToCart(product)} >Buy</button> 
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
        
                                            
        
        
             

