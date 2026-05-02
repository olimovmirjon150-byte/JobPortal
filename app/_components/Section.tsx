const Section = () => {
  return (
    <section className="bg-blue-900 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold">
          Trusted by Job Seekers Worldwide
        </h1>
        <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
          Our platform has helped thousands of professionals find their ideal career opportunities.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          
          <div>
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="text-blue-200 mt-2 text-sm">Active Job Listings</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">200+</h2>
            <p className="text-blue-200 mt-2 text-sm">Top Companies</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">50K+</h2>
            <p className="text-blue-200 mt-2 text-sm">Successful Placements</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">98%</h2>
            <p className="text-blue-200 mt-2 text-sm">User Satisfaction</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section;