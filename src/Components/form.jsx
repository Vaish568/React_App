import React from "react";
import styles from "./form.css";
export default function Form() {
  return (
    <div className={styles.login_Wrapper}>
      <h1>Login</h1>
      <input className={styles.inputFeild} type={"email"} placeholder="Email" />
      <input
        className={styles.inputFeild}
        type={"password"}
        placeholder="Password"
      />
      <button className={styles.submit} type={"submit"}>
        Submit
      </button>
    </div>
  );
}
