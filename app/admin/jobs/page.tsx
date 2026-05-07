"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { Job } from "../../../types";

const page = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get<Job[]>("http://localhost:4000/job");
        setJobs(response.data ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load jobs.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const deleteJob = async (id: string) => {
    try {
      setError(null);
      await axios.delete(`http://localhost:4000/job/${id}`);
      setJobs((prev) => prev.filter((job) => job.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete job.");
    }
  };

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
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-semibold mb-0">All Jobs ({jobs.length})</h3>
            {loading && <p className="text-sm text-gray-500">Loading jobs...</p>}
            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-sm text-gray-600">
                <tr>
                  <th className="px-4 py-3 font-medium">Title</th>
                  <th className="px-4 py-3 font-medium">Company</th>
                  <th className="px-4 py-3 font-medium">Category</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {jobs.length === 0 && !loading ? (
                  <tr>
                    <td className="px-4 py-6 text-center text-gray-500" colSpan={5}>
                      No jobs found.
                    </td>
                  </tr>
                ) : (
                  jobs.map((job) => (
                    <tr key={job.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <p className="font-medium">{job.title}</p>
                        <p className="text-gray-500 text-xs">{job.location}</p>
                      </td>
                      <td className="px-4 py-3">{job.company}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 text-xs border rounded">{job.category}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 text-xs border rounded">{job.jobType}</span>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => deleteJob(job.id)}
                          className="text-red-500 border px-3 py-1 rounded text-xs hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;