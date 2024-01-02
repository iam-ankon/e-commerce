import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaHome, FaPhoneAlt, FaInfo } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58387.62481367996!2d90.38426199999998!3d23.846087700000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c691ba478fbd%3A0xd1b3f71371eb15ec!2sHazrat%20Shahjalal%20International%20Airport!5e0!3m2!1sen!2sbd!4v1702229515362!5m2!1sen!2sbd"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contect-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div>
                      <input type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div>
                      <input type="text" className="form-control" placeholder="Mobile Number" />
                    </div>
                    <div>
                      <textarea name="" id="" className="w-100 form-control" cols="30" rows="4" placeholder="Comments"></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contect-title mb-4">Get In Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FaHome className="fs-5" />
                        <address className="mb-0">
                          Hno:03 , Road:08 , Baunua Kalibari , Uttra Dhaka , Sector 3
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FaPhoneAlt className="fs-5" />
                        <a href="+01684375375">01684375375</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <IoIosMail className="fs-5" />
                        <a href="ar7web47@gmail.com">ar7web47@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FaInfo className="fs-5"/>
                        <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
