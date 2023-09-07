
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from "sweetalert";
 // import 'react-toastify/dist/ReactToastify.css';

const EditCust = () => {
  const [edit, setEdit] = useState([])
  const [user, setUser] = useState([])
  const [customer_id, setCustomer_id] = useState('')
  const [fname, setFname] = useState('')
  const [mname, setMname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [address_id, setAddress_id] = useState('')
  const [status,SetStatus]=useState('')
  const [login_id,SetLogin_id]=useState('')
  const [op,setOp]=useState(null);

  useEffect(()=>{
      const loginid= JSON.parse(localStorage.getItem("currentUser")).login_id;

      fetch("http://localhost:8181/getCustomer?uid="+loginid)
      .then(resp=>resp.json())
      .then(result=>{
          localStorage.setItem("currentOp",JSON.stringify(result));
          setOp(result);
          setCustomer_id(result.customer_id)
          setFname(result.fname)
          setMname(result.mname)
          setLname(result.lname)
          setEmail(result.email)
          setContact(result.contact)
          setAddress_id(result.address_id)
          SetStatus(result.status)
          SetLogin_id(result.userId)
          
      })  
     },[]);
  
  const navigate = useNavigate()

  
   

  const editUser = () => {
    const url = `http://localhost:8181/editCustomer`
    swal(" Successfully Updated!", "You clicked the button!", "success");

     const body={customer_id,
      fname,
      mname,
      lname,
      email, 
      contact,
      address_id,
      status,
       login_id}
   
    console.log(body)
    axios.put(url, body).then((response) => {
      const result = response.data
      if (result['status'] === 'success') {
        
        setEdit(result['data'])
        console.log(result['data'])
        navigate('/customer_home')
      }
    })
  }
  
  
  return (
    <div className='container'>
    

          <table
            className='table table-white table-striped navbar-light bg-light'
            style={{ textAlign: 'center', height: '115%' }}>
            <tbody>
              <tr>
                <td>Fname</td>
                <td>
                  <input
                    type='text'
                    readOnly='readOnly'
                    value={fname} disabled></input>
                </td>
              </tr>
              <tr>
                <td>Lname</td>
                <td>
                  <input
                    type='text'
                    readOnly='readOnly'
                    value={lname} disabled></input>
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type='text'
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    value={email}
                    placeholder={email}></input>
                </td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>
                  <input
                    type='text'
                    maxLength={10}
                    onChange={(e) => {
                      setContact(e.target.value)
                    }}
                    value={contact}
                    placeholder={contact}></input>
                </td>
              </tr>
             
            </tbody>
          </table>
          <div className='mb-3' style={{ textAlign: 'center' }}>
            <button onClick={editUser} className='btn btn-success float-center'>
              Save
            </button>
            <Link to="/customer_home">        <button className="btn btn-success">  Back </button></Link>
           
          </div>
      
        </div>
     
  )
}

export default EditCust
