import React from "react";
import useServices from "../Hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handelDelete = (id) => {
    const prosed = window.confirm("are you sure");
    if (prosed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const reminding = services.filter(service => service._id !== id)
          setServices(reminding)
        });
    }
  };
  return (
    <div>
      <h1>ManageServices</h1>
      {services.map((service) => (
        <div key={service._id}>
          <h4>
            {service.name}{" "}
            <button onClick={() => handelDelete(service._id)}>x</button>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
