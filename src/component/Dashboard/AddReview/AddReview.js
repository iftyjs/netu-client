import React, { useState } from 'react';
import { useForm } from "react-hook-form";

function AddReview() {
  const [successMessage, setSuccessMessage] = useState("");
  const localData = localStorage.getItem("nuto-user");
  const email = JSON.parse(localData).email;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    fetch('https://damp-basin-39861.herokuapp.com/add-review', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((json) => {
      setSuccessMessage(json.message);
    });
  };
  return (
    <div>
    <br />
      <h5>Add Review</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" type="text" className="form-control" {...register("name")} />
      {errors.name && <span>This field is required</span>}

      <textarea className="form-control" {...register("quote", { required: true })}></textarea>
      {errors.quote && <span>This field is required</span>}

      <input placeholder="Location" type="text" className="form-control" {...register("location")} />
      {errors.location && <span>This field is required</span>}

      <input type="hidden" value={email} {...register("email")} />
      <p>{successMessage}</p>
      <input type="submit" value="Submit Review" />
    </form>
    </div>
  );
}

export default AddReview;