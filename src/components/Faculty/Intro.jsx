"use client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

// --- Icon Components (Replacing lucide-react for single-file mandate) ---

const Icon = ({ children, className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const UserIcon = (props) => (
  <Icon {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </Icon>
);

const CalendarIcon = (props) => (
  <Icon {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </Icon>
);

const BookOpenIcon = (props) => (
  <Icon {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </Icon>
);

const ClockIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </Icon>
);

const CheckCircleIcon = (props) => (
  <Icon {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </Icon>
);

const ArrowLeftIcon = (props) => (
  <Icon {...props}>
    <line x1="19" x2="5" y1="12" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </Icon>
);

// --- Static Data ---

const STATIC_DATA = {
  name: "Dr. Priya Sharma",
  role: "Faculty Member",
  totalClasses: 8,
  theoryHours: 5,
  practicalHours: 3,
  maxHours: 20,
  assignedHours: 8,
  expertise: ["Educational Philosophy", "Curriculum Development"],
};

// --- Reusable Components ---

const MetricCard = ({ title, value, subtitle, icon: IconComponent, color, isWorkload }) => (
  <div className="card w-full bg-white shadow-lg p-6 rounded-xl transition hover:shadow-xl border border-gray-100">
    <div className="flex justify-between items-start">
      {/* Title */}
      <h3 className="text-sm font-medium text-gray-500 mb-4">{title}</h3>

      {/* Icon (Right aligned) */}
      {isWorkload ? (
        <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
      ) : (
        <IconComponent className="w-5 h-5 text-gray-400" />
      )}
    </div>

    {/* Value */}
    <div className={`text-4xl font-bold ${color}`}>{value}</div>

    {/* Subtitle */}
    <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
  </div>
);

// --- Main Dashboard Component ---

const Intro = () => {
  const data = STATIC_DATA;

  // Static calculation based on static data
  const workloadPercentage = Math.round((data.assignedHours / data.maxHours) * 100);

  // Determine workload color based on utilization
  const workloadColor = workloadPercentage <= 50 ? "text-green-600" : "text-orange-500";

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      {/* 1. Top Navigation */}
      <Link
        href="/"
        className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition mb-6"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-1" />
        Back to Home
      </Link>

      {/* 2. Dashboard Header and Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        {/* Title Group */}
        <div className="flex items-center mb-4 md:mb-0">
          <UserIcon className="w-8 h-8 text-blue-600 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Faculty Dashboard</h1>
            <p className="text-sm text-gray-500 mt-0.5">View your personal teaching schedule and workload</p>
          </div>
        </div>

        {/* Actions Group (Dropdown and Button) */}
        <div className="flex space-x-3 w-full md:w-auto">
          {/* DaisyUI Dropdown - acting as a select for faculty name */}
          <select className="select select-bordered select-sm w-full px-10 md:w-auto text-sm select-primary-custom rounded-lg shadow-sm">
            <option disabled>Select Faculty</option>
            <option selected>{data.name}</option>
            <option>Dr. Jane Doe</option>
          </select>

          {/* DaisyUI Button */}
          <button
            onClick={() => toast.success("Exporting in PDF format")}
            className="btn btn-primary px-5 btn-sm rounded-lg shadow-md text-sm font-semibold normal-case"
          >
            Export Schedule
          </button>
        </div>
      </div>

      {/* 3. Key Metric Cards (4-column grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Classes"
          value={data.totalClasses}
          subtitle="Per week"
          icon={CalendarIcon}
          color="text-gray-900"
        />
        <MetricCard
          title="Theory Hours"
          value={data.theoryHours}
          subtitle="Lecture classes"
          icon={BookOpenIcon}
          color="text-gray-900"
        />
        <MetricCard
          title="Practical Hours"
          value={data.practicalHours}
          subtitle="Lab sessions"
          icon={ClockIcon}
          color="text-gray-900"
        />
        <MetricCard
          title="Workload"
          value={`${workloadPercentage}%`}
          subtitle={`${data.assignedHours}/${data.maxHours} hours`}
          icon={CheckCircleIcon}
          color={workloadColor}
          isWorkload={true} // Special flag to use green checkmark icon
        />
      </div>

      {/* 4. Profile and Workload Information Card (2-column layout) */}
      <div className="card bg-white shadow-xl p-6 md:p-10 rounded-xl border border-gray-100">
        <div className="flex items-center mb-6">
          <UserIcon className="w-6 h-6 text-gray-600 mr-3" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{data.name}</h2>
            <p className="text-sm text-gray-500">{data.role}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column: Areas of Expertise */}
          <div>
            <h3 className="text-md font-semibold text-gray-700 mb-3">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {data.expertise.map((expertise) => (
                <span
                  key={expertise}
                  className="badge badge-lg bg-gray-100 text-blue-700 font-medium px-4 py-3 rounded-full text-xs shadow-sm"
                >
                  {expertise}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Workload Information */}
          <div className="pt-2">
            <h3 className="text-md font-semibold text-gray-700 mb-3">Workload Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-gray-700">
                <span className="text-sm">Maximum Hours/Week:</span>
                <span className="text-sm font-semibold">{data.maxHours}</span>
              </div>
              <div className="flex justify-between items-center text-gray-700">
                <span className="text-sm">Assigned Hours/Week:</span>
                <span className="text-sm font-semibold">{data.assignedHours}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Utilization:</span>
                <span className={`text-sm font-bold ${workloadColor}`}>{workloadPercentage}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
