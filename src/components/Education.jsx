import React from "react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Bath",
    period: "2024 – 2025",
    image: "/src/assets/bath.png"
  }
];

function Education() {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl font-bold">Education</h2>

      <div className="flex justify-center px-4">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="bg-white text-black rounded shadow-lg p-6 flex flex-col items-center max-w-sm"
          >
            <img
              src={edu.image}
              alt={edu.institution}
              className="h-24 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{edu.degree}</h3>
            <p className="text-sm text-gray-600 text-center">
              {edu.institution}
            </p>
            <p className="text-sm text-gray-400 italic text-center">
              {edu.period}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
