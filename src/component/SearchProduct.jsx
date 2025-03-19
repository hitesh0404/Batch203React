import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function SearchProduct() {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const myOnSubmit = (data) => {
    console.log(data);
    navigate(`/search-result/${data.q}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit(myOnSubmit)} className="d-flex my-2 my-lg-0">
        <input
          className="form-control me-sm-2"
          type="text"
          placeholder="Search"
          {...register("q", { required: "This field is Required" })}
        />
        <span>{errors.q && errors.q.message}</span>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </>
  );
}
