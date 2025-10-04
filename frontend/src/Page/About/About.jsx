import React from "react";
import companyImage from "../../assets/image2.png";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-32 max-w-7xl">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-24">
        <img src={companyImage} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900"></div>
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
          <h3 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
            ABC Company
          </h3>
          <p className="text-base md:text-xl font-light">
            Leading the global market with innovation and trust.
          </p>
        </div>
      </div>

      <div className="mb-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-slate-800 text-center">
          About Us
        </h2>
        <div className="text-lg leading-relaxed text-gray-600 space-y-6">
          <p>
            Darnbi Company is an AI company that was established about 10 years ago.
          </p>
          <p>
           Darnbi Company is a technology-driven AI enterprise founded about 10 years ago. Since its establishment, the company has focused on developing advanced artificial intelligence solutions spanning machine learning, natural language processing, and knowledge-graph technologies. It has built a strong reputation for delivering scalable AI platforms that support industries such as finance, aerospace, and digital services.

Over the past decade, Darnbi Company has combined research expertise with practical engineering to design intelligent systems that improve decision-making, automation, and user experience. Its teams specialize in cutting-edge AI architectures, including recommendation systems, agent-based models, and retrieval-augmented generation.

With a commitment to innovation and reliability, the company continues to collaborate with global partners, universities, and industry leaders to push the boundaries of applied AI and deliver measurable business value.

          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
        {[
          { title: "Innovation", desc: "Leading the future through constant challenge and innovation" },
          { title: "Trust", desc: "We prioritize customer trust." },
          { title: "growth", desc: "We support the continuous growth of our members." },
        ].map((value, index) => (
          <div
            key={index}
            className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">
              {value.title}
            </h3>
            <p className="text-gray-600 text-lg">{value.desc}</p>
          </div>
        ))}
      </div>

      <div className="mb-24 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-slate-800">Company Vision</h2>
        <p className="text-2xl leading-relaxed text-gray-600 font-light">
          "By 2050, we aim to become a leading global technology innovation company,
          <br /> contributing to a better world."
        </p>
      </div>

      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-12 text-slate-800 text-center">
          Company History
        </h2>
        <div className="space-y-12 max-w-5xl mx-auto">
          {[
            { year: "2025", event: "Entering the global market" },
            { year: "2024", event: "Series B funding" },
            { year: "2023", event: "Acquisition of key technology patents" },
            { year: "2022", event: "Company establishment" },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 text-center">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-600">
                    {item.year}
                  </h3>
                  <p className="text-gray-700 text-lg">{item.event}</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
