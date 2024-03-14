import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthUserLogin } from "../services/authService";
import InputForm from "../components/InputForm";
import ButtonForm from "../components/ButtonForm";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      navigate("/");
    }
  }, [navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    AuthUserLogin(email, password)
      .then((res) => {
        toast.success("User login Successful");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userData.userId);
        console.log(res.data.userData.userId);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <form onSubmit={handleLogin}>
              <InputForm
                name="Email Address"
                value={email}
                type={"email"}
                id={"email"}
                setValue={setEmail}
              />
              <InputForm
                name="Password"
                value={password}
                type={"password"}
                id={"password"}
                setValue={setPassword}
              />

              <ButtonForm ButtonInput="Login" />
            </form>
            <span>
              If you don't have account <Link to={"/signup"}>Register</Link>{" "}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
