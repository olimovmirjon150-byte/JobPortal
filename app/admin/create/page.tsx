"use client";

import Link from "next/link";
import axios from "axios";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Job } from "../../../types";
import AdminGuard from "@/app/admin/AdminGuard";

const page = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [category, setCategory] = useState("Technology");
  const [jobType, setJobType] = useState("Full-time");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    if (!title || !company || !location || !description) {
      setError("Please fill in all required fields.");
      return;
    }

    const newJob: Omit<Job, "id"> = {
      title,
      company,
      location,
      salary,
      category,
      jobType,
      description,
      requirements,
    } as Omit<Job, "id">;

    try {
      setLoading(true);
      await axios.post("http://localhost:4000/job", newJob);
      setSuccess(true);
      setTitle("");
      setCompany("");
      setLocation("");
      setSalary("");
      setCategory("Technology");
      setJobType("Full-time");
      setDescription("");
      setRequirements("");
      setTimeout(() => router.push("/admin/jobs"), 800);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create job.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminGuard>
      <section className="py-10 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
        
        {/* Back */}
        <Link href="/admin/jobs">
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

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Job Title *</label>
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  type="text"
                  placeholder="e.g. Senior Frontend Engineer"
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Company *</label>
                <input
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
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
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
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
                  value={salary}
                  onChange={(event) => setSalary(event.target.value)}
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
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Technology</option>
                  <option>Marketing</option>
                  <option>Design</option>
                  <option>Sales</option>
                  <option>Finance</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Job Type</label>
                <select
                  value={jobType}
                  onChange={(event) => setJobType(event.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Freelance</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium">Description *</label>
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
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
                value={requirements}
                onChange={(event) => setRequirements(event.target.value)}
                type="text"
                placeholder="e.g. React, TypeScript, 5+ years experience, Node.js"
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 w-100 text-white px-6 py-2 rounded-md! text-sm hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? "Saving..." : "Add Job"}
              </button>

              <button
                type="reset"
                onClick={() => {
                  setTitle("");
                  setCompany("");
                  setLocation("");
                  setSalary("");
                  setCategory("Technology");
                  setJobType("Full-time");
                  setDescription("");
                  setRequirements("");
                  setError(null);
                  setSuccess(false);
                }}
                className="border w-100 px-6 py-2 rounded-md! text-sm hover:bg-gray-100 transition"
              >
                Reset
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  </AdminGuard>
  );
};

export default page;