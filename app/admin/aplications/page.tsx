"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Application } from "@/types";
import AdminGuard from "@/app/admin/AdminGuard";

const page = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getApplications = async () => {
      try {
        const { data } = await axios.get<Application[]>("http://localhost:4000/applications");
        setApplications(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load applications.");
      } finally {
        setLoading(false);
      }
    };

    getApplications();
  }, []);

  return (
    <AdminGuard>
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Job Applications</h2>
            <p className="text-gray-500 mt-2">
              Review and manage all job applications ({applications.length} total)
            </p>
          </div>
          {loading && <p className="text-sm text-gray-500">Loading applications...</p>}
          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>

        <div className="mt-8 bg-white border rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr className="text-sm text-gray-600">
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Job</th>
                <th className="px-6 py-4 font-medium">Applied Date</th>
              </tr>
            </thead>
            <tbody>
              {applications.length === 0 && !loading ? (
                <tr>
                  <td className="px-6 py-6 text-center text-gray-500" colSpan={4}>
                    No applications found.
                  </td>
                </tr>
              ) : (
                applications.map((application) => (
                  <tr key={application.id} className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm text-gray-900">{application.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{application.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {application.jobTitle ? `${application.jobTitle} - ${application.company ?? ""}` : application.jobId}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(application.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </AdminGuard>
  );
};

export default page;
