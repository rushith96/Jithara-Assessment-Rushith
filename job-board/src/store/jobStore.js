"use client";
import { create } from "zustand";

const useJobStore = create((set) => ({
  jobs: [
    { id: 1, title: "Frontend Developer", company: "ABC Corp" },
    { id: 2, title: "Backend Developer", company: "XYZ Inc" },
  ],
  addJob: (newJob) =>
    set((state) => ({
      jobs: [...state.jobs, { ...newJob, id: Date.now() }],
    })),
}));

export default useJobStore;