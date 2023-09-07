import { useReducer, useState, useEffect } from "react"
import { useNavigate, Outlet } from "react-router-dom";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { login } from "./slice";
import Admin from "./AdminHome";
import { Link, Route ,Routes} from 'react-router-dom';
import axios from "axios";
export default function ViewOperator()
{
    const navigate=useNavigate();
   const reduxAction = useDispatch();
    
  /* const[allop,setAllop]=useState([]);
   
   useEffect(()=>{
    fetch("http://localhost:8080/getAllOp")
    .then(resp=>resp.json())
    .then(ops=>setAllop(ops))


   },[]);*/

    const [users,setUser]=useState([])
    useEffect(()=>{
        getUsers();
    },[])

    function getUsers()
    {
        fetch("http://localhost:8181/getAllOp")
        .then((result)=>{result.json()
             .then((resp)=>{
                setUser(resp)
                setName(resp[0].fname)
                setEmail(resp[0].email)
                setStatus(resp[0].status)
            })
        })
        
    }
    //console.warn(users)

    function changeStatusFalse(operator_id)
    {
       
        fetch("http://localhost:8181/setStatusFalse?operator_id="+operator_id,{
            mode: 'no-cors',
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            
        
        }).then((result)=>{ result.json().then((resp)=>{
                console.log(resp);
                getUsers();
            })
        })
        
    }

    function changeStatusTrue(operator_id)
    {
      
        fetch("http://localhost:8181/setStatusTrue?operator_id="+operator_id,{
            mode: 'no-cors',
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            
        
        }).then((result)=>{ result.json().then((resp)=>{
                console.log(resp);
                getUsers();
            })
        })
        
    }


    const[fname,setName] = useState("");
    const[email,setEmail] = useState("");
    const[status,setStatus] = useState("");

    function selectUser(operator_id)
    {
        console.warn(users[operator_id-1])
        setName(users[operator_id-1].fname)
        setEmail(users[operator_id-1].email)
        setStatus(users[operator_id-1].status)
    }

 return(
    <div>
       <table className = "table table-striped navbar-light bg-light">
                <thead>
                    <tr>
                        <th> Operator Id</th>
                        <th> First Name</th>
                        <th> Last Name</th>
                        <th> Email</th>
                        <th>Status</th>
                        </tr>

                </thead>
                <tbody>
                    {
                        users.map(
                                employee =>
                                <tr key = {employee.operator_id}>
                                    <td> {employee.operator_id }</td>
                                    <td> {employee.fname }</td>
                                    <td> {employee.lname }</td>    
                                    <td> {employee.email }</td>
                                    <td> {employee.status.toString()}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={()=>changeStatusFalse(employee.operator_id)} disabled={!(employee.status)}>Deactivate</button>
                                    </td>
                                    <td><button className="btn btn-primary" onClick={()=>changeStatusTrue(employee.operator_id)} disabled={(employee.status)}>Activate</button></td>
                                    

                                </tr>

                        )
                    }

                </tbody>
            </table>
            <div>
                <Button color="primary"><Link to="addoperator" className="btn btn--success" >Add</Link></Button>
            </div>
            <Outlet></Outlet>
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
