
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from "../../../../assets/images/Logo.png";
import pic from "../../../../assets/images/Picture.png";

export default function ForgetPass() {  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  let navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log(data);
    try {
      let response = await axios.post("https://upskilling-egypt.com:3007/api/auth/forgot-password", data)
      console.log(response);
      toast.success(response.data.message);
      navigate('/reset-pass')
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
              <span className="text-muted">Welcome back !</span>
              <h3> Forget Password !!</h3>
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
                  {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                />
              </div>
              {errors.email && (
                <p className="text-danger my-2">{errors.email.message}</p>
              )}
              <div className="d-flex flex-column align-items-center">
                <button className='btn btn-light w-50 my-3'>send</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
