import React from 'react';
import { useForm } from "react-hook-form";

function AddService() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    const uploadedImage = data.upload[0];
    formData.append("serviceImage", uploadedImage);
    formData.append("service_name", data.name);
    formData.append("service_des", data.des);
    formData.append("service_hour", data.hour);
    formData.append("service_price", data.price);

    fetch('https://damp-basin-39861.herokuapp.com/add-service', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    });
  };

  return (
    <div>
    <br />
      <h5>Add Services</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Service Name" type="text" className="form-control" {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}


      <textarea placeholder="Service Description" type="text" className="form-control" {...register("des", { required: true })}></textarea>
      {errors.des && <span>This field is required</span>}

      <input placeholder="Price" type="text" className="form-control" {...register("price", { required: true })} />
      {errors.price && <span>This field is required</span>}

      <select {...register("hour", { required: true })}>
        <option disabled>Select Hour</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      {errors.price && <span>This field is required</span>}

      <input placeholder="Upload Service Image" type="file" className="form-control" {...register("upload", { required: true })} />
      {errors.upload && <span>This field is required</span>}
      <br />
      <input type="submit" value="Add Service" />
    </form>
    </div>
  );
}

export default AddService;