import { Formik, Form } from "formik";
import React from "react";
import Textfeild from "./Textfeild";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { updateUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validate = Yup.object({
    firstName: Yup.string()
      .matches(/^[aA-zZ\s]+$/, "Please enter valid name")
      .max(15, "Must be 15 characters or less")
      .required("Required!"),
    lastName: Yup.string()
      .matches(/^[aA-zZ\s]+$/, "Please enter valid name")
      .max(20, "Must be 20 characters or less")
      .required("Required!"),
    email: Yup.string()
      .email("Email is inavlid")
      .required("Email is Required!"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters")
      .required("Password is Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm Password is Required!"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log("final", values);
        dispatch(updateUser({ values }));
        navigate("/");
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign up</h1>
          <Form>
            <Textfeild label="First Name" type="text" name="firstName" />
            <Textfeild label="Last Name" type="text" name="lastName" />
            <Textfeild label="Email" type="email" name="email" />
            <Textfeild label="Password" type="password" name="password" />
            <Textfeild
              label="Confirm Password"
              type="password"
              name="confirmPassword"
            />
            <button className="btn btn-success mt-3" type="submit">
              Register
            </button>
            <button className="btn btn-dark mt-3 ms-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
