import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
export default function Payment()
{
    const[cust,setCust]=useState();
    const[orders,setOrder]=useState();
    const[totalp,setTotal]=useState(0);
    const[tr_id,setTr]=useState();
    const[payment_mode, setPaymentType] = useState(" ");
    const logid=JSON.parse(localStorage.getItem("currentUser")).login_id;
    useEffect(()=>{
        const loginid= JSON.parse(localStorage.getItem("currentUser")).login_id;
        setTotal(JSON.parse(localStorage.getItem("totalprice")));
        setOrder(JSON.parse(localStorage.getItem("order")));
        console.log(orders);

        fetch("http://localhost:8181/getCustomer?uid="+loginid)
        .then(resp=>resp.json())
        .then(obj=>{
            setCust(obj);
            
        })  
        console.log(cust);
       },[]);
        
       const navigate=useNavigate();
       const save = (e) => {
        if (payment_mode.length == 0) alert("please select payment type..");
        else {
            e.preventDefault();
            const reqOptions={
               method: 'POST',
               headers: {'content-type':'application/json'},
               body: JSON.stringify(orders)
            }
            fetch('http://localhost:8181/savePay?amount='+totalp+'&type='+payment_mode+'&logid='+logid,reqOptions)
            .then(resp=>{
                          if(resp.ok)
                          return resp.text();
                          else 
                          throw new Error("Server Error");
            })
            .then(obj=>{
              swal({
                title: "Order Placed!",
                text: "Payment Successfull!",
                icon: "success",
                
              });
                setTr(obj);
                navigate("/customer_home");
               
            }).catch((error)=>alert("Server Error.. Try again some time"));
        }
      };

    return(

        <div>
            <h2 style={{color: "white"}}>Welcome To Payment</h2>
                <table className = "table table-white table-striped navbar-light bg-light">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Order Id</th>
                    <th scope="col">Order Date</th>
                    <th scope="col">Assignment Date</th>
                    {/* <th scope="col">Transaction ID</th> */}
                    <th scope="col">Total Amount</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{cust && cust.fname}</td>
                        <td>{cust && cust.lname}</td>
                        <td>{cust && cust.contact}</td>
                        
                        <td>{orders && orders.order_id}</td>
                        <td>{orders && orders.order_date}</td>
                        <td>{orders && orders.assignment_date}</td>
                        {/* <td>{tr_id}</td> */}
                        <td>{totalp}</td>
                        
                    </tr>
                </tbody>   
                </table>
            
                <div className="container py-5 h-100">
      <h2 style={{ textAlign: "center" }} style={{color: "white"}}>Payment Details</h2>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-6">
          <div class="col-md-6 text-left text-white lcol">
            <div class="greeting">
              <h3>
                Happy To See U In <span class="txt">Foodies</span>
              </h3>
            </div>
            <h6 class="mt-3">let's Make a Payment in Simpler Way...</h6>
            <div class="footer">
              <div class="socials d-flex flex-row justify-content-between text-white">
                <div class="d-flex flex-row">
                  <i class="fab fa-linkedin-in"></i>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row g-0">
              <div className="flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <div class="row">
                    <div class="icons">
                      <img src="https://img.icons8.com/color/48/000000/visa.png" />
                      <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />
                      <img src="https://img.icons8.com/color/48/000000/maestro.png" />
                    </div>
                  </div>
                  <form class="mx-1 mx-md-4">
                    <h5 className="fw-normal mb-3 pb-3">Payment Here</h5>
                    <div className="form-outline mb-4"></div>

                    <label htmlFor="mode-selector" className="form-label">Select Payment Type </label>
                    <select
                      id="mode-selector"
                      className="form-select"
                      onChange={(e) => {
                        setPaymentType(e.target.value);
                      }}
                    >
                      {" "}
                      <option value=""> paymentMode </option>
                      <option value="COD"> COD </option>
                      <option value="CARD"> Card </option>
                      <option value="UPI"> UPI </option>
                      <option value="NETBANKING"> Net Banking </option>
                    </select>

                    <div className="pt-1 mb-4">
                      <button
                        style={{ marginTop: "25px" }}
                        onClick={save}
                        className="btn btn-success"
                        type="button"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
        
        </div>
    )
}