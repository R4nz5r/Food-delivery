import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",geolocation:""} )

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
        })
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter valid credentials")
        }
    }
    const onChange =(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="name" name='name' value={credentials.name} onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address"  name='geolocation' value={credentials.geolocation} onChange={onChange}/>
                    </div>
                    <button type="submit" className="btn btn-success text-white">SignUp</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already An User </Link>
                </form>
            </div>
        </>
    )
}
