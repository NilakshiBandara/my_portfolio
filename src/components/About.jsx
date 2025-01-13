import React from "react"; 
import imgAboutUs from "../images/AboutUs.jpg";

export const About = () => {
  return (
    <section id="about" className="pt-20 ">
      <h2 className="text-5xl font-bold text-center text-neutral-800 mb-12">
        About Us
      </h2>
      <div className="flex flex-col md:flex-row m-5 gap-5">
        <div className="flex-1 w-full md:w-1/2">
          <div className="flex justify-center m-5 bg-gray-100 p-4 rounded-lg shadow-inner">
            <img
              className="w-full h-full p-5 text-center object-cover border border-gray-300"
              src={imgAboutUs}
              alt=""
            />
          </div>
        </div>
        <div className=" flex-1 w-full md:w-1/2">
          <div className="p-1 md:p-4 md:pr-5 mt-5 text-left">
            <p className="  text-left">
              <b>Welcome to IT Online Learing</b>, your trusted partner in
              building successful careers. ,<br />
              We specialize in{" "}
              <strong>
                recruitment services, coding expertise, and career development
              </strong>
              , helping individuals and organizations achieve their full
              potential in the fast-paced world of technology.....
            </p>
            <p className="mt-3 mb-3 font-extrabold">What We Do </p>
            <ul>
              <li className="m-3">
                <p>
                  <strong>Recruitment Services: </strong>
                  Whether you’re a job seeker looking for your dream role or a
                  company seeking top-notch talent, our recruitment services
                  ensure the perfect match. We work with a wide network of
                  professionals and employers to provide tailored solutions for
                  every need.
                </p>{" "}
              </li>
              <li className="m-3">
                {" "}
                <p>
                  <strong> Coding and Development: </strong>
                  We believe coding is the foundation of the modern tech
                  landscape. Our team provides comprehensive training, hands-on
                  projects, and mentorship to help individuals build in-demand
                  skills and thrive in the competitive tech industry.
                </p>
              </li>
              <li className="m-3">
                <p>
                  {" "}
                  <strong>Career Development: </strong>
                  From sharpening technical skills to mastering the art of
                  communication, we guide professionals on their journey to
                  becoming well-rounded leaders in their field.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
