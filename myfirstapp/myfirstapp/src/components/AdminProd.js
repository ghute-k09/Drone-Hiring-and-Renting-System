import {  useState, useEffect } from "react"
import { Button } from "reactstrap";
export default function AdminProd()
{
    
     
    const[allop,setAllop]=useState([]);

    
    useEffect(()=>{
     fetch("http://localhost:8181/getAllProd")
     .then(resp=>resp.json())
     .then(ops=>setAllop(ops))
 
 
    },[]);

    function changeStatusFalse(product_id)
    {
        alert(product_id)
        fetch("http://localhost:8181/setProductStatusFalse?product_id="+product_id,{
            mode: 'no-cors',
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            
        
        }).then((result)=>{ result.json().then((resp)=>{
                console.log(resp);
                //getUsers();
            })
        })
        
    }

    function changeStatusTrue(product_id)
    {
        alert(product_id)
        fetch("http://localhost:8181/setProductStatusTrue?product_id="+product_id,{
            mode: 'no-cors',
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            
        
        }).then((result)=>{ result.json().then((resp)=>{
                console.log(resp);
                //getUsers();
            })
        })
        
    }



    return(
        <div>
        <table className = "table table-striped navbar-light bg-light">
                 <thead>
                     <tr>
                            <th>Image</th>
                            <th>Pname</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Deposite</th>
                            <th>Rent</th>
                            <th>Status</th>
                            </tr>
            </thead>
            <tbody>
                    {
                        allop.map(
                                product =>
                                <tr >
                                    <td><img src={`data:image/jpeg;base64,${product && product.imageA}`} width="100" height="100"></img> </td>
                                    <td> {product.pname }</td>
                                    <td> {product.price }</td>    
                                    <td> {product.quantity }</td>
                                    <td> {product.cat_id.cat_name }</td>
                                    <td> {product.deposite }</td>
                                    <td> {product.rent }</td>
                                    <td> {product.status.toString() }</td>
                                    <td>
                                        <Button onClick={()=>changeStatusFalse(product.product_id)} disabled={!(product.status)}>Deactivate</Button>
                                    </td>
                                    <td><Button  onClick={()=>changeStatusTrue(product.product_id)} disabled={(product.status)}>Activate</Button></td>
                                </tr>
                        )
                    }

                </tbody>
         </table>
         </div>
    )
}