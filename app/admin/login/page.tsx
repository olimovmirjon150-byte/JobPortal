"use client";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AdminFullPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("admin@jobportal.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("jobPortalAdmin") === "true") {
      router.replace("/admin/jobs");
    }
  }, [router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (email === "admin@jobportal.com" && password === "admin123") {
      localStorage.setItem("jobPortalAdmin", "true");
      router.push("/admin/jobs");
      return;
    }

    setError("Incorrect email or password.");
  };

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      {/* --- O'NG TARAF: ASOSIY KONTENT --- */}
      {/* ml-64 sidebar kengligi uchun joy tashlaydi */}
      <main className="flex-1 ml-64 flex flex-col items-center justify-center p-10">
        {/* Markaziy Logo va Sarlavha */}
        <div className="text-center mb-8">
        <img src="/logo.svg" alt="JobPortal Logo" width={250} className="mt-2 mx-auto" />
          <h2 className="text-4xl font-extrabold text-gray-800! mt-5">
            Admin Dashboard
          </h2>
          <p className="text-gray-500 text-lg">
            Sign in to manage job postings
          </p>
        </div>

        {/* Login Formasi Card */}
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 w-full max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700! font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 p-2 rounded-lg focus:ring-2! focus:ring-blue-500! outline-none! transition!"
                placeholder="admin@jobportal.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 p-2 rounded-lg focus:ring-2! focus:ring-blue-500! outline-none! transition!"
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button className="w-full bg-blue-700 hover:bg-blue-900 text-white py-2 rounded-2 font-bold text-lg transition shadow-lg">
              Sign In
            </button>
          </form>


          {/* Demo Ma'lumotlar Qutisi */}
          <div className="mt-8 bg-[#f3f0f1] p-3 rounded-xl border border-gray-200/50">
            <p className="font-bold text-gray-800! mb-2">Demo Credentials:</p>
            <div className="text-gray-600! space-y-1!">
              <p>Email: admin@jobportal.com</p>
              <p>Password: admin123</p>
            </div>
          </div>
        </div>

        {/* Pastdagi link */}
        <Link href="/">
        <button className="mt-8! text-blue-800 font-semibold">
          Back to Home
        </button>
        </Link>
      </main>
    </div>
  );
};

export default AdminFullPage;