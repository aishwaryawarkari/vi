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

class ForgotPassword extends Component {
  state = {
    email: "",
    errorMessage: "",
    passwordSetMessage: "",
    errors: {
      email: "",
    },
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // if (validateForm(this.state.errors)) {
    //   console.info("Valid Form");
    // } else {
    //   console.error("Invalid Form");
    // }
    let errors = this.state.errors;
    if (!validEmailRegex.test(this.state.email)) {
      errors.email = "email is invalid";
    }
    this.setState({ ...this.state, errors });
    console.log("validate", validateForm(this.state.errors));
    if (!validateForm(this.state.errors)) {
      return console.error("Invalid Form");
    }
    console.log(this.state);
    axios
      .get("https://kobzo.store/logins//auth-api.php", {
        params: {
          email: this.state.email,
          ajax: 1,
        },
      })
      .then((response) => {
        const { success, errors } = response.data;
        console.log(response.data);
        if (success && success.length > 0) {
          // window.location.href = "https://www.kobzo.store";
          this.setState({
            ...this.state,
            passwordSetMessage: success[0],
          });
        }
        if (errors && errors.length > 0) {
          this.setState({
            ...this.state,
            errorMessage: errors[0],
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
        <h6 class="msg-info">Reset password</h6>
        {this.state.errorMessage.length > 0 ? (
          <span class="errorMessage">{this.state.errorMessage}</span>
        ) : (
          ""
        )}
        {this.state.passwordSetMessage.length > 0 ? (
          <span class="passwordSetMessage">
            {this.state.passwordSetMessage}
          </span>
        ) : (
          ""
        )}
        <form onSubmit={this.handleSubmit} noValidate>
          <div class="form-group">
            {" "}
            {/* <label class="form-control-label text-muted">Email</label>{" "} */}
            <input
              type="text"
              id="email"
              name="email"
              placeholder=" Email id"
              class="form-control"
              onChange={this.handleChange}
              noValidate
            />{" "}
          </div>
          {errors.email.length > 0 && (
            <span className="errorMessage">{errors.email}</span>
          )}
          <div class="row justify-content-center my-3 px-3">
            {" "}
            <button class="btn-block btn-color">Send </button>{" "}
          </div>
          <div class="row justify-content-center my-2">
            {" "}
            <button onClick={() => this.props.changeAuthState("signin")}>
              <small class="text-muted">Login</small>
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

export default ForgotPassword;
