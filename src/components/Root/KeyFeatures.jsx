"use client";
import { Database, Users, BarChart, Building } from "lucide-react";

const KeyFeatures = () => {
  const keyFeatures = [
    {
      title: "NEP 2020 Compliant",
      description: "Fully aligned with National Education Policy 2020 guidelines",
      icon: <Database className="h-8 w-8 text-primary" />,
    },
    {
      title: "AI-Powered Scheduling",
      description: "Advanced algorithms ensure conflict-free timetable generation",
      icon: <BarChart className="h-8 w-8 text-primary" />,
    },
    {
      title: "Multi-Program Support",
      description: "Supports B.Ed, M.Ed, FYUP, ITEP, and other academic programs",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "Constraint Management",
      description: "Handles faculty availability, room capacity, and student requirements",
      icon: <Building className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section className="text-center py-16">
      <h2 className="text-4xl font-bold mb-4">Key Features</h2>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        Advanced scheduling capabilities designed for modern educational institutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {keyFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="card bg-base-100 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="card-body text-center p-6">
              <div className="text-4xl text-primary mb-4">{feature.icon}</div>
              <h3 className="card-title text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
