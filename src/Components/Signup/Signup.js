import React, { Component } from "react";
import axios from "axios";
import styles from "./Signup.module.css";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const charOnly = RegExp(/^[a-zA-Z]/);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class Signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    customer_privacy: 0,
    psgdpr: 0,
    submitCreate: 0,
    // create_account: 0,
    errors: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      privacy: "",
      psgdpr: "",
    },
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    let errors = this.state.errors;

    switch (name) {
      case "firstname":
        this.setState({ ...this.state, firstname: value });

        if (!charOnly.test(value)) {
          errors.firstname = "Only letters are allowed";
        } else if (value.length === 0) {
          errors.firstname = "Firstname is required";
        } else {
          errors.firstname = "";
        }
        // errors.firstname =
        //   value.length === 0
        //     ? "First Name is required"
        //     : "";
        //     errors.firstname = !charOnly.test(value) ? "Only "
        //     : "";
        break;
      case "lastname":
        this.setState({ ...this.state, lastname: value });
        if (!charOnly.test(value)) {
          errors.lastname = "Only letters are allowed";
        } else if (value.length === 0) {
          errors.lastname = "Lastname is required";
        } else {
          errors.lastname = "";
        }
        break;
      case "email":
        this.setState({ ...this.state, email: value });
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        this.setState({ ...this.state, password: value });
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      case "datapolicy":
        // this.setState({ customer_privacy: value });

        console.log(value);
        errors.privacy =
          this.state.customer_privacy === 1 ? "" : "please check";
        break;
      case "terms":
        // this.setState({ customer_privacy: value });
        this.setState({ ...this.state, psgdpr: 0 });
        console.log(value);
        errors.psgdpr = this.state.psgdpr === 1 ? "" : "please check";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  cutomer_change = () => {
    // this.setState({ customer_privacy: 1 });
    if (this.state.customer_privacy === 0) {
      this.setState({ customer_privacy: 1 });
    } else {
      this.setState({ customer_privacy: 0 });
    }
  };

  privacy_change = () => {
    if (this.state.psgdpr === 0) {
      this.setState({ psgdpr: 1 });
    } else {
      this.setState({ psgdpr: 0 });
    }
  };

  submitCreate = () => {
    this.setState({ submitCreate: 1 });
  };
  // create_account = () => {
  //   this.setState({ create_account: 1 });
  // };
  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.customer_privacy);
    console.log(this.state.psgdpr);

    let errors = this.state.errors;
    if (this.state.firstname.length == 0) {
      errors.firstname = "Firstname is required";
    }
    if (this.state.lastname.length == 0) {
      errors.lastname = "Lastname is required";
    }
    if (!validEmailRegex.test(this.state.email)) {
      errors.email = "Email is invalid";
    }
    if (this.state.password.length < 8) {
      errors.password = "Password is invalid";
    }
    if (this.state.customer_privacy === 0) {
      errors.privacy = "please check customer data policy";
    } else {
      errors.privacy = "";
    }
    if (this.state.psgdpr === 0) {
      errors.psgdpr = "please check terms and condition";
    } else {
      errors.psgdpr = "";
    }
    this.setState({ ...this.state, errors });
    // if (validateForm(this.state.errors)) {
    //   console.info("Valid Form");
    // } else {
    //   console.error("Invalid Form");
    // }

    console.log(this.state);
    console.log("validate", validateForm(this.state.errors));
    if (!validateForm(this.state.errors)) {
      return console.error("Invalid Form");
    }
    // else {
    //   this.create_account();
    // }

    axios
      .get("https://kobzo.store/logins/login-api.php", {
        params: {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          password: this.state.password,
          submitCreate: this.state.submitCreate,
          create_account: 1,
          customer_privacy: this.state.customer_privacy,
          psgdpr: this.state.psgdpr,
          ajax: 1,
        },
      })
      .then((response) => {
        console.log(response.data);
        const { success, error } = response.data;
        if (response.data.success == true) {
          window.location.href = "https://www.kobzo.store/?superCustomer=1";
        }
        if (error) {
          const errors = response.data[0];
          const stateErrors = this.state.errors;

          stateErrors.firstname = errors.firstname;
          stateErrors.lastname = errors.lastname;
          stateErrors.email = errors.email;
          stateErrors.password = errors.password;
          stateErrors.privacy = errors.customer_privacy;
          stateErrors.psgdpr = errors.psgdpr;

          this.setState({ ...this.state, errors: stateErrors });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} noValidate>
          <h6 class="msg-info">Please register here</h6>
          <div class="form-group">
            {" "}
            {/* <label class="form-control-label text-muted">First Name</label>{" "} */}
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder=" Firstname"
              class="form-control"
              onChange={this.handleChange}
              noValidate
            />{" "}
          </div>
          {errors.firstname.length > 0 && (
            <span className="errorMessage">{errors.firstname}</span>
          )}
          <div class="form-group">
            {" "}
            {/* <label class="form-control-label text-muted">Last Name</label>{" "} */}
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder=" Lastname"
              class="form-control"
              onChange={this.handleChange}
              noValidate
            />{" "}
          </div>
          {errors.lastname.length > 0 && (
            <span className="errorMessage">{errors.lastname}</span>
          )}
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
          <div class="form-group">
            {" "}
            {/* <label class="form-control-label text-muted">Password</label>{" "} */}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              class="form-control"
              onChange={this.handleChange}
              noValidate
            />{" "}
          </div>
          {errors.password.length > 0 && (
            <span className="errorMessage">{errors.password}</span>
          )}
          <br></br>

          <label for="datapolicy" className="label">
            {" "}
            <input
              type="checkbox"
              id="datapolicy"
              name="datapolicy"
              value={this.state.customer_privacy}
              onChange={this.cutomer_change}
            />{" "}
            Customer data policy
          </label>
          <br></br>

          <p className="terms">
            The personal data you provide is used to answer queries, process
            orders or allow access to specific information. You have the right
            to modify and delete all the personal information found in the "My
            Account" page.
          </p>
          {/* {errors.privacy.length > 0 && (
                <span className="error">{errors.privacy}</span>
              )} */}
          {this.state.customer_privacy === 1 ? (
            ""
          ) : (
            <span className="errorMessage">{errors.privacy}</span>
          )}
          <br></br>

          <label for="terms" className="label">
            {" "}
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value={this.state.psgdpr}
              onChange={this.privacy_change}
            />
            {"   "}
            {"   "}I agree to the terms and conditions and the privacy policy
          </label>
          <br></br>
          {/* {errors.psgdpr.length > 0 && (
                <span className="error">{errors.psgdpr}</span>
              )} */}
          {this.state.psgdpr === 1 ? (
            ""
          ) : (
            <span className="errorMessage">{errors.psgdpr}</span>
          )}
          <br></br>
          <div class="row justify-content-center my-3 px-3">
            {" "}
            <button class="btn-block btn-color" onClick={this.submitCreate}>
              Register{" "}
            </button>{" "}
          </div>
          <div class="row justify-content-center my-2">
            {" "}
            <button onClick={() => this.props.changeAuthState("signin")}>
              <small class="text-muted">Registered User ? Login</small>
            </button>{" "}
          </div>
        </form>
      </>
    );
  }
}

export default Signup;
