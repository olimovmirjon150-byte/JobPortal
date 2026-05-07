"use client"

import Header from "@/app/_components/Header";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Job } from "@/types";

const page = () => {
  const params = useParams();
  const jobId = params?.id ?? "";
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const { data } = await axios.get<Job[]>("http://localhost:4000/job");
      setJobs(data);
    } catch (error) {
      console.log(error);
      setError("Failed to load job details.");
    } finally {
      setLoading(false);
    }
  };

  const selectedJob = jobs.find((job) => job.id === jobId);

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
          {loading ? (
            <div className="text-center py-20 text-gray-500">Loading job details...</div>
          ) : error ? (
            <div className="text-center py-20 text-red-600">{error}</div>
          ) : !selectedJob ? (
            <div className="text-center py-20 text-gray-500">Job not found.</div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h2>
                  <p className="text-gray-500 mt-1">
                    {selectedJob.company} • {selectedJob.location}
                  </p>
                </div>

                <span className="px-3 py-1 text-sm border rounded-md w-fit">{selectedJob.jobType}</span>
              </div>

              <div className="border-t my-6"></div>

              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Salary:</span> {selectedJob.salary || "Not specified"}
              </p>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Job Description</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{selectedJob.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Requirements</h3>
                <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                  {Array.isArray(selectedJob.requirements) ? (
                    selectedJob.requirements.map((item, index) => <li key={index}>{item}</li>)
                  ) : (
                    <li>{selectedJob.requirements}</li>
                  )}
                </ul>
              </div>

              <div className="flex gap-4">
                <Dialog>
                  <DialogTrigger className="bg-blue-600 px-3 py-2 text-white rounded-md! w-100 text-lg!">Apply now</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-sm!">Apply for Position</DialogTitle>
                      <div>
                        <div>
                          <p className="mb-0">Full Name</p>
                          <input className="w-100 form-control" type="text" placeholder="John Doe..." />
                        </div>
                        <div>
                          <p className="mt-2 mb-0">Email</p>
                          <input className="w-100 form-control" type="email" placeholder="john@exemple.com" />
                        </div>
                        <button className="w-100 bg-blue-600 text-white px-3 py-2 mt-3 rounded-md! transition-all hover:bg-blue-700!">Submit Application</button>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default page;