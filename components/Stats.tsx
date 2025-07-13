"use client";

import { useState, useEffect } from "react";

export default function Stats() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    patents: 0,
  });

  useEffect(() => {
    const targets = {
      projects: 25000,
      clients: 1500,
      years: 16,
      patents: 80,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const incrementCounters = () => {
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounters({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          years: Math.floor(targets.years * progress),
          patents: Math.floor(targets.patents * progress),
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepDuration);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          incrementCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sisco: A Leader in Polymer Compounds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering excellence through innovation, quality, and sustainable
            manufacturing practices across global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl mb-4 group-hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                +{counters.projects.toLocaleString()}K
              </div>
              <div className="text-gray-600 font-medium">
                Projects Completed
              </div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl mb-4 group-hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-green-600 mb-2">
                +{counters.clients}
              </div>
              <div className="text-gray-600 font-medium">Global Clients</div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl mb-4 group-hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                +{counters.years}
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl mb-4 group-hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                +{counters.patents}
              </div>
              <div className="text-gray-600 font-medium">
                Patents & Innovations
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Expertise</h3>
            <p className="text-gray-600 leading-relaxed">
              With over 16 years of experience in polymer compound development,
              we've established ourselves as industry leaders through continuous
              innovation and quality excellence. Our advanced manufacturing
              processes and research capabilities enable us to deliver
              cutting-edge solutions that meet the evolving needs of modern
              industries.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer">
                View Portfolio
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://readdy.ai/api/search-image?query=Advanced%20polymer%20manufacturing%20laboratory%20with%20precise%20scientific%20equipment%2C%20clean%20modern%20workspace%2C%20professional%20testing%20environment%2C%20quality%20control%20processes%2C%20innovative%20technology%2C%20industrial%20research%20facility&width=300&height=200&seq=lab-1&orientation=landscape"
              alt="Laboratory Equipment"
              className="w-full h-48 object-cover object-top rounded-xl"
            />
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20scientist%20working%20with%20polymer%20compounds%2C%20modern%20laboratory%20setting%2C%20advanced%20chemical%20analysis%2C%20precision%20instruments%2C%20scientific%20research%2C%20clean%20workspace%2C%20professional%20environment&width=300&height=200&seq=lab-2&orientation=landscape"
              alt="Research Process"
              className="w-full h-48 object-cover object-top rounded-xl"
            />
            <img
              src="https://readdy.ai/api/search-image?query=High-tech%20polymer%20production%20facility%2C%20automated%20manufacturing%20systems%2C%20quality%20control%20processes%2C%20modern%20industrial%20equipment%2C%20clean%20production%20environment%2C%20advanced%20technology&width=300&height=200&seq=production-1&orientation=landscape"
              alt="Production Facility"
              className="w-full h-48 object-cover object-top rounded-xl"
            />
            <img
              src="https://readdy.ai/api/search-image?query=Finished%20polymer%20products%20display%2C%20engineered%20compounds%20samples%2C%20quality%20materials%20showcase%2C%20professional%20product%20presentation%2C%20modern%20packaging%2C%20innovative%20solutions&width=300&height=200&seq=products-1&orientation=landscape"
              alt="Final Products"
              className="w-full h-48 object-cover object-top rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
