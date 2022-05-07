import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url =`http://localhost:5000/service`
    fetch(url, {
        method: 'post',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res =>res.json())
    .then(result =>{
        console.log(result)
    })
  };
  return (
    <div className="w-50 mx-auto">
      <h1> pleas add a service </h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
        <textarea className="mb-2" placeholder="Description" {...register("description")} />
        <input className="mb-2" placeholder="price" type="number" {...register("price")} />
        <input className="mb-2" placeholder="Photo Url" {...register("img")} />
        <input type="submit" value='add service' />
      </form>
    </div>
  );
};

export default AddService;
