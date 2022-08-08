import React from "react";
import cartItems from "./cartItems";
import Homecard from "./Homecard";
import "./Home.css";

export default function Home() {
  return (
    <div className=" row mx-auto">
      {/* <div className="home__image"></div>
      <h3 className="p-3 d-flex justify-content-center">
        shop your favourites here!
      </h3> */}
      {/* <img
        className="home__image"
        src="https://cdn.dribbble.com/users/5023391/screenshots/17400824/media/3fbb671b78945dc62019fd08c36587b8.png?compress=1&resize=1000x750&vertical=top"
      /> */}
      {cartItems.map((ele) => {
        return (
          <Homecard
            image={ele.img}
            id={ele.id}
            price={ele.price}
            title={ele.title}
            amt={ele.amount}
          />
        );
      })}
    </div>
  );
}
