import "./LoginPage.scss";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState } from "react";


function LoginPage() {

  const [isLogin, setIsLogin] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const userData = JSON.parse(localStorage.getItem('users')) || { email: "hasimgorucu@gmail.com", password: "123456" };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const user = userData.find((user) =>
    formData.email == user.email && formData.password == user.password
  )

  function login() {
    setIsTrue(true)
    if (user) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }

  return (
    <div>
      <Sidebar />
      <main className="login-page">
        <div className="form-container">
          <h1>LOGIN</h1>
          <input onKeyUp={(e) => handleChange(e)} name="email" type="email" placeholder="Enter Your Email" />
          <input onKeyUp={(e) => handleChange(e)} name="password" type="password" placeholder="Enter Your Password" />
          {isTrue ? <div className="login-alert">{isLogin ? "Login successful" : "Username or password is incorrect"}</div> : <div></div>}
          <button onClick={() => login()}>Sign Up</button>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
