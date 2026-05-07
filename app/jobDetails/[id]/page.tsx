import Header from "@/app/_components/Header";
import Link from "next/link";

const page = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
        <Header />
      <div className="mt-5 mb-7 max-w-5xl mx-auto px-4">
        {/* Back */}
        <Link href="/">
        <button className="text-sm text-gray-600 mb-4">
          ← Back to Jobs
        </button>
        </Link>

        {/* Card */}
        <div className="bg-white border rounded-xl p-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Senior Frontend Engineer
              </h2>
              <p className="text-gray-500 mt-1">
                TechCorp • San Francisco, CA
              </p>
            </div>

            <span className="px-3 py-1 text-sm border rounded-md w-fit">
              Full-time
            </span>
          </div>

          {/* Divider */}
          <div className="border-t my-6"></div>

          {/* Salary */}
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Salary:</span> $100,000 - $150,000
          </p>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Job Description</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We are looking for a skilled Frontend Engineer to join our team.
              You will be responsible for building user-friendly web interfaces
              using modern technologies like React and TypeScript.
            </p>
          </div>

          {/* Requirements */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Requirements</h3>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
              <li>3+ years of experience with React</li>
              <li>Strong knowledge of JavaScript / TypeScript</li>
              <li>Experience with REST APIs</li>
              <li>Good UI/UX understanding</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-600 w-100 text-white px-6 py-2 rounded-md! text-sm hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default page;