import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllCards from "./allCards";
import Navbar from "./component/Navbar";
import { calculateTotals } from "./features/cart/cartSlice";

import Home from "./Home";
import Homecard from "./Homecard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function NewApp() {
  const dispatch = useDispatch();
  const { cartItem, amount } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItem]);

  return (
    <main style={{ backgroundColor: "lightgrey", height: "100%" }}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/mybag" element={<AllCards />} />
        </Routes>
      </Router>

      {/* <AllCards /> */}
    </main>
  );
}
