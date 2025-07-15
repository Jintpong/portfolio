import React from "react";

// Experience data with tech stack
const experiences = [
  {
    company: "University of Bath",
    title: "AI Research Assistant",
    period: "Apr 2025 – Aug 2025",
    details:
      "Conducted a research study on Reinforcement Learning (Proximal Policy Optimization) for Thai agriculture, aiming to minimize water usage and maximize crop yield.",
    tech: ["Python", "PyTorch", "RLlib", "PPO", "Weights & Biases"]
  },
  {
    company: "ThaiBev",
    title: "Business Analyst",
    period: "Jun 2024 – Jul 2024",
    details:
      "Collaborated remotely on beverage-market analysis and brand innovation; researched consumer trends, sustainability practices, and regional dynamics to guide product strategy.",
    tech: ["Excel", "Power BI", "Tableau", "Market Research"]
  },
  {
    company: "University of Bath",
    title: "Research Assistant",
    period: "Sep 2023 – Apr 2024",
    details:
      "Ran biomechanics research using markerless motion-capture to detect knee-loading differences caused by foot orthotics; worked with Qualisys, MATLAB, and QTM.",
    tech: ["MATLAB", "QTM", "Qualisys", "Data Analysis"]
  },
  {
    company: "Renaissance Bangkok Ratchaprasong",
    title: "Data Analyst",
    period: "Jun 2023 – Jul 2023",
    details:
      "Analysed market trends, designed monthly promotions, and built SQL databases to track customer behaviour for marketing decisions.",
    tech: ["SQL", "Excel", "PowerPoint", "Marketing Analytics"]
  },
  {
    company: "Pavilion Samui Villa & Resort",
    title: "IT Assistant",
    period: "Jun 2022 – Sep 2022",
    details:
      "Resolved technical issues on the resort website and front-office software.",
    tech: ["HTML", "CSS", "JavaScript", "Troubleshooting"]
  }
];

// Component for tech stack pills
const TechStack = ({ tech }) => (
  <div className="flex flex-wrap justify-center gap-2 mt-3">
    {tech.map((item, i) => (
      <span
        key={i}
        className="bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-md"
      >
        {item}
      </span>
    ))}
  </div>
);

function Experience() {
  return (
    <section className="pb-24">
      <h2 className="my-20 text-center text-4xl font-bold">Experience</h2>

      <div className="mx-auto max-w-4xl px-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-6 border-l border-blue-500 mb-12">
            {/* timeline dot */}
            <span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-blue-500" />

            <div className="text-center">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-400 italic">
                {exp.company} · {exp.period}
              </p>
              <p className="mt-3">{exp.details}</p>
              <TechStack tech={exp.tech} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
