"use client";
import Link from "next/link";
import useJobStore from "@/store/jobStore";
import { useState } from "react";

export default function Home() {
  const { jobs } = useJobStore();
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <nav className="p-4 border-b dark:border-gray-700 dark:bg-gray-800 flex justify-between">
        <h1 className="font-bold text-2xl dark:text-white">Job Board</h1>
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-600 dark:text-white"
        >
          Dark Mode
        </button>
      </nav>

      <main className="min-h-screen p-4 dark:bg-gray-900 dark:text-white">
        <h2 className="text-xl mb-6">Job Listings</h2>
        {jobs.map((job) => (
          <div key={job.id} className="border p-4 mb-4 dark:border-gray-600">
            <h3 className="text-lg">{job.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {job.company}
            </p>
            <Link
              href={`/job/${job.id}`}
              className="mt-2 text-blue-600 dark:text-blue-300 underline block"
            >
              View Details
            </Link>
          </div>
        ))}

        <Link
          href="/dashboard"
          className="bg-blue-500 text-white px-4 py-2 inline-block mt-6"
        >
          Company Dashboard
        </Link>
      </main>
    </div>
  );
}