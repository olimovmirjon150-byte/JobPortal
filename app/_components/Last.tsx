import Link from "next/link";

const Last = () => {
  return (
    <section className="bg-linear-to-r from-blue-900 to-blue-700 py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready to Advance <br /> Your Career?
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-blue-200 max-w-2xl mx-auto">
          Discover hundreds of job opportunities from leading companies. Start
          your journey to your next role today.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link href="/jobs">
          <button className="bg-white text-blue-900 font-medium px-6 py-3 rounded-xl! hover:bg-gray-100 transition">
            Explore Jobs
          </button>
          </Link>
          <Link href="/admin/login">
          <button className="border bg-blue-600 text-white px-6 py-3 rounded-xl! hover:bg-orange-700! hover:text-blue-900 transition">
            Post a Job
          </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Last;