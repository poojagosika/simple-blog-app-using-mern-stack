import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthUserSignUp } from "../services/authService";
import InputForm from "../components/InputForm";
import ButtonForm from "../components/ButtonForm";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthUserSignUp(firstName, lastName, email, password, phoneNumber)
      .then((result) => {
        toast.success("SignUp Successful");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        toast.warn(error.response.data.message);
      });
  };
  return (
    <div className="container text-center mt-5 mb-3">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <form onSubmit={handleSubmit}>
            <InputForm
              name="First Name"
              value={firstName}
              type={"text"}
              id={"firstname"}
              setValue={setFirstName}
            />
            <InputForm
              name="Last Name"
              value={lastName}
              type={"text"}
              id={"lastname"}
              setValue={setLastName}
            />
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
            <InputForm
              name="Phone Number"
              value={phoneNumber}
              type={"number"}
              id={"phonenumber"}
              setValue={setPhoneNumber}
            />
            <ButtonForm ButtonInput="Register" />
          </form>
          <span>
            If you have account <Link to={"/login"}>Login</Link>{" "}
          </span>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Signup;
