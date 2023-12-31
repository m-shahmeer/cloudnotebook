import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [credentials, setCredentials] = useState({email: "", password:""})
    let navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
                
            },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            //Save the Auth Token and Redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/")
        }
        else{
            alert("Invalid credentials")
        }
    }

    const onChange= (e)=>{

        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <>
        <div className='container my-5'>
         <h1 className='my-3'>Login to Cloud Notebook</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                   
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} id="password" />
                </div>
                <button type="submit" className="btn btn-dark" >Login</button>
            </form>
            </div>
        </>
    )
}

export default Login
