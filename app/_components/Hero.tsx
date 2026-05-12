import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto text-center">
        {/* Top Label */}
        <p className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-4">
          Career Opportunities
        </p>

        {/* Main Heading */}
        <h1 className=" text-slate-900 mb-6">
          Find Your Perfect <span className="text-blue-500">Career</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover career opportunities from top companies. Search, filter, and
          apply to roles that match your skills and aspirations.
        </p>

        {/* Search Bar Container */}
        <div className="mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-0 items-center shadow-sm border border-slate-200 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search by job title, company, or keyword..."
              className="w-400 outline-none text-slate-700 bg-slate-50/50 p-2"
            />
            <Link href="/jobs">
            <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700! text-white py-2 px-6 font-medium transition-colors">
              Search
            </button>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link href="/jobs">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-md! font-semibold hover:bg-blue-700! transition-all">
            Browse All Jobs
          </button>
          </Link>
          <Link href="/admin/login">
          <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-md! font-semibold hover:bg-orange-700! hover:text-white transition-all">
            Post a Job
          </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-blue-500">500+</span>
            <span className="text-slate-500 mt-1">Active Jobs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-blue-500">200+</span>
            <span className="text-slate-500 mt-1">Companies</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-blue-500">50K+</span>
            <span className="text-slate-500 mt-1">Placements</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;