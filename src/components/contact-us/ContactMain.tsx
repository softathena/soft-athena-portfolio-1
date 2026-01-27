import React from "react";
import BreadcrumbOne from "../common/Breadcrumb/BreadcrumbOne";
import BreadcrumbImg from "../../../public/assets/imgs/breadcrumb/breadcrumb-bg-06.png";
import ContactFormArea from "./ContactFormArea";
import ContactArea from "./ContactArea";

const ContactMain = () => {
  return (
    <>
      <BreadcrumbOne
        rowWrapperClass="col-xxl-7 col-xl-7 col-lg-8"
        title="Connect With Us For More Information"
        subTitle="Contact"
        breadcrumbImg={BreadcrumbImg}
      />
      <ContactArea />
      <ContactFormArea />
      {/* Map Area */}
      <div className="bd__map p-relative section-spacing-top fix">
        <div className="bd__google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35859.411787743935!2d90.33068811804655!3d23.810121022349733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bda0bd631b%3A0xd06b1cfbd2b6dd96!2sKalshi%20More%20Bus%20Stop!5e1!3m2!1sen!2sbd!4v1733849186130!5m2!1sen!2sbd"
            width="1920"
            height="580"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactMain;
