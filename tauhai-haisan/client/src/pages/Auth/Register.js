import React, { useState } from 'react'
import Layout from "../../components/Layout/Layout"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import "../../styles/AuthStyles.css"

const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const navigate = useNavigate()

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
                {name,email,password,phone,address}
            );
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/login");
              }else{
                toast.error(res.data.message)
            }
        }catch(error){
            console.log(error)
            toast.error('Something went wrong')
        }
    }

  return (
    <div>
        <Layout title="Register">
            <div className='form-container' style={{ minHeight: "100vh" }}>                
            <form onSubmit={handleSubmit}>
            <h1 className='title'>Register Form</h1>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="Name" placeholder='Enter Your Name'
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="Email" placeholder='Enter Your email' 
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Phone</label>
                        <input type="phone" className="form-control" id="phone" placeholder='Enter Your phone'
                            value={phone}
                            onChange={(e)=> setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Address</label>
                        <input type="address" className="form-control" id="address" placeholder='Enter Your address' 
                            value={address}
                            onChange={(e)=> setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="Password" placeholder='Enter Your password'
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </Layout>
    </div>
  )
}

export default Register