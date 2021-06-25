import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Header from '../../HomePage/Header/Header';
import { UserContext } from './../../../App';
import heroBG from './../../../images/hero-bg.jpg';

function Login() {
  const [userInfo, setUserInfo] = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch('https://damp-basin-39861.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then( success => {
      const loginData = {
        name: success.name,
        email: success.email,
        role: success.role
      }
      setUserInfo(loginData);
      setMessage(success.message);
    })
  };
  return (
    <div>
      <Header />
      <div id="dtr-main-content">
        <section id="home" className="dtr-section dtr-section-with-bg dtr-hero-section-top-padding" style={{backgroundImage: `url(${heroBG})`}}>
          <div className="dtr-overlay dtr-overlay-dark"></div>
            <div className="container">
              <div className="row dtr-pt-100 dtr-pb-130 dtr-sm-pb-80 dtr-overlay-content">
                <div className="col-8 offset-2">

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input classNme="form-control" placeholder="Email" type="email" {...register("email", { required: true })} />
                      {errors.email && <span className="text-danger">This field is required</span>}

                      <input classNme="form-control" placeholder="Password" type="password" {...register("password", { required: true })} />
                      {errors.password && <span className="text-danger">This field is required</span>}
                      <p style={{color: '#ddd'}}>{message}</p>
                      <input style={{display: 'block'}} type="submit" value="Login" />
                    </form>
                    <p><Link style={{color: '#fff'}} to="/registration">Don't have any account? click here for registration</Link></p>

                  </div>
              </div>
            </div>
        </section>
      </div>
    </div>
  );
}

export default Login;