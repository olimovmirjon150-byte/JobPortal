import Link from "next/link";

const page = () => {
  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Back */}
        <Link href="/">
        <button className="text-sm text-gray-600 mb-4">
          ← Back to Jobs
        </button>
        </Link>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900">
          Create New Job
        </h2>
        <p className="text-gray-500 mt-2">
          Fill in the form below to create a new job posting
        </p>

        {/* Form Card */}
        <div className="mt-8 bg-white border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-6">Add New Job</h3>

          <form className="space-y-5">
            
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Job Title *</label>
                <input
                  type="text"
                  placeholder="e.g. Senior Frontend Engineer"
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Company *</label>
                <input
                  type="text"
                  placeholder="e.g. TechCorp"
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Location *</label>
                <input
                  type="text"
                  placeholder="e.g. San Francisco, CA"
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Salary (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. $100,000 - $150,000"
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Category</label>
                <select className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Technology</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Job Type</label>
                <select className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Full-time</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium">Description *</label>
              <textarea
                rows={5}
                placeholder="Job description and responsibilities..."
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Requirements */}
            <div>
              <label className="text-sm font-medium">
                Requirements (comma-separated)
              </label>
              <input
                type="text"
                placeholder="e.g. React, TypeScript, 5+ years experience, Node.js"
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <button className="bg-blue-600 w-100 text-white px-6 py-2 rounded-md! text-sm hover:bg-blue-700 transition">
                Add Job
              </button>

              <button
                type="reset"
                className="border w-100 px-6 py-2 rounded-md! text-sm hover:bg-gray-100 transition"
              >
                Reset
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default page;