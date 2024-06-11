import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import pic from "../../../../assets/images/Picture.png"
import logo from "../../../../assets/images/Logo.png"

export default function Register() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  let navigate = useNavigate()

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      let response = await axios.post("https://upskilling-egypt.com:3007/api/auth/register", data)
      console.log(response);
      // localStorage.setItem('userToken', response.data.token);
      // saveUserData();
      toast.success(response.data.message);
      navigate('/login')
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className='conatiner-fluid'>
      <div className="row">
        <div className="col-md-6">
          <img src={pic} alt="" />
        </div>
        <div className="col-md-6 ">
          <div className="p-5 ">
            <div className="text-center">
              <img src={logo} alt="logo" />
            </div>
            <div className="title m-5">
              <span className="text-muted">Create new account</span>
              <h3> Register</h3>
            </div>
            <form className='m-5' onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className='mb-2'>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your first name"
                      aria-label="first_name"
                      aria-describedby="basic-addon1"
                      {...register("first_name", { required: "First name is required" })}
                    />
                  </div>
                  {errors.first_name && (
                    <p className="text-danger my-2">{errors.first_name.message}</p>
                  )}
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className='mb-2'>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your last name"
                      aria-label="last_name"
                      aria-describedby="basic-addon1"
                      {...register("last_name", { required: "Last name is required" })}
                    />
                  </div>
                  {errors.last_name && (
                    <p className="text-danger my-2">{errors.last_name.message}</p>
                  )}
                </div>
              </div>


              <div className="mb-3">
                <label className='mb-2'>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                />
              </div>
              {errors.email && (
                <p className="text-danger my-2">{errors.email.message}</p>
              )}

              <div className="mb-3">
                <label className='mb-2'>Password</label>
                <input type="password" className="form-control" placeholder="Enter your Password" aria-label="Password" aria-describedby="basic-addon1"   {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^.{8,}$/,
                    message: "Password must be at least 8 characters long"
                  }
                })} />
              </div>
              {errors.password && (
                <p className="text-danger my-2">{errors?.password?.message}</p>
              )}
              <div className="mb-3">
                <label htmlFor="">Role</label>
                <select className='form-control' {...register("role", { required: "Role is required" })}>
                <option value="">choose</option>

                  <option value="Admin">Admin</option>
                  <option value="Customer">Customer</option>

                </select>
              </div>
              {errors.role && (
                <p className="text-danger my-2">{errors?.role?.message}</p>
              )}
              <div className="d-flex flex-column align-items-center">
                <button className='btn btn-success  w-50 my-3'>Register</button>
                <button className='btn btn-warning  w-50 my-3'>Login</button>

              </div>

            </form>

          </div>
        </div>
      </div >
    </div >
  )
}
