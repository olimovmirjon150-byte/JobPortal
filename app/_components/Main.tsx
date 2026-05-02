import { FaSearch, FaStar, FaBolt } from "react-icons/fa";
import { Sparkles } from "lucide-react";

const Main = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Why Choose JobPortal?
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We've designed the most intuitive job search platform to help you find opportunities
            that align with your career goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="border rounded-xl p-6 hover:border-blue-500! transition">
            <FaSearch className="text-3xl text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Powerful Search</h3>
            <p className="text-gray-500 text-sm">
              Advanced filtering by job title, category, and more. Find exactly what you're looking for in seconds.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-6 hover:border-blue-500! transition">
            <FaStar className="text-3xl text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Curated Opportunities</h3>
            <p className="text-gray-500 text-sm">
              Carefully selected job postings from verified companies across industries and experience levels.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border rounded-xl p-6 hover:border-blue-500! transition">
            <Sparkles className="text-3xl text-pink-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">User-Friendly Interface</h3>
            <p className="text-gray-500 text-sm">
              Intuitive design makes job hunting simple and enjoyable. Browse, filter, and explore with ease.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border rounded-xl p-6 hover:border-blue-500! transition">
            <FaBolt className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Real-Time Updates</h3>
            <p className="text-gray-500 text-sm">
              Instant notifications for new job postings. Never miss an opportunity that matches your profile.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Main;