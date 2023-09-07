import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import swal from "sweetalert";
import { Button } from "reactstrap";
export default function ViewRentOrder()
{
    const rentcartprod=JSON.parse(localStorage.getItem('rentcart'));
    const loginid=JSON.parse(localStorage.getItem("currentUser")).login_id;
    const navigate=useNavigate();
    const[assigndate,setDate]=useState("");
    const [startDate,setStartDate]=useState("");
    const [endDate,setEndDate]=useState("");

    useEffect(() =>{
      var date = new Date();
      //var sdate=new Date(date.setDate(date.getDate()+1));
      //setDate(moment(sdate).format('YYYY-MM-DD'));
      var sevendate=new Date();
      var seventh_day = new Date(sevendate.setDate(sevendate.getDate()+7)); 
  
      var startdate=moment(date.setDate(date.getDate()+1)).format('YYYY-MM-DD');
      setStartDate(startdate);
      //setDate(startdate);
     let enddate=moment(seventh_day).format('YYYY-MM-DD');
     setEndDate(enddate);
      console.log("Date-"+startdate);
      console.log("NextDate-"+enddate);
      
  
    })
  

    const sendData=(e)=>{
      e.preventDefault();
      const reqOptions={
         method: 'POST',
         headers: {'content-type':'application/json'},
         body: JSON.stringify(rentcartprod)
      }
      fetch('http://localhost:8181/saveRentOrder?login_id='+loginid+'&date='+assigndate,reqOptions)
      .then(resp=>{
                    if(resp.ok)
                    return resp.json();
                    else 
                    throw new Error("Server Error");
      })
      .then(obj=>{
          swal("Lets Make Payment")
          localStorage.removeItem("rentcart");
          localStorage.setItem('totalprice', JSON.stringify(rentcartprod.rent));
        localStorage.setItem('order', JSON.stringify(obj));
        navigate("/customer_home/payment")
      }).catch((error)=>alert("Server Error.. Try again some time"));
  }

    return (
        <div>
          <h2  style={{color: "initial"}}>Your Product</h2>
          { 
                <div >
                  <h3  style={{color: "white"}}>{rentcartprod?.pname}</h3>
                  <p  style={{color: "white"}}>Rent: {rentcartprod?.rent}</p>
                  <input
                    type="date"
                    
                    id="assdate"
                    name="assdate"
                    min={startDate}
                    max={endDate}
                    value={assigndate.value}
               
                    
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    
                  />

                </div>
          } 
              <Button type="submit"  color="primary" onClick={(e)=>{sendData(e)}}  style={{color: "white"}}  className="btn btn--success" >Place Order</Button>
             
        </div>
      );
}