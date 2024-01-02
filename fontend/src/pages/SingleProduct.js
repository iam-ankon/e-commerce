import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";

const SingleProduct = () => {
  const props = {
    width: 500,
    height: 600,
    zoomWidth: 600,
    img: "images/tab.jpg",
  };
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15 mt-2">
                <div>
                  <img src="images/tab.jpg" className="img-fluid" alt="" />
                </div>
                <div>
                  <img src="images/tab1.jpg" className="img-fluid" alt="" />
                </div>
                <div>
                  <img src="images/tab2.jpg" className="img-fluid" alt="" />
                </div>
                <div>
                  <img src="images/tab3.jpg" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids Headphone Bulk 10 Pack Multi Coloured For Student
                  </h3>
                </div>
                <div className="border-button py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      // isHalf={true}
                      edit={false}
                      // emptyIcon={<i className="far fa-star"></i>}
                      // halfIcon={<i className="fa fa-star-half-alt"></i>}
                      // fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">( 2 Reviews )</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Tab</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">Havells</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">Tab</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">Tab</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Availabliity :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex flex-column gap-10 mt-2 mb-3">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        X
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10 mt-2 mb-3">
                    <h3 className="product-heading">Color :</h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center flex-row gap-15 mt-2 mb-3">
                    <h3 className="product-heading">Quantity :</h3>
                    <div>
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "70px" }}
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0" type="submit">
                        Add To Cart
                      </button>
                      <button className="button signup border-0">
                        But It Now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" />
                        Add To Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <CiHeart className="fs-5 me-2" />
                        Add To Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10 my-3">
                    <h3 className="product-heading">Shipping & Returns :</h3>
                    <p className="product-data">
                      Free shipping and Returns Availabliity on other!
                      <br />
                      <b>5-10 business day!</b>
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-3">
                    <h3 className="product-heading">Product Link :</h3>
                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        copyToClipboard();
                      }}
                    >
                      Copy product link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="discription-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Discription</h4>
              <div className="bg-white p-3">
                <p>
                  Commodo sint ea aliqua proident amet. Lorem veniam dolor elit
                  tempor dolore officia Lorem quis labore id ipsum. Aliqua elit
                  eu culpa cupidatat laboris ullamco consectetur ad veniam
                  cillum cillum officia. Sint adipisicing pariatur cupidatat
                  nisi nisi consectetur exercitation culpa do labore. Commodo
                  aute anim labore esse consectetur irure officia. Officia
                  consequat quis culpa exercitation proident irure enim magna
                  dolore do anim est. Minim enim excepteur duis anim consequat
                  velit dolore qui ipsum cupidatat est quis et fugiat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviwes</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        // isHalf={true}
                        edit={false}
                        // emptyIcon={<i className="far fa-star"></i>}
                        // halfIcon={<i className="fa fa-star-half-alt"></i>}
                        // fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  <div>
                    {orderedProduct && (
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a raviwe
                      </a>
                    )}
                  </div>
                </div>
                <div className="review-form py-4">
                  <h4>Write a review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        // isHalf={true}
                        edit={true}
                        // emptyIcon={<i className="far fa-star"></i>}
                        // halfIcon={<i className="fa fa-star-half-alt"></i>}
                        // fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex align-items-center gap-10">
                      <h6 className="mb-0">AR-Ankon</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        // isHalf={true}
                        edit={false}
                        // emptyIcon={<i className="far fa-star"></i>}
                        // halfIcon={<i className="fa fa-star-half-alt"></i>}
                        // fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Cupidatat non culpa fugiat cupidatat reprehenderit
                      excepteur do culpa. Cupidatat duis magna sint eiusmod quis
                      dolor proident est. Dolor pariatur minim occaecat culpa
                      fugiat adipisicing. Nulla elit aute consequat mollit ex
                      incididunt do. Cupidatat aliqua cupidatat nostrud sunt
                      sunt ipsum veniam qui do irure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="section-heading">Our popular products</div>
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
