import { useReducer, useState } from "react"
import { Link,useNavigate } from "react-router-dom";
//import { toast } from 'react-toastify'
import { useDispatch } from "react-redux";
import { login } from "./slice";
import { Button } from "react-bootstrap";
import '../App.css';


export default function Login()
{
    const init={
      uid:"",
      pwd:""
      
     }
     
   const reducer=(state,action)=>{
      switch(action.type)
      {
         case 'update': 
            return {...state,[action.fld]:action.val}
            case 'reset':
               return init;
      }

   }
   const[info,dispatch]=useReducer(reducer,init);
   const[msg,setmsg]=useState("");
   const navigate=useNavigate();
   const reduxAction = useDispatch();
   const isDisabled = !info.uid || !info.pwd;
   const sendData=(e)=>{
    e.preventDefault();
    const reqOptions={
       method: 'POST',
       headers: {'content-type':'application/json'},
       body: JSON.stringify(info)
    }
    fetch('http://localhost:8181/checkLogin',reqOptions)
    .then(resp=>{
                  if(resp.ok)
                  return resp.text();
                  else 
                  throw new Error("Server Error");
    })
    .then(text=>text.length ? JSON.parse(text): {})
    .then(obj=>{
      if(Object.keys(obj).length === 0)
      {
         setmsg("Wrong UID");
        

      }
      else
      {
         if(obj.status === false)
         {
            alert("Request not approved");
            navigate('/')
         }
         else
         {
            reduxAction(login());
            localStorage.setItem("currentUser",JSON.stringify(obj));
            if(obj.role_id.role_id==1)
            {
              navigate("/admin_home");
            }
            else if(obj.role_id.role_id==2)
            {
               navigate("/operator_home");  
            }
            else if(obj.role_id.role_id==3)
            {
               navigate("/customer_home");
            }
           
         }
      }



    })
    .catch((error)=>alert("Server Error.. Try again some time"));
    

   }

   return(

      <div className=" back app" >
       
        <h1 className='title' style={{ textAlign: 'center', paddingBottom: 30 }} style={{color: "InactiveBorder"}}>
        Sign in
        </h1>
        <form >
        <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <div className='form'>

            <div className="mb-3">
        <label htmlFor="uid" className="form-label" style={{color: "white"}}>Enter Uid:</label> 
        <input type="text" className="form-control" id="uid" name="uid" size="sm" value={info.uid}
         onChange={(e)=>dispatch({type:"update", fld:"uid", val :e.target.value})} placeholder="Enter ID"/>  
      
     </div>


   
     <div className="mb-3">
        <label htmlFor="pwd" className="form-label" style={{color: "white"}}>Enter Password:</label> 
        <input type="password" className="form-control" id="pwd" name="pwd" size="sm" value={info.pwd}
         onChange={(e)=>dispatch({type:"update", fld:"pwd", val :e.target.value})}  placeholder="Enter Password"/>
       
     </div>
     <Button color="primary" type="submit" onClick={(e)=>{sendData(e)}}  disabled={isDisabled}>Submit</Button>
     <Button color="secondary" type="reset" className="ms-4" onClick={()=>{dispatch({type : 'reset'})}}>Reset</Button>
     <br/>
     <br/>
   
     <Link to="/forgot" className="nav-link px-3" style={{color: "white"}}>Forgot Password?</Link>
       
       </div>
       </div>
       <div className='col'></div>
       </div>
      
    </form>

   <h3>{msg}</h3>
    </div>
    

   )

}