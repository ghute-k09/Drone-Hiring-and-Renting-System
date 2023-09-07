import React, { useReducer, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { json, useNavigate } from "react-router-dom";
//import { container } from "react-bootstrap"




export default function CustomerReg(){


   // const [state, Dispatch] = useReducer(reducer, init);

   const init={
    uid:{ value: "", touched: false, valid: false, error: "" },
    pwd:{ value: "", touched: false, valid: false, error: "" },
    fname:{ value: "", touched: false, valid: false, error: "" },
    mname:{ value: "", touched: false, valid: false, error: "" },
    lname:{ value: "", touched: false, valid: false, error: "" },
    email:{ value: "", touched: false, valid: false, error: "" },
    contact:{ value: "", touched: false, valid: false, error: "" },
    area:{ value: "", touched: false, valid: false, error: "" },
    city:{ value: "", touched: false, valid: false, error: "" },
    pincode:{ value: "", touched: false, valid: false, error: "" },
    question_id:{ value: "", touched: false, valid: true, error: "" },
    answer:{ value: "", touched: false, valid: false, error: "" },
    formvalid:false

   };


   const reducer = (state,action) => {
    switch(action.type){
        case 'update':
                       const {name, value, touched, valid,error,formvalid} = action.data
                       //console.log(formvalid)
                       return {...state, [name]: {value, touched, valid, error}, formvalid }
                       
        case 'reset':
                      return init;        
  
    }
  }




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



    
  
     
     const[info,dispatch]=useReducer(reducer,init);
     const [msg, setMsg] = useState("");
     const navigate = useNavigate();
     

     

     const validateData = (name, value) => {
    let valid = false;
    let error = "";
    switch (name) {
      case "uid":
        var pattern1 = /^[A-Z]{1}[a-z]{1,}[!@#$%^&]{0,}[0-9]{0,}$/;
        if (pattern1.test(value)) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "User Id invalid";
        }
        break;

        case 'pwd':  var pattern2 = /^[A-Za-z]{1,}[!@#$%^&]{0,}[0-9]{1,}$/
            //password should
                                if(pattern2.test(value))
                                {
                                valid = true;
                                error = "";
                                }
                                else
                                {
                                valid = false;
                                error = "Password should contain least one uppercase one special chars and numerals "
                                }
                              break;
      case "fname":
        var pattern3 = /^[A-Za-z]{2,15}$/;
        if (pattern3.test(value)) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "First name invalid";
        }
        break

        case 'mname':  var pattern4 = /^[A-Za-z]{0,15}$/
                              if(pattern4.test(value))
                              {
                                valid = true;
                                error = "";
                               }
                               else
                               {
                                valid = false;
                                error = "Middle name invalid"
                               }
                              break;
            case 'lname':  var pattern5 = /^[A-Za-z]{2,15}$/
                              if(pattern5.test(value))
                              {
                                valid = true;
                                error = "";
                               }
                               else
                               {
                                valid = false;
                                error = "Last name invalid"
                               }
                              break;
            case 'email':     var pattern6 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                              if(pattern6.test(value))
                              {
                                valid = true;
                                error = "";
                              }
                              else
                              {
                                valid = false;
                                error = "Email invalid"
                              }
                              break;
            
            case 'contact':  var pattern7 = /^[0-9]{10}$/
                              
                                                  if(pattern7.test(value))
                                                  {
                                                  valid = true;
                                                  error = "";
                                                  }
                                                  else
                                                  {
                                                  valid = false;
                                                  error = "contactno should contain 10 numerals"
                                                  }
                                                break;        
            case 'area':  var pattern8 = /^[\s\S]*\S[\s\S]*$/
                                                //password should
                                                  if(pattern8.test(value))
                                                  {
                                                  valid = true;
                                                  error = "";
                                                  }
                                                  else
                                                  {
                                                    valid = false;
                                                      error = "invalid address"
                                                  }
                                                  break;                                                    
            case 'city':  var pattern9 = /^[\s\S]*\S[\s\S]*$/
                                                //password should
                                                  if(pattern9.test(value))
                                                  {
                                                  valid = true;
                                                  error = "";
                                                  }
                                                  else
                                                  {
                                                    valid = false;
                                                      error = "invalid address"
                                                  }
                                                  break;   
      
            case 'pincode':  var pattern11 = /^[0-9]{6}$/
                                                
                                                  if(pattern11.test(value))
                                                  {
                                                  valid = true;
                                                  error = "";
                                                  }
                                                  else
                                                  {
                                                    valid = false;
                                                      error = "invalid address"
                                                  }
                                                  break;
           case 'question_id':  var pattern12 =   /^[0-9]{4}$/
                                                valid=true;
                                                  /*if(pattern12.test(value))
                                                  {
                                                  valid = true;
                                                  error = "";
                                                  }
                                                  else
                                                  {
                                                    valid = false;
                                                      error = "invalid question id"
                                                  }*/
                                                  break;
            case 'answer':  var pattern13 = /^[\s\S]*\S[\s\S]*$/
                                                
                                                  if(pattern13.test(value))
                                                  {
                                                    valid = true;
                                                    error = "";
                                                  }
                                                  else
                                                  {
                                                    valid = false;
                                                    error = "invalid answer"
                                                  }
                                                  break;       
                              
                          
        }
        return {valid, error};
    }

    const handleChange = (name,value) => {
        const {valid,error} = validateData(name,value)
        let formvalid = true;
        if(info.uid.valid === true && info.pwd.valid === true && info.fname.valid === true && info.lname.valid === true && info.email.valid === true && info.contact.valid === true && info.area.valid === true && info.city.valid === true && info.pincode.valid === true && info.question_id.valid === true && info.answer.valid === true)
            formvalid = true;
        for(const key in info)
        {
            console.log(key+" : "+info[key].valid )
            if(info[key].valid === false)
            {
                formvalid = false;
                break;
            }
        }  
        console.log(formvalid)  
        dispatch({type: 'update', data: {name,value,touched: true, valid, error,formvalid} })
        // dispatch({ type: 'update', data: { name, value, formvalid } })
    }

    const onFocusout = (name,value) => {
      const {valid,error} = validateData(name,value)
      let formvalid = true;
      if(info.uid.valid === true && info.pwd.valid === true && info.fname.valid === true && info.lname.valid === true && info.email.valid === true && info.contact.valid === true && info.area.valid === true && info.city.valid === true && info.pincode.valid === true && info.question_id.valid === true && info.answer.valid === true)
          formvalid = true;
      for(const key in info)
      {
          console.log(key+" : "+info[key].valid )
          if(info[key].valid === false)
          {
              formvalid = false;
              break;
          }
      }  
      dispatch({type: 'update', data: {name,value,touched: true, valid, error,formvalid} })
  }

  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          uid:info.uid.value,
          pwd:info.pwd.value,
          fname: info.fname.value,
          mname: info.mname.value,
          lname: info.lname.value,
          email: info.email.value,
          contact: info.contact.value,
          area: info.area.value,
          city: info.city.value,
          pincode: info.pincode.value,
          question_id: info.question_id.value,
          answer: info.answer.value
        })

    }

    fetch("http://localhost:8181/regCustomer", reqOptions)
        //.then(res => console.log(res))
        //.then(resp => console.log(resp))
        // .then(resp => resp.json())
         .then(obj => console.log(JSON.stringify(obj)))
        .then(resp => {
            if (resp.ok)
                return resp.text();
            else
                throw new Error("Server Error.");

        })
        .then(text => text.length ? JSON.parse(text) : {})
        .then(obj => {
            if (Object.keys(obj).length === 0) {
                setMsg("Somthing Wrong.");
            }
            else {
                alert('You have registed sucessfully. Try Login....')
                navigate("/");

            }
        })
        .catch((error) =>{
          alert("You have registed sucessfully. Try Login....");
          navigate("/login");
        } )
}


    return(

        <div className=" Back " >
       
        <h1 className='title' style={{ textAlign: 'center', paddingBottom: 30 }} style={{color: "whitesmoke"}}  >
        Customer Registration
        </h1>
        <form>
        <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <div className='form'>

              <div className='mb-3'>
                <label htmlFor='uid' className='label-control' style={{color: "white"}} > Enter Uid: </label>
                <input  id="uid" name="uid" size="sm" onChange={(e)=> handleChange("uid",e.target.value)} 
                         onBlur={(e)=> onFocusout("uid",e.target.value)}
                  type='text' className='form-control' placeholder= 'Enter UID' />
                   <div className="error-msg"> {info.uid.error}</div>
              </div>


       
             <div className='mb-3'>
                <label htmlFor='pwd' className='label-control' style={{color: "white"}}> Enter Password: </label>
                <input  id="pwd" name="pwd" size="sm" onChange={(e)=> handleChange("pwd",e.target.value)} 
                         onBlur={(e)=> onFocusout("pwd",e.target.value)}
                  type='text' className='form-control' placeholder= 'Enter Password' />
                   <div className="error-msg"> {info.pwd.error}</div>
              </div>


             
              <div className='mb-3'>
                <label htmlFor='fname' className='label-control' style={{color: "white"}}> Enter fname: </label>
                <input  id="fname" name="fname" size="sm" onChange={(e)=> handleChange("fname",e.target.value)} 
                         onBlur={(e)=> onFocusout("fname",e.target.value)}
                  type='text' className='form-control' placeholder= 'Enter fname' />
                   <div className="error-msg"> {info.fname.error}</div>
              </div>

         

              <div className='mb-3'>
                <label htmlFor='mname' className='label-control' style={{color: "white"}}> Enter mname: </label>
                <input  id="mname" name="mname" size="sm" onChange={(e)=> handleChange("mname",e.target.value)} 
                         onBlur={(e)=> onFocusout("mname",e.target.value)}
                      type='text' className='form-control' placeholder= 'Enter mname' />
                   <div className="error-msg"> {info.mname.error}</div>
              </div>

             

              <div className='mb-3'>
                <label htmlFor='lname' className='label-control' style={{color: "white"}}> Enter lname: </label>
                <input  id="lname" name="lname" size="sm" onChange={(e)=> handleChange("lname",e.target.value)} 
                         onBlur={(e)=> onFocusout("lname",e.target.value)} 
                          type='text' className='form-control' placeholder= 'Enter lname' />
                   <div className="error-msg"> {info.lname.error}</div>
              </div>

             

              <div className='mb-3'>
                <label htmlFor='email' className='label-control' style={{color: "white"}}> Enter email: </label>
                <input  id="email" name="email" size="sm" onChange={(e)=> handleChange("email",e.target.value)} 
                         onBlur={(e)=> onFocusout("email",e.target.value)}  
                  type='text' className='form-control' placeholder= 'Enter email' />
                   <div className="error-msg"> {info.email.error}</div>
              </div>


              <div className='mb-3'>
                <label htmlFor='contact' className='label-control' style={{color: "white"}}> Enter contact: </label>
                <input  id="contact" name="contact" size="sm" onChange={(e)=> handleChange("contact",e.target.value)} 
                         onBlur={(e)=> onFocusout("contact",e.target.value)}  
                     type='text' className='form-control' placeholder= 'Enter contact' />
                   <div className="error-msg"> {info.contact.error}</div>
              </div>


              <div className='mb-3'>
                <label htmlFor='area' className='label-control' style={{color: "white"}}> Enter area: </label>
                <input  id="area" name="area" size="sm" onChange={(e)=> handleChange("area",e.target.value)} 
                         onBlur={(e)=> onFocusout("area",e.target.value)} 
                type='text' className='form-control' placeholder= 'Enter area' />
                   <div className="error-msg"> {info.area.error}</div>
              </div>

            

              <div className='mb-3'>
                <label htmlFor='city' className='label-control' style={{color: "white"}}> Enter city: </label>
                <input  id="city" name="city" size="sm" onChange={(e)=> handleChange("city",e.target.value)} 
                         onBlur={(e)=> onFocusout("city",e.target.value)}  
                    type='text' className='form-control' placeholder= 'Enter city' />
                   <div className="error-msg"> {info.city.error}</div>
              </div>

          

              <div className='mb-3'>
                <label htmlFor='pincode' className='label-control' style={{color: "white"}}> Enter pincode: </label>
                <input  id="pincode" name="pincode" size="sm" onChange={(e)=> handleChange("pincode",e.target.value)} 
                         onBlur={(e)=> onFocusout("pincode",e.target.value)}   
                        type='text' className='form-control' placeholder= 'Enter pincode' />
                   <div className="error-msg"> {info.pincode.error}</div>
              </div>

             

              <div className='mb-3'>
                <label htmlFor='question' className='label-control' style={{color: "white"}}> Enter question: </label>
                <select name="question" className="form-control" onChange={(e)=> handleChange("question_id",e.target.value)} 
                         onBlur={(e)=> onFocusout("question_id",e.target.value)}>
                        <option value="" style={{color: "white"}}>--Select Security Question--</option>
                        {
                            question.map((getques,index)=>(
                                <option key={index} value={getques.question_id}>{getques.question}</option>
                            ))
                        }

                    </select>
                </div>

              
              <div className='mb-3'>
                <label htmlFor='answer' className='label-control' style={{color: "white"}}> Enter answer: </label>
                <input  id="answer" name="answer" size="sm" onChange={(e)=> handleChange("answer",e.target.value)} 
                         onBlur={(e)=> onFocusout("answer",e.target.value)}   
                         type='text' className='form-control' placeholder= 'Enter answer' />
                   <div className="error-msg"> {info.answer.error}</div>
              </div>
              



                <Button color="success" disabled={!info.formvalid} onClick={(e)=>{sendData(e)}}>Submit</Button>
                <Button color="secondary" type="reset" className="ms-3" onClick={()=>{dispatch({type : 'reset'})}}>reset</Button>
           
         
           
            <br/>
       <br/>
       <br/>
            </div>
          </div>
          <div className='col'></div>
        </div>
        </form>
      </div>
        
        
    )
}