import React from "react";
import Human1 from "../../assets/my_pic.JPG";

const Leadership = () => {
  const executives = [
    {
      name: "Vice President",
      position: "COO",
      description:
        "As Chief Operating Officer, I lead efficient corporate operations and process innovation.",
      imageUrl: Human1,
    },
    {
      name: "Director",
      position: "CTO",
      description: "She leads the latest technology trends and oversees the R&D division.",
      imageUrl: Human1,
    },
    {
      name: "Director",
      position: "CFO",
      description:
        "I am responsible for establishing financial strategies and managing finances to enhance corporate value.",
      imageUrl: Human1,
    },
    {
      name: "Director",
      position: "CMO",
      description:
        "We are leading the development of global marketing strategies and enhancement of brand value.",
      imageUrl: Human1,
    },
  ];

  const teamMembers = [
    {
      name: "Manager",
      position: "Development Team Leader",
      description: "I am responsible for new product development and technological innovation.",
      imageUrl: Human1,
    },
    {
      name: "Manager",
      position: "Sales Manager",
      description: "I am responsible for global market development and customer management.",
      imageUrl: Human1,
    },
    {
      name: "Manager",
      position: "Quality Control Team Leader",
      description: "I am responsible for improving product quality and managing the quality system.",
      imageUrl: Human1,
    },
    {
      name: "Manager",
      position: "HR Manager",
      description: "I am responsible for establishing personnel policies and managing personnel.",
      imageUrl: Human1,
    },
  ];

  return (
    <div className="container max-w-7xl mx-auto px-4 py-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Introduction of Executives
        </h1>
        <p className="text-xl text-gray-600">
          Darnbi Company's Leadership in Innovation and Growth
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 mb-24 items-center">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">CEO greetings</h2>
          <div className="text-lg text-gray-600 space-y-6">
            <p>Hello, I am CEO Sakong of Darnbi Company.</p>
            <p>
              Darnbi Company was founded a decade ago with a clear mission: to turn advanced AI research into practical solutions.
We have built intelligent systems that support industries from finance to aerospace, focusing on scalability and reliability.

            </p>
            <p>
              Our vision is to keep pushing the boundaries of AI innovation while
               delivering real value to our partners and clients.
            </p>
            <p className="font-semibold mt-8">
              CEO of Darnbi Company
            </p>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={Human1} className="w-full aspect-[3/4] object-cover" />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold text-gray-800">CEO Darnbi</h3>
              <p className="text-indigo-600">CEO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.map((executive, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-square bg-gray-200">
                <img
                  src={executive.imageUrl}
                  alt={executive.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{executive.name}</h3>
                <p className="text-indigo-600 font-semibold mb-4">{executive.position}</p>
                <p className="text-gray-600">{executive.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Core members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((teamMember, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-square bg-gray-200">
                <img
                  src={teamMember.imageUrl}
                  alt={teamMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{teamMember.name}</h3>
                <p className="text-indigo-600 font-semibold mb-4">{teamMember.position}</p>
                <p className="text-gray-600">{teamMember.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
