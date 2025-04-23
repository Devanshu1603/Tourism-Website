import React, {useState } from 'react';
import './Login_Signup.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login_Signup = ({ setIsAuthenticated }) => {

  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();


  const handleSuccess = (msg) => {
    toast.success(msg, { position: 'top-right' });
  }

  const handleError = (msg) => {
    toast.error(msg, { position: 'top-right' });
  }

  const handleloginChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  }

  const handlesingupChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return alert('Email, and password are required');    }

    // Ensure loginInfo only contains email and password
    const loginData = { email, password };

    try {
      const url = "https://tourism-backend-omega.vercel.app/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)  // Send only the required fields
      });

      const result = await response.json();
      console.log(result);  // Log the result for more details

      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setIsAuthenticated(true);
       navigate('/');
      } else {
        alert(message || error?.details[0]?.message);      }
    } catch (err) {
      handleError(err);
    }
  }


  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Signup function triggered"); 
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return alert('Name, email, and password are required'); ;
    }
    try {
      const url = "https://tourism-backend-omega.vercel.app/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupInfo)
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        alert("Your account has been created successfully! Login to get started.");
        navigate('/');
      } else {
        handleError(message || error?.details[0]?.message);
      }
    } catch (err) {
      alert("An error occurred. Please try again.");
    }
  }




  const [isLogin, setIsLogin] = useState(true);
  const [isActive, setIsActive] = useState(null); // Track active state of buttons

  const handleRegister = () => {
    setIsLogin(false);
    setIsActive('register');
  };

  const handleLogin2 = () => {
    setIsLogin(true);
    setIsActive('login');
  };

  return (
    <div className="hero2">
      <div className="login-signup-form-box">
        <div className="login-signup-button-box">
          <div id="btn" style={{ left: isLogin ? "0" : "110px" }}></div>
          <button
            type="button"
            className={`toggle-btn ${isActive === 'login' ? 'active' : ''}`}
            onClick={handleLogin2}
          >
            Login
          </button>
          <button
            type="button"
            id='signup-btn'
            className={`toggle-btn ${isActive === 'register' ? 'active' : ''}`}
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
        <form
          onSubmit={handleLogin}
          className="login-signup-input-group"
          id="login"
          style={{ left: isLogin ? "50px" : "-400px" }}
        >
           <h3>Hii, welcome back !</h3>
          <input type="email" name="email"
            className="input-field" placeholder="Enter Your E-Mail" required onChange={handleloginChange}
            value={loginInfo.email}
          />
         <div className="password-container">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    className="input-field"
    placeholder="Enter Password"
    required
    onChange={handleloginChange}
    value={loginInfo.password}
  />
  <button
    type="button"
    className="eye-btn"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? "👁️" : "🔒"}
  </button>
</div>

          <p>Don't Have an Accout ? Please Register</p>
          <button type="submit" className="submit-btn" id='login-btn'>Login</button>
        </form>
        <form
          onSubmit={handleSignup}
          className="login-signup-input-group"
          id="register"
          style={{ left: isLogin ? "450px" : "50px" }}
        >
          <h3>Get started now!</h3>
          <input type="text" className="input-field" name="name"
            placeholder="Name" onChange={handlesingupChange}
            value={signupInfo.name}
            required />
          <input type="email" name="email" className="input-field" placeholder="Email ID" required onChange={handlesingupChange}
            value={signupInfo.email}
          />
          <div className="password-container">
  <input
    type={showSignupPassword ? "text" : "password"}
    name="password"
    className="input-field"
    placeholder="Enter Password"
    onChange={handlesingupChange}
    value={signupInfo.password}
    required
  />
  <button
    type="button"
    className="eye-btn"
    onClick={() => setShowSignupPassword(!showSignupPassword)}
  >
    {showSignupPassword ? "👁️" : "🔒"}
  </button>
</div>


          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login_Signup;
