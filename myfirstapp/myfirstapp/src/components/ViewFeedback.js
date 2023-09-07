import {useState, useEffect } from "react"

export default function ViewFeedback()
{
    const[allop,setAllop]=useState([]);
   
    useEffect(()=>{
     fetch("http://localhost:8181/getAllFeedback")
     .then(resp=>resp.json())
     .then(ops=>setAllop(ops))
 
 
    },[]);

    return(

        <div>
          <table className = "table table-striped navbar-light bg-light">
                <thead>
                    <tr>
                        <th> Feedback Id</th>
                        <th> Feedback</th>
                        <th>Login ID</th>
                      
                    </tr>

                </thead>
                <tbody>
                {
                 allop.map(
                    employee =>
                    <tr>
                        <td> {employee.feedback_id }</td>
                        <td> {employee.feedback }</td>
                        <td> {employee.login_id.login_id }</td>    
                       
                    </tr>

            )
  
                }

                </tbody>
            </table>

        </div>
    )
}