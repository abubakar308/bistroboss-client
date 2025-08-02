import { useContext } from "react";
import { AuthContext } from "../authprovider/Authprovider";

const Register = () => {
    const {setUser, createUser, updateUserProfile} = useContext(AuthContext);
    const handleRegister = e =>{
        e.preventDefault();
        const formData = e.target;
        const name = formData.name.value
        const photo = formData.photo.value
        const email = formData.email.value
        const password = formData.password.value
        console.log(name,photo,email,password)
        createUser(email,password)
        .then(data=>{
            const user = data.user
            console.log(user);
            updateUserProfile(name,photo)
            .then()

        })
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoURL</span>
                </label>
                <input type="url" placeholder="photoURL" name="photo" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                    <input type="submit" value="SignUp" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;