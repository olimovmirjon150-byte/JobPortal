import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#020817] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-3">About JobPortal</h3>
            <p className="text-gray-400 text-sm">
              Your trusted platform for connecting with career opportunities.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <Link className="no-underline!" href="/jobs">
              <li className="text-gray-400 hover:text-orange-700! cursor-pointer">
                Browse Jobs
              </li>
              </Link>
              <Link className="no-underline!" href="/admin/login">
              <li className="text-gray-400 hover:text-orange-700! cursor-pointer">
                Post a Job
              </li>
              </Link>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <p className="text-gray-400 text-sm">
              support@jobportal.com
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <p className="text-center text-gray-500 text-sm">
          © 2024 JobPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;