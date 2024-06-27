import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from "../../../../assets/images/Logo.png";
import pic from "../../../../assets/images/Picture.png";

export default function Login({ saveUserData }) {  // Destructure saveUserData from props {} cuz props are passed as an obj
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  let navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log(data);
    try {
      let response = await axios.post("https://upskilling-egypt.com:3007/api/auth/login", data)
      console.log(response);
      localStorage.setItem('userToken', response.data.data.accessToken);
      saveUserData();
      toast.success(response.data.message);
      navigate('/dashboard/home')
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  let goToRegister = () => {
    navigate('/register')
  }

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
              <h3> Login to your account</h3>
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

              <div className="mb-3">
                <label className='mb-2'>Password</label>
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
              <Link to='/forget-pass'> Forget Password?</Link>
              <div className="d-flex flex-column align-items-center">
                <button className='btn btn-warning w-50 my-3'>Login</button>
                <button onClick={goToRegister} className='btn btn-success w-50'>Register</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
