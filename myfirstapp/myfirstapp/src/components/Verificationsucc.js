import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Verificationsucc = () => {
 

  const whiteBoxStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
  };

  const logoStyle = {
    marginBottom: '20px'
  };

  return (
    <div className="container text-center mt-5">
      <div style={whiteBoxStyle}>
        <FontAwesomeIcon icon={faCheckCircle} className="fa-4x mb-4" style={logoStyle} />
        <h1 className="mb-4">Account Verified</h1>
        <p>Congratulations, Your account has been verified. Please proceed to login.</p>
        <Link to="/login" className="btn btn-primary mt-3">Login</Link>
      </div>
    </div>
  );
};

export default Verificationsucc;
