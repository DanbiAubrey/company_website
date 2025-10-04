import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-white py-20 lg:py-40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg">
            Have any questions? Feel free to contact us anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: "Call Inquiry",
              info: "123456789",
              subInfo: "09:00am - 18:00pm",
            },
            {
              title: "Email Inquiry",
              info: "dobbydarnbi@gmail.com",
              subInfo: "24 hours available",
            },
            {
              title: "Location",
              info: "Seoul",
              subInfo: "Yangjae",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow duration-300 text-center"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.info}</p>
              <p className="text-gray-500 text-sm">{item.subInfo}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.279301018033!2d126.9754847612344!3d37.572040327749015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2eb421c44ad%3A0xe955a50c118085f8!2sGwanghwamun%20Square!5e0!3m2!1sen!2skr!4v1735115389923!5m2!1sen!2skr"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] md:h-[600px] lg:h-[600px]"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block px-10 py-3 text-lg font-medium text-white bg-red-600 rounded-lg shadow hover:bg-red-700 transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
