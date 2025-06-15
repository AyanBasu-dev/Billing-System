import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import toast from 'react-hot-toast';
import { login } from '../../Service/AuthService';
import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';
//import {assets} from '../../assets/assets.js';

const Login = () => {
    const {setAuthData} = useContext(AppContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((data=>({
            ...data,
            [name]: value
        })));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            const response = await login(data);
            if(response.status === 200){
                toast.success("Login successful!");
                localStorage.setItem("token", response.data.token); // Store the token in localStorage
                localStorage.setItem("role", response.data.role); 
                setAuthData(response.data.token, response.data.role); // Update context with auth data
                navigate("/dashboard"); // Redirect to dashboard on successful login
            } else {
                toast.error("Login failed, please try again.");
            }
        }
        catch(err){
            toast.error("Invalid credentials, please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }   
    }

  return (
    <div className="bg-light d-flex align-items-center justify-content-center vh-100 login-background">
        <div className="card shadow-lg w-100" style={{maxWidth:'480px'}}>
            <div className="card-body">
                <div className="text-center">
                    <h1 className="card-title h3"> Sign in</h1>
                    <p className="card-text text-muted">
                        Sign in below to access your account
                    </p>
                </div>
                <div className="mt-4">
                    <form onSubmit={onSubmitHandler}>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label text-muted">Email Address</label>
                            <input type="text" name="email" id="email" placeholder='yourname@example.com' className='form-control' onChange={onChangeHandler} value={data.email}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label text-muted">Password</label>
                            <input type="password" name="password" id="password" placeholder='********' className='form-control'
                            onChange={onChangeHandler} value={data.password}/>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-dark btn-lg" disable={{loading}}>
                                {loading ? "Loading..." : "Sign In"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
