import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex py-3 justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data d-flex mb-2 py-3 justify-content-between align-items-center">
                <div className="cart-col-1 gap-30 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-75">
                    <p>watch</p>
                    <p>Color: white</p>
                    <p>Size: M</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ 100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-conterol"
                      name=""
                      id=""
                      type="number"
                      min={0}
                      max={10}
                    />
                  </div>
                  <div>
                    <MdDelete />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/store-id" className="button">
                  Continue Shopping
                </Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: $1000</h4>
                  <p>Taxas & shipping calculation at checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Cart;
