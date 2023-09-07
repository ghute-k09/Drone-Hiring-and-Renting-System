import React from "react";
import { FaInstagram , FaFacebook,FaTwitter , FaGoogle , FaLinkedin , FaGithub, FaGem , FaHome , FaEnvelope , FaPhone , FaPrint} from "react-icons/fa";
import { FaIconName } from 'react-icons/fa';
import "./Footer.css";
 const Footer = () => {
  return (
    <>
    <div className="footercolor" style={{ textAlign: "center" }}>
      <footer className="text-center text-lg-start text-white">
      
       
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          
          <div className="me-5 d-none d-lg-block" style={{ color: "white" }}>
            <span >Get connected with us on social networks:</span>
          </div>
        

          <div>
            <a href="https://www.facebook.com/" className="me-4 text-reset">
             <FaFacebook/>
            </a>
            <a href="https://twitter.com/i/flow/login" className="me-4 text-reset">
              <FaTwitter/>
            </a>
            <a href="https://www.google.com/" className="me-4 text-reset">
              <FaGoogle/>
            </a>
            <a href="https://www.instagram.com/" className="me-4 text-reset">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" className="me-4 text-reset">
             <FaLinkedin/>
            </a>
            <a href="https://www.github.com/" className="me-4 text-reset">
              <FaGithub/>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                 <FaHome/> CDAC ( Kharghar ) 
                  , Mumbai
                </p>
                <p>
                 <FaEnvelope/> aerohire33@gmail.com
                </p>  
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © 2023 Copyright:
                <a className="text-reset fw-bold" href="#">AeroHire</a>
        </div>
      </footer>
      </div>
    </>


  );
};

export default Footer;