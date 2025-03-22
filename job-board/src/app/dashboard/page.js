"use client";
import { useForm } from "react-hook-form";
import useJobStore from "@/store/jobStore";

export default function Dashboard() {
  const { register, handleSubmit, reset } = useForm();
  const addJob = useJobStore((state) => state.addJob);

  const onSubmit = (data) => {
    addJob(data);
    reset();
    alert("Job posted successfully!");
  };

  return (
    <div className="p-4 min-h-screen dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
        <input
          {...register("title", { required: true })}
          placeholder="Job Title"
          className="w-full border p-2 dark:border-gray-600 dark:bg-gray-800"
        />
        <input
          {...register("company", { required: true })}
          placeholder="Company Name"
          className="w-full border p-2 dark:border-gray-600 dark:bg-gray-800"
        />
        <textarea
          {...register("description", { required: true })}
          placeholder="Job Description"
          className="w-full border p-2 dark:border-gray-600 dark:bg-gray-800"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}