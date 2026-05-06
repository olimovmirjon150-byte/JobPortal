import Link from "next/link";

export default function AdminLoyout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
    <aside className="w-64 bg-black text-white fixed h-full left-0 top-0 flex flex-col p-6 z-50">
        {/* Logo */}
        <img src="/logoWhite.svg" alt="JobPortal Logo" width={160} className="mt-2" />
        <div className="flex-1">
          <p className="text-gray-500 text-xs font-bold mt-5 uppercase tracking-wider">
            Admin Menu
          </p>
          <nav className="space-y-6">
            <Link className="no-underline!" href="/admin/jobs">
            <div className="mb-4 flex items-center gap-3 cursor-pointer hover:text-blue-400 transition">
              <span className="text-xl">📋</span>
              <span className="font-medium">Jobs</span>
            </div>
            </Link>
            <Link className="no-underline!" href="/admin/create">
            <div className="mb-4 flex items-center gap-3 cursor-pointer hover:text-blue-400 transition">
              <span className="text-xl">➕</span>
              <span className="font-medium">Create Job</span>
            </div>
            </Link>
            <Link className="no-underline!" href="/admin/aplications">
            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400 transition">
              <span className="text-xl">📩</span>
              <span className="font-medium">Applications</span>
            </div>
            </Link>
          </nav>
        </div>

        {/* Logout tugmasi pastda */}
        <Link href="/">
          <button className="w-full bg-[#ff4d4d] hover:bg-red-600 text-white py-2 rounded-2 font-bold! transition! mt-auto1">
            Logout
          </button>
        </Link>
      </aside>
      <div className="ml-72 min-h-screen w-full bg-gray-100 p-10 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}