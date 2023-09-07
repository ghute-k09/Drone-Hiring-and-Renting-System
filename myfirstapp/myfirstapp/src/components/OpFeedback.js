import {  useState } from "react"
import { Button } from "react-bootstrap";

export default function OpFeeedback()
{
    
    const[msg,setmsg]=useState("");


    const sendData =(e)=>{
        
        e.preventDefault();
        const loginid= JSON.parse(localStorage.getItem("currentUser")).login_id;
        const reqOptions={
        method: 'POST',
        headers: {'content-type':'application/json'},
    
        }
        fetch('http://localhost:8181/giveFeedbackbyOperator?loginid='+loginid+'&msg='+msg,reqOptions)
        .then(resp=> {
           alert("Feedback Submitted");
        })
        
        

 }

    return(
        <div>
            <div class="form-group purple-border-focus">
             <label for="opFeedback">Enter Feedback : </label>
            <textarea class="form-control" id="opfb" rows="3" cols="3" value={msg} onChange={(e)=>setmsg(e.target.value)} placeholder= 'Enter Feedback' ></textarea>
        </div>
        
              <button className="btn btn-primary" color="primary" type="submit" onClick={(e)=>{sendData(e)}} >Submit</button>
              <h4>{msg}</h4>
        </div>
    )
}