import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {

    const navigate = useNavigate();

    const handileSubmit = () => {
        navigate('/dashboard');
    }
  return (
    <div className=''>
         <div className='text-center m-5'><h1 className='fw-bold'>Admin Login</h1></div>
        <form className='w-50 mx-auto mt-5 border border-2 p-5 rounded '>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp"/>
    <div id="passwordHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className='text-center'><button type="submit" className="btn btn-primary w-25" onClick={handileSubmit}>Submit</button></div>
</form>
    </div>
  )
}
