import Link from "next/link";
import Header from "../_components/Header";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-6 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">
            Find Your Next Opportunity
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Explore our curated list of job openings and find the perfect match
            for your career.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow flex flex-col">
          <h4 className="text-lg">Filter Jobs</h4>
          <p className="text-gray-500 mt-4 ml-2">Search by keyword:</p>
          <input
            type="text"
            placeholder="Search by keyword"
            className="w-full border rounded-lg px-3 py-2"
          />
          <p className="text-gray-500 mt-4 ml-2">Category:</p>
          <select className="w-full border rounded-lg px-3 py-2">
            <option>All Categories</option>
            <option>Technology</option>
            <option>Marketing</option>
            <option>Design</option>
            <option>Sales</option>
            <option>Finance</option>
            <option>Other</option>
          </select>
          <button type="reset" className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition-all">
            Reset Filters
          </button>
        </div>

        <main className="md:col-span-2 flex flex-col gap-6">
            <div className="flex justify-between">
                <h2>Available Jobs</h2>
               <p className="text-sm">6 positions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex flex-col gap-3">
            <h3 className="text-xl">Senior Frontend Engineer</h3>
            <p className="text-gray-600">
              We are looking for an experienced Frontend Engineer to join our
              growing team. You will work on modern web applications using React
              and TypeScript.
            </p>

            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-2 py-1 bg-gray-100 rounded">Technology</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Full-time</span>
            </div>
            <div className="flex items-center gap-3">
            <p className="text-gray-700">📍 San Francisco, CA</p>
            <p className="text-gray-700">💰 $120,000 - $160,000</p>
            </div>
            <div className="text-gray-600 text-sm">
              Requirements:
            </div>
            <div className="flex items-center gap-3 ml-2">
                <button className="text-xs! rounded border p-1">React</button>
                <button className="text-xs! rounded border p-1">TypeScript</button>
                <button className="text-xs! rounded border p-1">5+ years experience</button>
                <button className="text-xs! rounded border p-1">+1 more</button>
            </div>
            <Link href="/jobDetails">
            <button className="bg-blue-600 w-100 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all">
              View Details
            </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
