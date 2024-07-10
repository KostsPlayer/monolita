import React, { useState, useCallback, useEffect } from "react";
import image from "./../../assets/images/children-playing-board-game-cute-kids-friends-siblings-enjoy-indoor-activity-training-business-skills-using-monopoly-boy-throwing-dice-player-holding-cards.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import ApiUrl from "../../helper/ApiUrl";
import AlertMessage from "../../helper/AlertMessage";
import { ToastContainer } from "react-toastify";

function Login() {
  const [values, setValues] = useState({ name: "", userClass: "" });

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const location = useLocation();

  const { toastMessage } = AlertMessage();
  const { apiLoginUrl } = ApiUrl();

  useEffect(() => {
    if (location.state?.messageLogout) {
      toastMessage("success", location.state.messageLogout);
      navigate(location.pathname, {
        state: { ...location.state, messageLogout: undefined },
        replace: true,
      });
    }
  }, [location.state, location.pathname, navigate, toastMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const payload = { name: values.name, userClass: values.userClass };

      await axios
        .post(apiLoginUrl, payload)
        .then((res) => {
          if (res.status === 200) {
            navigate("/game", { state: { messageLogin: res.data.message } });
          }

          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    [values, navigate]
  );

  const displatInfo = (type) => {
    if (type === "registration") {
      toastMessage("info", "Registration page on progress!", "top-center");
    } else {
      toastMessage(
        "info",
        "Forgot password function on progress!",
        "top-center"
      );
    }
  };

  return (
    <>
      <div className="login">
        <div className="login-image">
          <img src={image} alt="" />
        </div>
        <div className="login-wrapper">
          <Link to={"/"} className="title">
            Monolita
          </Link>
          <div className="welcome">Welcome to Monolita</div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
              />
            </div>
            <div className="form-container">
              <label htmlFor="class">Class</label>
              <input
                type="number"
                name="class"
                id="class"
                onChange={handleChange}
              />
            </div>
            <Link
              className="forgot-password"
              onClick={() => displatInfo("forgot-password")}
            >
              forgot password?
            </Link>
            <button className="form-button">Submit</button>
          </form>
          <div className="new-account">
            New Monolita's Member?{" "}
            <Link
              className="sign-up"
              onClick={() => displatInfo("registration")}
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
