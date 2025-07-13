'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20industrial%20facility%20with%20clean%20white%20background%2C%20advanced%20polymer%20manufacturing%20equipment%2C%20professional%20laboratory%20setting%2C%20minimal%20design%2C%20bright%20lighting%2C%20scientific%20innovation%2C%20chemical%20engineering%20workspace%2C%20contemporary%20industrial%20architecture&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              A revolution in the{' '}
              <span className="text-blue-600">plastics industry</span>{' '}
              with engineered compounds
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Leading the transformation of polymer technology through innovative engineering solutions and sustainable manufacturing processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 font-semibold whitespace-nowrap cursor-pointer">
                Explore Solutions
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-200 font-semibold whitespace-nowrap cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20engineer%20in%20blue%20uniform%20working%20with%20advanced%20polymer%20manufacturing%20equipment%2C%20modern%20industrial%20setting%2C%20clean%20laboratory%20environment%2C%20scientific%20precision%2C%20innovation%20technology%2C%20professional%20workplace%2C%20contemporary%20design%2C%20bright%20professional%20lighting&width=600&height=700&seq=hero-image&orientation=portrait"
                alt="Professional Engineer"
                className="w-full h-[600px] object-cover object-top rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Innovation Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}