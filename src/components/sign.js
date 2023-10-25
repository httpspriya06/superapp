import styles from "./sign.module.css";
// import images from "../images/Super.png";
import { useState } from "react";

function Sign() {
  const [FormData, SetFormData] = useState({
    check: false,
    uname: "",
    username: "",
    email: "",
    mobile: "",
  });

  const [unameError, SetUnameError] = useState(false);
  const [userNameError, SetUserNameError] = useState(false);
  const [emailError, SetEmailError] = useState(false);
  const [mobileError, SetMobileError] = useState(false);
  const [signupError, SetSignUpError] = useState(false);

  const handleChange = (e) => {
    SetFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!(FormData.uname.trim().length > 0)) {
      SetUnameError(true);
      valid = false;
    } else {
      SetUserNameError(false);
    }

    if (!(FormData.username.trim().length > 0)) {
      SetUserNameError(true);
      valid = false;
    } else {
      SetUserNameError(false);
    }

    if (!(FormData.email.trim().length > 0)) {
      SetEmailError(true);
      valid = false;
    } else {
      SetEmailError(false);
    }

    if (!(FormData.mobile.trim().length > 0)) {
      SetMobileError(true);
      valid = false;
    } else {
      SetMobileError(false);
    }
    if (!FormData.check) {
      SetSignUpError(true);
      valid = false;
    } else {
      SetSignUpError(false);
    }

    if (valid) {
      window.localStorage.setItem("userData", JSON.stringify(FormData));
    }
  };

  return (
    <div className={styles.left}>
      <>
        <img id="Super" src="./assets/Super.png" alt="Super" />
      </>
      <p className={styles.heading}>Create your new account</p>
      <form className={styles.login}>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="uname"
          placeholder="Name"
        />
        {unameError ? <p className={styles.err}>Field is required</p> : <></>}
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="username"
          placeholder="Username"
        />
        {userNameError ? (
          <p className={styles.err}>Field is required</p>
        ) : (
          <></>
        )}
        <input
          onChange={(e) => handleChange(e)}
          type="Email"
          name="email"
          placeholder="Email"
        />
        {emailError ? <p className={styles.err}>Field is required</p> : <></>}
        <input
          onChange={(e) => handleChange(e)}
          type="number"
          name="mobile"
          placeholder="Mobile"
        />
        {mobileError ? <p className={styles.err}>Field is required </p> : <></>}
        <label className={styles.check}>
          <input
            onChange={(e) =>
              SetFormData({ ...FormData, [e.target.name]: e.target.checked })
            }
            type="checkbox"
            name="check"
          />
          Share my registration data with Superapp
        </label>
        {signupError ? (
          <p className={styles.err}>Check this box if you want to Proceed</p>
        ) : (
          <></>
        )}
        <button className={styles.btn} onClick={(e) => handleSubmit(e)}>
          SIGN UP
        </button>
        <div className={styles.conditions}>
          <p>
            By clicking on Sign up you agree to Superapp
            <span id="green"> Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Supearapp collects, uses, shares and
            protects your personal data please head Supearapp
            <span id="green"> Privacy Policy</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Sign;
