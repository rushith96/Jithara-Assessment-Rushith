"use client";
import { useParams } from "next/navigation";
import useJobStore from "@/store/jobStore";

export default function JobDetail() {
  const { id } = useParams();
  const { jobs } = useJobStore();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">Job not found.</h1>
      </div>
    );
  }

  return (
    <div className="p-4 min-h-screen dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {job.company}
      </p>
      <p>{job.description}</p>
    </div>
  );
}