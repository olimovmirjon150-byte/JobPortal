"use client";

import Link from "next/link";
import axios from "axios";
import Header from "../_components/Header";
import { useEffect, useState } from "react";
import { Job } from "../../types";

const Page = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get<typeof jobs>("http://localhost:4000/job");
        setJobs(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load jobs.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-6 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">
            Find Your Next Opportunity
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Explore our curated list of job openings and find the perfect match
            for your career.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow flex flex-col">
          <h4 className="text-lg">Filter Jobs</h4>
          <p className="text-gray-500 mt-4 ml-2">Search by keyword:</p>
          <input
            type="text"
            placeholder="Search by keyword"
            className="w-full border rounded-lg px-3 py-2"
          />
          <p className="text-gray-500 mt-4 ml-2">Category:</p>
          <select className="w-full border rounded-lg px-3 py-2">
            <option>All Categories</option>
            <option>Technology</option>
            <option>Marketing</option>
            <option>Design</option>
            <option>Sales</option>
            <option>Finance</option>
            <option>Other</option>
          </select>
          <button type="reset" className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition-all">
            Reset Filters
          </button>
        </div>

        <main className="md:col-span-2 flex flex-col gap-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold">Available Jobs</h2>
            <p className="text-sm text-gray-500">{loading ? "Loading..." : `${jobs.length} positions`}</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4">
              {error}
            </div>
          )}

          {loading ? (
            <div className="grid gap-6">
              {[1, 2].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow animate-pulse h-60"></div>
              ))}
            </div>
          ) : jobs.length === 0 ? (
            <div className="bg-white p-6 rounded-lg shadow text-center text-gray-500">
              No jobs available at the moment.
            </div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow flex flex-col gap-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-gray-500">{job.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <p>{job.location}</p>
                      <p>{job.salary}</p>
                    </div>
                  </div>

                  <p className="text-gray-600">{job.description}</p>

                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="px-3 py-1 bg-gray-100 rounded">{job.category}</span>
                    <span className="px-3 py-1 bg-gray-100 rounded">{job.jobType}</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href={`jobDetails/${job.id}`}>
                    <button className="bg-blue-600 w-100 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all">
                      View Details
                    </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Page;