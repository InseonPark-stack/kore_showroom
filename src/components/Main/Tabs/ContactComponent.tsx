import React from "react";
import { useForm } from "react-hook-form";
import "./ContactComponent.css";

interface FormData {
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  request: string;
}

const ExampleForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contactForm">
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>Please enter a valid email address</span>}
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          {...register("address", { required: true })}
        />
        {errors.address && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          {...register("phoneNumber", { required: true })}
        />
        {errors.phoneNumber && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="request">Request</label>
        <textarea id="request" {...register("request")} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ExampleForm;
