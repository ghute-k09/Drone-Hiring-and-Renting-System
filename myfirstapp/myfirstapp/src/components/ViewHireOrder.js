import { useEffect, useState } from "react";
import swal from "sweetalert";
export default function ViewHireOrders()
{
    
    const [question, setQuestion] = useState([]);
    const [question_id, setQuestionid]=useState('');
    const [operator_id, setOperator_id] = useState('');


    useEffect( ()=>{
        const getquestion = async () => {
            const resquestion = await fetch("http://localhost:8181/getAllAvailableOperator");
            const resques = await resquestion.json();
            setQuestion(await resques);
        }
        getquestion();

    },[]);

    const handlequestion = (event)=>{
        const getquestionid=event.target.value;
        setQuestionid(getquestionid);
    }


    const[allorders,setAllOrders] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8181/getHireOrder")
        .then(resp=>resp.json())
        .then(os=>setAllOrders(os))  
       },[]);


       const handleOptionChange = (event) => {
        setOperator_id(event.target.value);
        
        /*then((result)=>{ result.json().then((resp)=>{
                console.log(resp);
               // getUsers();
            })
        })*/
    
    }

       function AssignOperator(order_id,operator)
    {
       
        fetch("http://localhost:8181/assignOperator?order_id="+order_id+"&operator_id="+operator_id,{
            mode: 'no-cors',
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            
        
        }).then((result)=>{ result.json().then((resp)=>{
                console.log(resp);
               // getUsers();
               alert("Operator Assigned")
            })
        })
        fetch("http://localhost:8181/setStatusFalse?operator_id="+operator_id,{
            mode: 'no-cors',
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        
    }

       return(

        <div>
        <table className = "table table-striped navbar-light bg-light">
                 <thead>
                     <tr>
                         <th> Order Id</th>
                         <th> Customer Id</th>
                         <th> Customer Name</th>
                         <th> Order Date</th>
                         <th> Order Status</th>
                         <th> Order Type</th>
                         <th> Operator Id</th>
                         <th> Operator Name</th>
                     </tr>
 
                 </thead>
                 <tbody>
                     {
                         allorders.map(
                                 os =>
                                 <tr>
                                     <td> {os.order_id }</td>
                                     <td> {os.customer_id.customer_id}</td>
                                     <td> {os.customer_id.fname}</td>    
                                     <td> {os.order_date}</td>
                                     <td> {os.order_status.toString()}</td>
                                     <td> {os.order_type_id.order_type}</td>
                                     <td> {os?.operator_id?.operator_id }</td>
                                     <td> {os?.operator_id?.fname}</td>
                                     <td><div className='mb-3'>
                                            <label htmlFor='operator' className='label-control'> Select Operator </label>
                                            <select name="operator" value="operator_id" className="form-control"onChange={handleOptionChange} >
                                                    <option value="">--Select Operator--</option>
                                                    {
                                                        question.map((getques,index)=>(
                                                            <option key={index} setOperator_id={getques.operator_id} value={getques.operator_id}>{getques.fname}</option>
                                                        ))
                                                    }

                                                </select>
                                    </div><button type="submit" className="btn btn-primary" onClick={()=>AssignOperator(os.order_id,operator_id)}>Submit</button></td>
                                 </tr>

                         )
                         
                         
                     }
                 </tbody>
             </table>
            
            
     </div>
       )
}