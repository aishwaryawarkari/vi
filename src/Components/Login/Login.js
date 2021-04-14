import React, { Component } from "react";
import axios from "axios";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class Login extends Component {
  state = {
    email: "",
    password: "",
    submitLogin: 0,
    errors: {
      email: "",
      password: "",
    },
    errorMessage: "",
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  submitLogin = () => {
    this.setState({ submitLogin: 1 });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let errors = this.state.errors;
    if (!validEmailRegex.test(this.state.email)) {
      errors.email = "email is invalid";
    }
    if (this.state.password.length < 8) {
      errors.password = "password is invalid";
    }
    this.setState({ ...this.state, errors });

    console.log("validate", validateForm(this.state.errors));
    if (!validateForm(this.state.errors)) {
      return console.error("Invalid Form");
    }
    console.log(this.state);
    axios
      .get("https://kobzo.store/logins/login-api.php", {
        params: {
          email: this.state.email,
          password: this.state.password,
          submitLogin: this.state.submitLogin,
          ajax: 1,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.success == true) {
          window.location.href = "https://www.kobzo.store/?superCustomer=1";
        } else {
          this.setState({
            ...this.state,
            errorMessage: "Invalid email or password",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        // this.setState({ ...this.state, errorMessage: "Invalid Credentials" });
      });
  };
  render() {
    const { errors } = this.state;
    return (
      <>
        <h2 class="msg-info">Please login to your account</h2>
        {console.log(this.state.errorMessage)}
        {this.state.errorMessage.length > 0 ? (
          <span class="errorMessage">{this.state.errorMessage}</span>
        ) : (
          ""
        )}
        <form onSubmit={this.handleSubmit} noValidate>
          <div class="form-group">
            {" "}
            {/* <label class="form-control-label text-muted">Email</label>{" "} */}
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              class="form-control bg-white border-md"
              onChange={this.handleChange}
              noValidate
            />{" "}
          </div>
          {errors.email.length > 0 && (
            <span className="errorMessage">{errors.email}</span>
          )}
          <div class="form-group">
            {" "}
            {/* <label class="form-control-label text-muted">Password</label>{" "} */}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              class="form-control bg-white  border-md"
              onChange={this.handleChange}
              noValidate
            />{" "}
          </div>
          {errors.password.length > 0 && (
            <span className="errorMessage">{errors.password}</span>
          )}
          <div class="row justify-content-center my-3 px-3">
            {" "}
            <button class="btn-block btn-color">Login </button>{" "}
          </div>
          <div class="row justify-content-center my-2">
            {" "}
            <button
              onClick={() => this.props.changeAuthState("forgotPassword")}
            >
              <small class="text-muted">Forgot Password?</small>
            </button>{" "}
          </div>
        </form>
        <div class="bottom text-center mb-5">
          <div class="create">
            <p href="#" class="sm-text mx-auto mb-3">
              Don't have an account?
              <button
                class="btn btn-white ml-2"
                onClick={() => this.props.changeAuthState("signup")}
              >
                Create new
              </button>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
