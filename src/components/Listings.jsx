import Job from "./Job";
import React from "react";

export default function Listings() {
  const jobs = [
    {
      id: 1,
      name: "Technical Product Manager (Cloud)",
      date: "less than a minute ago",
      location: "Singapore",
      logo: "",
      company: "GovTech",
      rating: 4,
      techStack: ["play", "IAM"],
      tag: "PM",
      pay: "",
    }, {
      id: 2,
      name: "Software Engineer, Backend, Scalable Content Moderation",
      location: "Singapore",
      logo: "",
      company: "Google",
      rating: 4.5,
      techStack: ["TensorFlow", "Keras", "Java"],
      tag: "Backend",
      pay: "S$8,049 - S$15,346 / mth",
    }
  ]
  return (
    <div className="w-1/4 text-center bg-gray-200">
      {jobs.map(job => <Job key={job.id} data={job} /> )}
    </div>
  )
}