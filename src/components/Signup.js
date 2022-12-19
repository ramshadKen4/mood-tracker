import React, { useState } from 'react';
import './Signup.css';
import Firebase from '../config/firebase'

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  function handleSignup(event) {
    event.preventDefault();
    Firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        user.updateProfile({ displayName: username }).then((user) => {
          Firebase.firestore().collection('user').add({
            uId: userCredential.user.uid,
            name: username
          }).catch((error) => {
            console.log(error.message)
          })
        })
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        setError(errorMessage);
        // ..
      });

    // Validate input
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    } else {
      setError('')
    }



    // Create new user account
    // ...

    // Redirect to home page
    // ...
  }

  return (
    <div className="signup-form">
      <form action="/examples/actions/confirmation.php" onSubmit={handleSignup} method="post">
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account!</p>
        {error ? <div class="alert alert-danger" role="alert">{error}</div> : ''}
        <hr />
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="fa fa-user"></span>
              </span>
            </div>
            <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" name="username" placeholder="Username" required="required" />
          </div>
        </div>
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
            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" name="password" placeholder="Password" required="required" />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock"></i>
                <i className="fa fa-check"></i>
              </span>
            </div>
            <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
          </div>
        </div>
        <div className="form-group">
          <label className="form-check-label">
            <input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </form>
      <div className="text-center">Already have an account? <a href="/login">Login here</a></div>
    </div>
  );
}

export default SignupPage