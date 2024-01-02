import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog"} />
      <BreadCrumb title="Dynamic Blog" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog" className="d-flex align-items-center gap-10">
                  {" "}
                  <IoIosArrowRoundBack className="fs-1" /> Go back to blog
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src="images/blog-1.jpg"
                  className="img-fluid my-4 w-100"
                  alt="blog"
                />
                <p>
                  Sunt cillum laborum ipsum Lorem aliqua non ad consectetur
                  aliquip nisi ad anim sunt dolore. Cillum pariatur cillum
                  dolore sit laborum qui cupidatat occaecat laborum proident
                  dolor excepteur. Qui ex qui nisi esse dolore tempor cupidatat
                  eu fugiat pariatur nostrud tempor.Nulla commodo duis minim
                  proident consequat cillum enim consectetur eiusmod do ut amet
                  irure. Elit consectetur est esse Lorem cillum laboris fugiat
                  quis dolor exercitation dolore proident. Duis sunt sint
                  voluptate mollit duis amet deserunt labore elit irure
                  incididunt duis. Do aliqua dolor labore sint occaecat. Ipsum
                  enim veniam occaecat anim minim esse. Occaecat officia velit
                  elit magna nulla dolor. Veniam reprehenderit id incididunt do
                  in sit et reprehenderit consectetur exercitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
