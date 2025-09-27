"use client";
import { CheckCircle, Settings, User, UserCheck } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

const Roles = () => {
  const roles = [
    {
      title: "Administrator",
      url: "dashboard",
      description: "Manage courses, faculty, students, and generate timetables",
      icon: <Settings className="h-8 w-8 text-white" />,
      color: "bg-blue-600",
      features: ["Upload CSV/Excel data", "AI timetable generation", "Conflict resolution", "Export capabilities"],
    },
    {
      title: "Faculty Member",
      url: "faculty",
      description: "View your personal teaching schedule and availability",
      icon: <UserCheck className="h-8 w-8 text-white" />,
      color: "bg-green-600",
      features: ["Personal timetable view", "Availability management", "Course assignments", "Schedule conflicts"],
    },
    {
      title: "Student",
      url: "student",
      description: "Access your program and semester timetables",
      icon: <User className="h-8 w-8 text-white" />,
      color: "bg-sky-600",
      features: ["Program timetable", "Semester schedule", "Elective tracking", "Class locations"],
    },
  ];

  const router = useRouter();

  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Choose Your Role</h2>
        <p className="text-lg text-gray-500 mt-2">Select your role to access the appropriate dashboard and features</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {roles.map((role, idx) => (
          <div
            key={idx}
            className="border rounded-lg shadow-sm hover:shadow-lg transition p-6 flex flex-col justify-between"
          >
            <div className="text-center">
              <div className={`mx-auto p-4 rounded-full ${role.color} mb-4 w-fit`}>{role.icon}</div>
              <h3 className="text-xl font-semibold">{role.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{role.description}</p>
            </div>
            <ul className="mt-6 space-y-2">
              {role.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => router.push(`/${role.url}`)}
              className="mt-6 w-full py-2 border rounded-md btn btn-outline"
            >
              Access Dashboard
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roles;
