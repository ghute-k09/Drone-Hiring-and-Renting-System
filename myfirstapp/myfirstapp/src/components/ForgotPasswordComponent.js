
import { useReducer, useState, useEffect } from "react"
import { Link,useNavigate } from "react-router-dom";
//import { toast } from 'react-toastify'
import { useDispatch } from "react-redux";
import { login } from "./slice";
import { Button } from "react-bootstrap";

const ForgotPassword = () => {

  const [question, setQuestion] = useState([]);
  const [question_id, setQuestionid]=useState('');

    useEffect( ()=>{
        const getquestion = async () => {
            const resquestion = await fetch("http://localhost:8181/getAllQuestions");
            const resques = await resquestion.json();
            setQuestion(await resques);
        }
        getquestion();

    },[]);

    const handlequestion = (event)=>{
        const getquestionid=event.target.value;
        setQuestionid(getquestionid);
    }




  const init={
    uid:"",
    answer:""
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

 const sendData=(e)=>{
  e.preventDefault();
  const reqOptions={
     method: 'POST',
     headers: {'content-type':'application/json'},
     body: JSON.stringify(info)
  }
  fetch('http://localhost:8181/forgotPassword',reqOptions)
  
  .then(resp=>{
                if(resp.ok)
                return resp.text();
                else 
                throw new Error("Server Error");
  })
  .then(text=>text.length ? JSON.parse(text): {})
  .then(obj=>{
    if(obj === 1)
    {
      console.log(obj)
       setmsg("Data Matched ");
       navigate('/changePassword')
      

    }
    else
    {
      if(obj !== 1)
    {
      console.log(obj)
      setmsg("Wrong UID or Answer ");
      

    }
       
      
    }



  })
  .catch((error)=>alert("Server Error.. Try again some time"));
}
 

  return(

    <div className=" back app" >
     
      <h1 className='title' style={{ textAlign: 'center', paddingBottom: 30 }}>
        Forgot Password
      
      </h1>
      <form >
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>

          <div className="mb-3">
      <label htmlFor="uid" className="form-label">Enter Uid:</label> 
      <input type="text" className="form-control" id="uid" name="uid" size="sm" value={info.uid}
       onChange={(e)=>dispatch({type:"update", fld:"uid", val :e.target.value})} placeholder="Enter uid"/>  
      <div id="emailHelp" className="form-text"></div>
   </div>

   <div className='mb-3'>
      <label htmlFor='question' className='label-control'> Select Question: </label>
        <select name="question" className="form-control" >
            <option value="">--Select Security Question--</option>
            {
              question.map((getques,index)=>(
            <option key={index} value={getques.question_id}>{getques.question}</option>
                ))
                }

        </select>
    </div>


 
   <div className="mb-3">
      <label htmlFor="answer" className="form-label">Enter Answer:</label> 
      <input type="text" className="form-control" id="answer" name="answer" size="sm" value={info.answer}
       onChange={(e)=>dispatch({type:"update", fld:"answer", val :e.target.value})}  placeholder="Enter Answer"/>
      <div id="emailHelp" className="form-text"></div>
   </div>
   <Button color="primary" type="submit" onClick={(e)=>{sendData(e)}}>Submit</Button>
   <Button color="secondary" type="reset" className="ms-4" onClick={()=>{dispatch({type : 'reset'})}}>Reset</Button>
   
     
     </div>
     </div>
     <div className='col'></div>
     </div>
    
  </form>
 <h5>{msg}</h5>
  </div>
  

 )
};

export default ForgotPassword;
