import React, { useReducer, useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
//import { container } from "react-bootstrap"

export default function AddProductComponent(){


    const [question, setQuestion] = useState([]);
    const [question_id, setQuestionid]=useState('');

    useEffect( ()=>{
        const getquestion = async () => {
            const resquestion = await fetch("http://localhost:8181/getAllCategory");
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
        pname:"",
        description:"",
        price:"",
        quantity:"",
        imageA:"",
        cat_id:"",
        deposite:"",
        rent:""

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
     const[file,setFile]=useState();
     const navigate = useNavigate();
     

     const sendData =(e)=>{

        e.preventDefault();
        const reqOptions={
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(info)
        }
        fetch('http://localhost:8181/addProduct',reqOptions)
        .then(resp=> {
            if(resp.ok)
                return resp.json();
            else
                throw new Error("server error");
        })
        .then(obj => {
            const fd = new FormData();
            fd.append("file", file);
            const reqOptions1={
                mode: 'no-cors',
                method: 'POST',
                body: fd
                }
                fetch('http://localhost:8181/uploadImage/'+obj.product_id,reqOptions1)
                .then(resp=>resp.json())
                .then(obj=>{
                    if(obj)
                    {
                        alert("Image uploaded successfully");
                        navigate('/admin_home');
                    }
                    else
                    {
                        alert("Reg Successful. Image is not Updated, Try Later");
                        navigate('/admin_home');
                    }
                })
            alert("Product Added Successfully ");
            navigate('/admin_home');

        })
        .catch((error)=>alert("Server error. Try Later"+error))

 }


    return(
        <div className=" Back ">
            <h1 className='title' style={{ textAlign: 'center', paddingBottom: 30 }}>Add products</h1>
            <form>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col'>
                        <div className='form'>


                <div className="mb-3">
                    <label htmlFor="pname" className="form-label" style={{color: "white"}}>Enter Product Name:</label> 
                    <input type="text" className="form-control" id="uid" name="pname" size="sm" value={info.pname} onChange={(e)=>dispatch({type:"update", fld:"pname", val :e.target.value})} ></input>  
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label" style={{color: "white"}}>Enter Description:</label> 
                    <input type="text" className="form-control" id="description" name="description" size="sm" value={info.description} onChange={(e)=>dispatch({type:"update", fld:"description", val :e.target.value})}></input>  
                    <div id="emailHelp" className="form-text"></div>
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label" style={{color: "white"}}>Enter Price:</label> 
                    <input type="number" className="form-control" id="price" name="price" size="sm" value={info.price} onChange={(e)=>dispatch({type:"update", fld:"price", val :e.target.value})} ></input>  
                    <div id="emailHelp" className="form-text"></div>
                </div>

                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label" style={{color: "white"}}>Enter Quantity:</label> 
                    <input type="number" className="form-control" id="quantity" name="quantity" size="sm" value={info.quantity} onChange={(e)=>dispatch({type:"update", fld:"quantity", val :e.target.value})} ></input>  
                    <div id="emailHelp" className="form-text"></div>
                </div>

                <div className="mb-3">
                    <label htmlFor="deposite" className="form-label" style={{color: "white"}}>Enter Deposite Required:</label> 
                    <input type="number" className="form-control" id="deposite" name="deposite" size="sm" value={info.deposite} onChange={(e)=>dispatch({type:"update", fld:"deposite", val :e.target.value})} ></input>  
                    <div id="emailHelp" className="form-text"></div>
                </div>

                <div className="mb-3">
                    <label htmlFor="rent" className="form-label" style={{color: "white"}}>Enter Rent:</label> 
                    <input type="number" className="form-control" id="rent" name="rent" size="sm" value={info.rent} onChange={(e)=>dispatch({type:"update", fld:"rent", val :e.target.value})} ></input>  
                    <div id="emailHelp" className="form-text"></div>
                </div>

        
                <div className="mb-3">
                    <label htmlFor="category" className="form-label" style={{color: "white"}}>Select Category</label> 
                    <select name="category" className="form-control" onChange={(e)=>dispatch({type:"update", fld:"cat_id", val :e.target.value})}>
                        <option value="">--Select Category--</option>
                        {
                            question.map((getques,index)=>(
                                <option key={index} value={getques.cat_id}>{getques.cat_name}</option>
                            ))
                        }

                    </select>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="imageA" className="form-label" style={{color: "white"}}>Upload Image:</label> 
                    <input type="file" className="form-control" id="imageA" name="imageA" onChange={(e)=>setFile(e.target.files[0])}></input>  
                    <div id="emailHelp" className="form-text"></div>
                </div>

                <button type="submit" className="btn btn-primary" onClick={(e)=>{sendData(e)}}>Submit</button>
                <button type="reset" className="btn btn-primary"  onClick={()=>{dispatch({type : 'reset'})}}> Reset</button>
                </div>
                </div>
                <div className='col'></div>
                </div>
            </form>
            {/* <p>{JSON.stringify(info)}</p>
            <p>{file && file.name}</p> */}
        </div>
    )
}