import React, { useState } from 'react'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleLogin = (event)=>{
        event.preventDefault();
        if(!email){
            setError('enter email id')
        }
    }
    return (

        <div className="signup-form">
            <form action="/examples/actions/confirmation.php" method="post">
                <h2>Login</h2>
                <p>Enter email and password for login</p>
                <hr />
              
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-paper-plane"></i>
                            </span>
                        </div>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" name="email" placeholder="Email Address" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input type="text" onChange={(e) => setPassword(e.target.value)} className="form-control" name="password" placeholder="Password" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-check-label">
            <a href="/forget password">forget password ?</a> </label>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">LogIn</button>
                </div>
            </form>
            <div className="text-center">Already have an account? <a href="/signup">create an account</a></div>
        </div>
    )
}
export default Login