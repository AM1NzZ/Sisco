'use client';

export default function Advantages() {
  const advantages = [
    {
      icon: 'ri-flask-line',
      title: 'R&D Unit',
      description: 'State-of-the-art research and development facility with cutting-edge equipment and expert scientists driving innovation in polymer compounds.',
      color: 'blue'
    },
    {
      icon: 'ri-award-line',
      title: 'Quality Certifications',
      description: 'Comprehensive quality management systems with international certifications ensuring consistent excellence in every product.',
      color: 'green'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Expert Product Solutions',
      description: 'Customized engineering solutions backed by decades of expertise, delivering optimal performance for specific industry requirements.',
      color: 'purple'
    },
    {
      icon: 'ri-global-line',
      title: 'Worldwide Distribution',
      description: 'Global supply chain network ensuring reliable delivery and support across international markets with local expertise.',
      color: 'orange'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Competitive Advantages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what sets us apart in the polymer compounds industry through our commitment to innovation, quality, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className={`w-16 h-16 flex items-center justify-center bg-${item.color}-100 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${item.icon} text-2xl text-${item.color}-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
              <div className="mt-6">
                <button className={`text-${item.color}-600 hover:text-${item.color}-700 font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer`}>
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Solutions?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mt-1">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Manufacturing</h4>
                    <p className="text-gray-600">Cutting-edge production facilities with automated quality control systems.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mt-1">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sustainable Practices</h4>
                    <p className="text-gray-600">Environmentally responsible manufacturing with minimal waste production.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mt-1">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Solutions</h4>
                    <p className="text-gray-600">Tailored polymer compounds designed for specific industry applications.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20polymer%20compound%20laboratory%20showcasing%20advanced%20testing%20equipment%2C%20quality%20control%20processes%2C%20scientific%20precision%2C%20clean%20workspace%2C%20professional%20environment%2C%20innovation%20technology%2C%20industrial%20research%20facility&width=600&height=400&seq=advantages-main&orientation=landscape"
                alt="Quality Control Laboratory"
                className="w-full h-80 object-cover object-top rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}