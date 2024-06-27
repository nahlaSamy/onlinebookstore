import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from "../../../../assets/images/Logo.png";
import pic from "../../../../assets/images/Picture.png";
import { apiProtected } from '../../../SharedModule/axiosInstance'; 

export default function ResetPass() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await apiProtected.post("/auth/reset-password", data);
      console.log(response);
      toast.success(response.data.message);
      navigate('/login');
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error(error.response?.data.message || "An error occurred");
    }
  };

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-6">
          <img src={pic} alt="" className='img-fluid' />
        </div>
        <div className="col-md-6">
          <div className="p-5">
            <div className="text-center">
              <img src={logo} alt="logo" />
            </div>
            <div className="title m-5">
              <span className="text-muted">Welcome back!</span>
              <h3>Reset Password</h3>
            </div>
            <form className='m-5' onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className='mb-2'>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  {...register("email", { 
                    required: "Email is required", 
                    pattern: { 
                      value: /^\S+@\S+$/i, 
                      message: "Invalid email address" 
                    } 
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-danger my-2">{errors.email.message}</p>
              )}
              <div className="mb-3">
                <label className='mb-2'>OTP</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter your otp" 
                  aria-label="otp" 
                  aria-describedby="basic-addon1" 
                  {...register("otp", {
                    required: "OTP is required"
                  })}
                />
              </div>
              {errors.otp && (
                <p className="text-danger my-2">{errors.otp.message}</p>
              )}
              <div className="mb-3">
                <label className='mb-2'>Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Enter your Password" 
                  aria-label="Password" 
                  aria-describedby="basic-addon1" 
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^.{8,}$/,
                      message: "Password must be at least 8 characters long"
                    }
                  })}
                />
              </div>
              {errors.password && (
                <p className="text-danger my-2">{errors.password.message}</p>
              )}
              <div className="d-flex flex-column align-items-center">
                <button className='btn btn-light w-50 my-3' type="submit">Send</button>
                <button className='btn btn-success w-50 my-3'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
