import Link from "next/link";

const page = () => {
  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900">
          Jobs Management
        </h2>
        <p className="text-gray-500 mt-2">
          Manage all your job postings
        </p>

        {/* Button */}
        <Link href="/admin/create">
        <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md! text-sm hover:bg-blue-700 transition">
          Create New Job
        </button>
        </Link>

        {/* Table Card */}
        <div className="mt-8 bg-white border rounded-xl p-4">
          <h3 className="font-semibold mb-4">All Jobs (6)</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              
              {/* Head */}
              <thead className="bg-gray-100 text-sm text-gray-600">
                <tr>
                  <th className="px-4 py-3 font-medium">Title</th>
                  <th className="px-4 py-3 font-medium">Company</th>
                  <th className="px-4 py-3 font-medium">Category</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-sm">
                
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-medium">Senior Frontend Engineer</p>
                    <p className="text-gray-500 text-xs">
                      San Francisco, CA
                    </p>
                  </td>
                  <td className="px-4 py-3">TechCorp</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs border rounded">
                      Technology
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs border rounded">
                      Full-time
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-red-500 border px-3 py-1 rounded text-xs hover:bg-red-50">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-medium">UX/UI Designer</p>
                    <p className="text-gray-500 text-xs">New York, NY</p>
                  </td>
                  <td className="px-4 py-3">Design Studio</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs border rounded">
                      Design
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs border rounded">
                      Full-time
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-red-500 border px-3 py-1 rounded text-xs hover:bg-red-50">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-medium">Digital Marketing Manager</p>
                    <p className="text-gray-500 text-xs">
                      Los Angeles, CA
                    </p>
                  </td>
                  <td className="px-4 py-3">MarketingPro</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs border rounded">
                      Marketing
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs border rounded">
                      Full-time
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-red-500 border px-3 py-1 rounded text-xs hover:bg-red-50">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-medium">Full Stack Developer</p>
                    <p className="text-gray-500 text-xs">Remote</p>
                  </td>
                  <td className="px-4 py-3">StartupHub</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs border rounded">
                      Technology
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs border rounded">
                      Full-time
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-red-500 border px-3 py-1 rounded text-xs hover:bg-red-50">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-medium">Sales Representative</p>
                    <p className="text-gray-500 text-xs">Chicago, IL</p>
                  </td>
                  <td className="px-4 py-3">SalesForce Co</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs border rounded">
                      Sales
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs border rounded">
                      Full-time
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-red-500 border px-3 py-1 rounded text-xs hover:bg-red-50">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-medium">Financial Analyst</p>
                    <p className="text-gray-500 text-xs">Boston, MA</p>
                  </td>
                  <td className="px-4 py-3">Finance Solutions</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs border rounded">
                      Finance
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs border rounded">
                      Full-time
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-red-500 border px-3 py-1 rounded text-xs hover:bg-red-50">
                      Delete
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;