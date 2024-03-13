import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { admin_authenticate_url, base_url } from "../../../constants/staticData";

export default function LoginPage() {
  const navigate = useNavigate();

  const handileSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const res = await axios.get(`${base_url}${admin_authenticate_url}`, {
        params: {
          emailId: "salim",
          password: "djfodjfojls",
        },
      });
      console.log("res",res);
      
      if (res.status) {
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="">
      <div className="text-center m-5">
        <h1 className="fw-bold">Admin Login</h1>
      </div>
      <form className="w-50 mx-auto mt-5 border border-2 p-5 rounded ">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            aria-describedby="passwordHelp"
          />
          <div id="passwordHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary w-25"
            onClick={handileSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
