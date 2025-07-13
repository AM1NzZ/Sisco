'use client';

export default function News() {
  const newsArticles = [
    {
      title: 'Breakthrough Innovation in Biodegradable Polymers',
      description: 'Our latest research breakthrough in sustainable polymer compounds offers new possibilities for environmentally friendly packaging solutions.',
      date: 'March 15, 2024',
      category: 'Innovation',
      image: 'https://readdy.ai/api/search-image?query=Biodegradable%20polymer%20materials%20in%20modern%20laboratory%20setting%2C%20sustainable%20packaging%20samples%2C%20eco-friendly%20compounds%2C%20green%20technology%20innovation%2C%20scientific%20research%2C%20clean%20environment&width=400&height=250&seq=news-1&orientation=landscape'
    },
    {
      title: 'Partnership with Leading Automotive Manufacturers',
      description: 'Strategic collaboration to develop next-generation lightweight compounds for electric vehicle components, enhancing performance and sustainability.',
      date: 'March 8, 2024',
      category: 'Partnership',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20automotive%20polymer%20components%20for%20electric%20vehicles%2C%20lightweight%20materials%2C%20modern%20car%20parts%2C%20innovative%20manufacturing%2C%20clean%20industrial%20setting%2C%20professional%20presentation&width=400&height=250&seq=news-2&orientation=landscape'
    },
    {
      title: 'International Expansion into European Markets',
      description: 'Opening new distribution centers across Europe to better serve our growing international customer base with faster delivery and local support.',
      date: 'February 28, 2024',
      category: 'Expansion',
      image: 'https://readdy.ai/api/search-image?query=Modern%20European%20distribution%20center%20for%20polymer%20compounds%2C%20international%20logistics%20facility%2C%20global%20supply%20chain%2C%20professional%20warehouse%2C%20advanced%20storage%20systems%2C%20worldwide%20operations&width=400&height=250&seq=news-3&orientation=landscape'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest News and Articles
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with our latest innovations, partnerships, and industry insights.
            </p>
          </div>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer">
            View All News
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <article 
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <i className="ri-calendar-line mr-2"></i>
                  {article.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {article.description}
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Stay Informed with Our Newsletter
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest updates on polymer innovations, industry trends, and company news delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold whitespace-nowrap cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}