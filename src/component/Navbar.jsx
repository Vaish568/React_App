import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ShoppingBag } from "@mui/icons-material";

const Navbar = () => {
  //UseSelector is the hook which has access to the redux's store state and takes a function as parameter
  const { amount, total } = useSelector((store) => store.cart);
  return (
    <>
      <nav>
        <div className="p-3 navbar navbar-expand-sm navbar-light bg-success d-flex justify-content-between">
          <Link to={"/"} className="text-decoration-none">
            <h3 className=" p-1 text-white nav-item">Shopify</h3>
          </Link>

          <div className="d-flex flex-row justify-content-center ">
            <h3 className="p-1 text-white mr-5">Total:{total}</h3>
            <Link to={"/mybag"}>
              <div className="pt-1 text-white">
                <ShoppingBag />
                <strong className=" pt-1 text-white ml-0 text-decoration-none">
                  {amount}
                </strong>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
