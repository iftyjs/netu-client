import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Header from '../../HomePage/Header/Header';
import { UserContext } from './../../../App';
import heroBG from './../../../images/hero-bg.jpg';

function Registration() {
  const [userInfo, setUserInfo] = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    fetch('https://damp-basin-39861.herokuapp.com/registration', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success => {
      const sessionData = {
        name: data.name,
        email: success.email,
        role: success.role
      }
      setUserInfo(sessionData);
    });
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
                    <input classNme="form-control" placeholder="Name" type="text" {...register("name", { required: true })} />
                      {errors.name && <span className="text-danger">This field is required</span>}

                      <input classNme="form-control" placeholder="Email" type="email" {...register("email", { required: true })} />
                      {errors.email && <span className="text-danger">This field is required</span>}

                      <input classNme="form-control" placeholder="Password" type="password" {...register("password", { required: true })} />
                      {errors.password && <span className="text-danger">This field is required</span>}
                      {/* <p style={{color: '#ddd'}}>{userInfo}</p> */}
                      <input style={{display: 'block'}} type="submit" value="Registration" />
                    </form>
                    <p><Link style={{color: '#fff'}} to="/login">Already have an account? click here for login</Link></p>
                  </div>
              </div>
            </div>
        </section>
      </div>
    </div>
  );
}

export default Registration;