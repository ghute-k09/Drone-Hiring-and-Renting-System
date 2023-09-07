import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function ViewCart ()  
{
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => 
  {
    const cart = localStorage.getItem('prodcart');
    if (cart) 
    {
      const parsedCart = JSON.parse(cart);
      setCartItems(parsedCart);
      setTotalPrice(calculateTotalPrice(parsedCart));
    }
  }, []);

  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }

  const removeItem = (index) => {
    const newCart = [...cartItems];
    const removedItem = newCart.splice(index, 1)[0];
    setCartItems(newCart);
    setTotalPrice(totalPrice - removedItem.price);
    localStorage.setItem('prodcart', JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
    localStorage.removeItem('prodcart');
  };

  const loginid=JSON.parse(localStorage.getItem("currentUser")).login_id;
  const navigate=useNavigate();

  const sendData=(e)=>{
    e.preventDefault();
    const reqOptions={
       method: 'POST',
       headers: {'content-type':'application/json'},
       body: JSON.stringify(cartItems)
    }
    fetch('http://localhost:8181/saveOrder?login_id='+loginid,reqOptions)
    .then(resp=>{
                  if(resp.ok)
                  return resp.json();
                  else 
                  throw new Error("Server Error");
    })
    .then(obj=>{
      swal("Lets Make Payment");
        localStorage.removeItem("prodcart");
        console.log(obj);
        localStorage.setItem('totalprice', JSON.stringify(totalPrice));
        localStorage.setItem('order', JSON.stringify(obj));
        navigate("/customer_home/payment")
    }).catch((error)=>alert("Server Error.. Try again some time"));
}

  return (
    <div>
      <h1 style={{color: "white"}}> Your Cart</h1>
      {cartItems.length === 0 ? (
        <h2 style={{color: "white"}}>Your cart is empty.</h2>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index}>
              <b><h3 style={{color: "white"}}>{item.pname}</h3></b> 
              <p style={{color: "white"}}>Price: {item.price}</p>
              <button className="btn btn-primary"  onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))}
          <p style={{color: "white"}}>Total Price: {totalPrice}</p>
          <button className="btn btn-primary" onClick={clearCart}>Clear Cart</button>
          <div>
            <br/>
          <button type="submit" className="btn btn-primary" onClick={(e)=>{sendData(e)}}>Confirm Order</button>
          
          </div>
        </>
      )}
      
    </div>
  );
}

 