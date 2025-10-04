import React from 'react';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: 'Custom software development',
      description: 'We provide optimized solutions tailored to our customers needs.',
      icon: '💻'
    },
    {
      id: 2,
      title: 'Cloud services',
      description: 'Building and managing a stable and scalable cloud infrastructure',
      icon: '☁️'
    },
    {
      id: 3,
      title: 'Security Solutions',
      description: 'Building a secure system using the latest security technology',
      icon: '🔒'
    },
    {
      id: 4,
      title: 'Technology Consulting',
      description: 'Establishing the optimal technology strategy through expert analysis',
      icon: '📊'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-32 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Services
        </h1>
        <p className="text-xl text-gray-600">
          We support business success with innovative technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
         Why choose us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              10+ years of experience
            </h4>
            <p className="text-gray-600">
              Project experience in various industries
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
             Team of experts
            </h4>
            <p className="text-gray-600">
              Composed of experienced developers and consultants
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              24/7 support
            </h4>
            <p className="text-gray-600">
              24/7 technical support service
            </p>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Project progress process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Requirements Analysis', desc: 'Accurately understand customer needs and goals' },
            { step: '02', title: 'Design and Planning', desc: 'Establishing optimal solution design and development plan' },
            { step: '03', title: 'Development and Testing', desc: 'Systematic development and quality verification in progress' },
            { step: '04', title: 'Distribution and Maintenance', desc: 'Stable service operation and continuous improvement' },
          ].map((item, index) => (
            <div key={index} className="relative p-6 bg-white rounded-xl shadow-md">
              <div className="text-blue-600 text-5xl font-bold mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 bg-blue-600 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Are you ready to start your project?
        </h2>
        <p className="text-xl mb-8">
          Consult with an expert and find the best solution.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Apply for a free consultation
        </button>
      </div>
    </div>
  );
};

export default Services;