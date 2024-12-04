"use client";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "@/context/AppContext";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import Footer from "@/layout/Footer";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const router = useRouter();
  const [state, setState] = useState("Sign Up");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { backendUrl, token, setToken } = useContext(AppContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === "Sign Up") {
      const { data } = await axios.post(backendUrl + "/api/user/register", {
        name,
        email,
        password,
      });

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      } else {
        toast.error(data.message);
      }
    } else {
      const { data } = await axios.post(backendUrl + "/api/user/login", {
        email,
        password,
      });

      if (data.success) {
        toast.success("Registered Successfully");
        localStorage.setItem("token", data.token);
        setToken(data.token);
      } else {
        toast.error(data.message);
      }
    }
  };

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token]);

  return (
    <>
    <div className="container-fluid m-0 p-0">
    <ToastContainer />
      <div className="row">
        <div
          className="col-6 d-none d-lg-block vh-100"
          style={{
            backgroundImage: "url('/assets/images/background/cover.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="col-lg-6 col-12">
          <form
            onSubmit={onSubmitHandler}
            className="min-vh-80 m-10 w-100 rounded-1"
          >
            <div className="d-flex flex-column gap-3 mx-auto p-4 min-w-540 sm:min-w-96 border rounded rounded-3 text-muted text-sm shadow-lg">
              <p className="h2 fw-semibold text-center">
                {state === "Sign Up" ? "Create Account" : "Login"}
              </p>
              <p className="lead text-body text-center">
                Elevate Your Dining & Experience with Booze Bites
              </p>
              {state === "Sign Up" && (
                <div className="w-100">
                  <p className="text-body">Full Name</p>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="form-control mt-1"
                    type="text"
                    placeholder="Full Name"
                    required
                  />
                </div>
              )}
              <div className="w-100">
                <p className="text-body">Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="form-control mt-1"
                  type="email"
                  placeholder="Enter Email Address"
                  required
                />
              </div>
              <div className="w-100">
                <p className="text-body">Password</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="form-control mt-1"
                  type="password"
                  placeholder="Enter Password"
                  required
                />
              </div>
              <button className="theme-btn style-two">
                {state === "Sign Up" ? "Create account" : "Login"}{" "}
                <i className="far fa-arrow-alt-right" />
              </button>
              {/* <button
                className="btn btn-primary w-100 py-2 my-2 text-base"
                type="submit"
              >
                {state === "Sign Up" ? "Create account" : "Login"}
              </button> */}
              {state === "Sign Up" ? (
                <p className="text-center text-body">
                  Already have an account?{" "}
                  <span
                    onClick={() => setState("Login")}
                    className="font-primary cursor-pointer"
                  >
                    Login here
                  </span>
                </p>
              ) : (
                <p>
                  Create a new account?{" "}
                  <span
                    onClick={() => setState("Sign Up")}
                    className="font-primary cursor-pointer"
                  >
                    Click here
                  </span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

    </div>
    <Footer/>
    </>
  );
};

export default Login;
