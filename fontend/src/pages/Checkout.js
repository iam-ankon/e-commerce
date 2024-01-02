import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Container from "../components/Container";
const Checkout = () => {
  return (
    <>
      <Meta title={"Checkout"} />
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="wedsite-name">AR Cart</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/cart" className="text-dark total-price">
                        Cart
                      </Link>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Information
                    </li>
                    &nbsp; /<li className="breadcrumb-item total-price active">Shipping</li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="total">Contact Information</h4>
                <Link className="user-details text-dark mb-3">
                  AR Ankon (ar7web47@gmail.com)
                </Link>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex flex-wrap justify-content-between gap-15"
                >
                  <div className="w-100">
                    <select className="form-control form-select" name="" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartment, Suite, etc"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select className="form-control form-select" name="" id="">
                      <option value="" selected disabled>
                        State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Zipcode"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <IoMdArrowBack className="fs-5 me-2" />
                        Return to cart
                      </Link>
                      <Link to="/cart" className="button">
                        Continue Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex align-items-center gap-15">
                  <div className="w-75 d-flex gap-15">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge bg-secondary text-white rounded-circle p-1 position-absolute"
                      >
                        1
                      </span>
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div>
                      <h5 className="total">Watch</h5>
                      <p className="total-price">s/ ankana</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">$ 1000</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">SubTotal</p>
                  <p className="total-price">$ 10000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$ 10000</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$ 10000</h5>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Checkout;
