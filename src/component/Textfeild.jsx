import { useField, ErrorMessage } from "formik";
import React from "react";
import "../App.css";

export default function Textfeild({ label, ...props }) {
  const [feild, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={feild.name}>{label}</label>
      <input
        autoComplete="off"
        {...feild}
        {...props}
        name={props.name}
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
      />
      <ErrorMessage component={"div"} name={feild.name} className="error" />
    </div>
  );
}
