import Link from "next/link";
import React from "react";

const ServiceSidebarWiget = () => {
  return (
    <>
      <div className="service__widget-item mb-30">
        <div className="service__contact-info-item underline-full">
          <h5>Contact Info</h5>
          <div className="contact__info-item">
            <ul>
              <li>
                <div className="contact__info">
                  <div className="contact__info-icon">
                    <span>
                      <i className="icon-location"></i>
                    </span>
                  </div>
                  <div className="contact__info-content">
                    <h6>
                      <Link
                        target="_blank"
                        href="https://goo.gl/maps/your-google-map-link"
                      >
                        Dhaka, Bangladesh
                      </Link>
                    </h6>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact__info">
                  <div className="contact__info-icon">
                    <span>
                      <i className="icon-phone"></i>
                    </span>
                  </div>
                  <div className="contact__info-content">
                    <h6>
                      <Link href="tel:+8801234567890">+8801300272795</Link>
                    </h6>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact__info">
                  <div className="contact__info-icon">
                    <span>
                      <i className="icon-envelope"></i>
                    </span>
                  </div>
                  <div className="contact__info-content">
                    <h6>
                      <Link href="mailto:softathena1@gmail.com">
                        softathena1@gmail.com
                      </Link>
                    </h6>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSidebarWiget;
