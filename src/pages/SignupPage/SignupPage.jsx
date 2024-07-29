//REACT
import "./SignupPage.scss";
import { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";

function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isConfirmVisible, setIsConfirmVisible] = useState(false)
  const [passwordAlert, setPasswordAlert] = useState("Passwords do not match. Please try again.")
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const userData = JSON.parse(localStorage.getItem('users')) || [];

  function signUp() {
    if (formData.password == formData.confirmPassword) {
      if (userData.find(user => user.email === formData.email)) {
        setPasswordAlert("This email is already used")
        setIsConfirmVisible(true)
      } else {
        localStorage.setItem('users', JSON.stringify([...userData, { email: formData.email, password: formData.password }]));
        setIsConfirmVisible(false)
        navigate("/login", { replace: true })
      }
    } else {
      setIsConfirmVisible(true)
    }
  }

  return (
    <div>
      <Sidebar />
      <main className="signup-page">
        <div className="form-container">
          <h1>SIGN UP</h1>
          <input onKeyUp={(e) => handleChange(e)} name="email" type="email" placeholder="Enter Your Email" />
          <input onKeyUp={(e) => handleChange(e)} name="password" type="password" placeholder="Enter Your Password" />
          <input onKeyUp={(e) => handleChange(e)} name="confirmPassword" type="password" placeholder="Confirm Your Password" />
          {isConfirmVisible ? <div className="signup-alert">{passwordAlert}</div> : <div></div>}
          <button onClick={() => signUp()}>Sign Up</button>
        </div>
      </main>
    </div>
  );
}

export default SignupPage;
