const Applications = () => {
  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900">
          Job Applications
        </h2>
        <p className="text-gray-500 mt-2">
          Review and manage all job applications (1 total)
        </p>

        {/* Table */}
        <div className="mt-8 bg-white border rounded-xl overflow-hidden">
          <table className="w-full text-left">
            
            {/* Head */}
            <thead className="bg-gray-50 border-b">
              <tr className="text-sm text-gray-600">
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Job</th>
                <th className="px-6 py-4 font-medium">Applied Date</th>
                <th className="px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-900">
                  nozim
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  kozim@gmail.com
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Senior Frontend Engineer - TechCorp
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  Apr 30, 2026, 08:51 AM
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:underline mr-4">
                    View
                  </button>
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
};

export default Applications;