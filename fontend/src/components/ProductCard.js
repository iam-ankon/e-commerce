import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="/store-id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src="images/wish.svg" alt="wishlist" />
            </button >
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" alt="watch" />
            <img src="images/watch-1.jpg" alt="watch-1" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              //isHalf={true}
              edit={false}
              // emptyIcon={<i className="far fa-star"></i>}
              // halfIcon={<i className="fa fa-star-half-alt"></i>}
              // fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Non amet enim velit velit nisi exercitation nostrud. Nulla ex
              tempor incididunt elit laboris voluptate et enim aliqua id
              occaecat.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="images/prodcompare.svg" alt="prod-compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/add-cart.svg" alt="add-art" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="/store-id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src="images/wish.svg" alt="wishlist" />
            </button >
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" alt="watch" />
            <img src="images/watch-1.jpg" alt="watch-1" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for students
            </h5>
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
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Amet sunt commodo tempor deserunt. Labore ex eiusmod nostrud ipsum
              minim adipisicing in labore ad cillum nisi ullamco cillum. Tempor
              esse reprehenderit dolore aliqua.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
