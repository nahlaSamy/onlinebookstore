


import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from "../../../../assets/images/Logo.png";
import pic from "../../../../assets/images/Picture.png";

export default function ChangePass(props) {
  console.log(props);
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  let navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log(data);
    try {
      let response = await axios.post("https://upskilling-egypt.com:3007/api/auth/change-password",
         data , {headers:{Authorization: `Bearer ${localStorage.getItem("userToken")}`}})
      console.log(response);
      toast.success(response.data.message);
      props.handleClose(); 
      navigate('/login')
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };


  return (
    <div className='conatiner-fluid'>
      <div className="row">
        <div className="col-md-5">
          <img src={pic} alt="" className='img-fluid' />
        </div>
        <div className="col-md-7 ">
          <div className="p-3 ">
            <div className="text-center">
              <img src={logo} alt="logo" />
            </div>
            <div className="title m-5">
              <span className="text-muted">Welcome back !</span>
              <h3> Change Your Password  Easily </h3>
            </div>
            <form className='m-5' onSubmit={handleSubmit(onSubmit)}>


              <div className="mb-3">
                <label className='mb-2'>Old Password</label>
                <input type="password" className="form-control" placeholder="Enter your Password" aria-label="Password" aria-describedby="basic-addon1" {...register("password", {
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
                <label className='mb-2'>New Password</label>
                <input type="password_new" className="form-control" placeholder="Enter your Password" aria-label="Password" aria-describedby="basic-addon1" {...register("password_new", {
                  required: "Password is required",
                  pattern: {
                    value: /^.{8,}$/,
                    message: "Password must be at least 8 characters long"
                  }
                })} />
              </div>
              {errors.password_new && (
                <p className="text-danger my-2">{errors?.password_new?.message}</p>
              )}
              <div className="d-flex flex-column align-items-center">
                <button className='btn btn-light w-50 my-3'>submit</button>
                {/* <button className='btn btn-success w-50 my-3'>Login</button> */}

              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
