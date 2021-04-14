import React, { useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

const Main = () => {
  const [authState, setAuthState] = useState("signin");

  const changeAuthState = (state) => {
    setAuthState(state);
  };

  let authComponent = <Login changeAuthState={changeAuthState} />;
  if (authState == "signup")
    authComponent = <Signup changeAuthState={changeAuthState} />;
  if (authState == "forgotPassword")
    authComponent = <ForgotPassword changeAuthState={changeAuthState} />;

  return (
    <>
      <div class="container px-4 py-5 mx-auto">
        <div class="card card0">
          <div class="d-flex flex-lg-row flex-column-reverse">
            <div class="card card1">
              <div class="row justify-content-center my-auto">
                <div class="col-md-8 col-10 my-5">
                  <div class="row justify-content-center px-3 mb-3">
                    {" "}
                    <img id="logo" src="logo_vi.png" />{" "}
                  </div>
                  <h3 class="mb-5 text-center heading"></h3>
                  {authComponent}
                </div>
              </div>
              <div class="bottom text-center mb-5">
                {/* <div class="create">
                  <p href="#" class="sm-text mx-auto mb-3">
                    Don't have an account?
                    <button
                      class="btn btn-white ml-2"
                      onClick={() => changeAuthState("signup")}
                    >
                      Create new
                    </button>
                  </p>
                </div> */}
                <div class="row">
                  <div class="col-sm-2"></div>
                  <div class="col-sm-8">
                    <p class="copyright sm-text text-center mx-auto mb-0 mt-6">
                      Copyright 2021 - KobZo SuperStore - All Rights Reserved.
                    </p>
                  </div>
                  <div class="col-sm-2"></div>
                </div>
              </div>
            </div>
            <div class="card card2">
              <div class="my-auto mx-md-5 px-md-5 right">
                <h3 class="text-white1">Work from home store</h3>{" "}
                <img src="banner1.png" alt="banner" class="banner" />
                <small class="text-white">
                  An exclusive SuperStore for corporate employees.
                </small>
                <p style={{ color: "white" }}>
                  For any support, please contact hello@kobzo.com or call us at
                  9361133463 (10am - 6pm)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
