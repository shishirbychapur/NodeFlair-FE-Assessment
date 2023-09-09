import Job from "./Job";
import React from "react";

export default function Listings() {
  const jobs = [
    {
      id: 1,
      name: "Technical Product Manager (Cloud)",
      date: "6 hours ago",
      location: "Singapore",
      logo: "https://pbs.twimg.com/profile_images/1613006491031867392/CvwnLgD2_400x400.jpg",
      company: "GovTech",
      rating: 4,
      techStack: ["play", "IAM"],
      tag: "PM",
    },
    {
      id: 2,
      name: "Software Engineer, Backend, Scalable Content Moderation",
      date: "1 day ago",
      location: "Singapore",
      logo: "https://static.vecteezy.com/system/resources/previews/010/353/285/non_2x/colourful-google-logo-on-white-background-free-vector.jpg",
      company: "Google",
      rating: 4.5,
      techStack: ["TensorFlow", "Keras", "Java", "Kotlin", "NodeJS", "Express", "MySQL"],
      tag: "Backend",
      pay: "S$8,049 - S$15,346 / mth",
    },
    {
      id: 3,
      name: "Full Stack Developer",
      date: "2 days ago",
      location: "Singapore",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriizqLMV99v9lzkXRdG46Tf1WmMKc6SF2kS7j5VxIfD7R_AkRmARqX1nKE8gGBshiRn8&usqp=CAU",
      company: "Grab",
      rating: 4,
      techStack: ["React", "NodeJS", "Express", "MySQL"],
      tag: "Fullstack",
      pay: "S$4,000 - S$8,000 / mth",
    }
  ];
  return (
    <div className="w-10/12 md:w-4/5 lg:w-2/5 text-center h-screen">
      {jobs.map(job => <Job key={job.id} data={job} /> )}
    </div>
  )
}