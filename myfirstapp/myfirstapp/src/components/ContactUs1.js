import { useRef } from "react";
// import emailjs from "@emailjs/browser";

// import ContactIMg from "../assets/depositphotos.jpg";
import  "./contactus.css";
// import Navbar from "../Components/navHome";
import Footer from "../Footer";

function ContactUs1() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
};
return (

    <div style={{ backgroundColor: "#FFFAF0" }}>
   
  <h1>Contact Us</h1>
  <div className="row justify-content-center" style={{ marginTop: "50px" }}>
    <div className="col-2"></div>



    
    <div className="col-4 text-left"  style={{ marginTop: "100px" }} >
      <h2 style={{ textAlign: "left" }} >AeroHire</h2>
      <h3 style={{ textAlign: "left" }}>Director - Partnerships</h3>
      <br />
      <h3 style={{ textAlign: "left" }}>Email: aerohire@gmail.com</h3>
      <h3 style={{ textAlign: "left" }}>Phone: +91-9619813777</h3>
    </div>
   




    <div className="col-5">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.970309505363!2d73.0516713!3d19.0258994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)!5e0!3m2!1sen!2sin!4v1692732959829!5m2!1sen!2sin"
    height={400}
    width={600}
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="mx-auto"
  />
</div>

    <div className="col-1"></div>
  </div>
  </div>    
   
);
}

export default ContactUs1;