"use client";
import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

/* ==========================
   ICONS (single-file)
========================== */
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

/* ==========================
   FACULTY DATA (static)
========================== */
const FACULTY_DATA = {
  "Dr. Priya Sharma": {
    profile: {
      name: "Dr. Priya Sharma",
      role: "Faculty Member",
      totalClasses: 8,
      theoryHours: 5,
      practicalHours: 3,
      maxHours: 20,
      assignedHours: 8,
      expertise: ["Educational Philosophy", "Curriculum Development"],
    },
    schedule: {
      Mon: {
        "9:00-10:00": {
          code: "EDU201",
          subject: "Curriculum Development",
          room: "LH-101",
          type: "theory",
        },
        "10:00-11:00": {
          code: "EDU201",
          subject: "Curriculum Development",
          room: "LH-101",
          type: "theory",
        },
      },
      Wed: {
        "10:00-11:00": {
          code: "EDU101",
          subject: "Foundations of Education",
          room: "LH-101",
          type: "theory",
        },
        "4:15-5:15": {
          code: "EDU101",
          subject: "Foundations of Education",
          room: "LH-101",
          type: "practical",
        },
      },
      Thu: {
        "2:15-3:15": {
          code: "EDU201",
          subject: "Curriculum Development",
          room: "LH-101",
          type: "practical",
        },
        "3:15-4:15": {
          code: "EDU101",
          subject: "Foundations of Education",
          room: "LH-101",
          type: "theory",
        },
      },
      Sat: {
        "9:00-10:00": {
          code: "EDU101",
          subject: "Foundations of Education",
          room: "LH-101",
          type: "theory",
        },
        "10:00-11:00": {
          code: "EDU201",
          subject: "Curriculum Development",
          room: "LH-101",
          type: "practical",
        },
      },
    },
  },
  "Dr. Jane Doe": {
    profile: {
      name: "Dr. Jane Doe",
      role: "Assistant Professor",
      totalClasses: 10,
      theoryHours: 6,
      practicalHours: 4,
      maxHours: 22,
      assignedHours: 10,
      expertise: ["Psychology", "Child Development"],
    },
    schedule: {
      Tue: {
        "9:00-10:00": {
          code: "PSY101",
          subject: "Introduction to Psychology",
          room: "LH-102",
          type: "theory",
        },
        "10:00-11:00": {
          code: "PSY102",
          subject: "Developmental Psychology",
          room: "LH-102",
          type: "theory",
        },
      },
      Wed: {
        "2:15-3:15": {
          code: "PSY201",
          subject: "Cognitive Psychology Lab",
          room: "LAB-201",
          type: "practical",
        },
      },
      Fri: {
        "11:15-12:15": {
          code: "PSY103",
          subject: "Educational Psychology",
          room: "LH-103",
          type: "theory",
        },
      },
    },
  },
};

/* ==========================
   REUSABLE CARD
========================== */
const MetricCard = ({ title, value, subtitle, icon: IconComponent, color, isWorkload }) => (
  <div className="card w-full bg-white shadow-lg p-6 rounded-xl transition hover:shadow-xl border border-gray-100">
    <div className="flex justify-between items-start">
      <h3 className="text-sm font-medium text-gray-500 mb-4">{title}</h3>
      {isWorkload ? (
        <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
      ) : (
        <IconComponent className="w-5 h-5 text-gray-400" />
      )}
    </div>
    <div className={`text-4xl font-bold ${color}`}>{value}</div>
    <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
  </div>
);

/* ==========================
   MAIN DASHBOARD (connected)
========================== */
export default function FacultyDashboard() {
  const [selectedFaculty, setSelectedFaculty] = useState("Dr. Priya Sharma");

  const data = FACULTY_DATA[selectedFaculty].profile;
  const schedule = FACULTY_DATA[selectedFaculty].schedule || {};

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const timeSlots = ["9:00-10:00", "10:00-11:00", "11:15-12:15", "12:15-1:15", "2:15-3:15", "3:15-4:15", "4:15-5:15"];

  const workloadPercentage = Math.round((data.assignedHours / data.maxHours) * 100);
  const workloadColor = workloadPercentage <= 50 ? "text-green-600" : "text-orange-500";

  // Build ordered sessions grouped by day (keeps timetable ordering)
  const sessionsByDay = days.map((day) => {
    const daySchedule = schedule[day] || {};
    const sessions = timeSlots.filter((t) => daySchedule[t]).map((t) => ({ time: t, ...daySchedule[t] }));
    return { day, sessions };
  });

  // Flat count of all sessions
  const totalSessions = sessionsByDay.reduce((sum, d) => sum + d.sessions.length, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      {/* Top navigation */}
      <Link
        href="/"
        className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition mb-6"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-1" />
        Back to Home
      </Link>

      {/* Header + selector */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex items-center mb-4 md:mb-0">
          <UserIcon className="w-8 h-8 text-blue-600 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Faculty Dashboard</h1>
            <p className="text-sm text-gray-500 mt-0.5">View your personal teaching schedule and workload</p>
          </div>
        </div>

        <div className="flex space-x-3 w-full md:w-auto">
          <select
            className="select select-bordered select-sm w-full px-10 md:w-auto text-sm select-primary-custom rounded-lg shadow-sm"
            value={selectedFaculty}
            onChange={(e) => setSelectedFaculty(e.target.value)}
          >
            {Object.keys(FACULTY_DATA).map((faculty) => (
              <option key={faculty} value={faculty}>
                {faculty}
              </option>
            ))}
          </select>

          <button
            onClick={() => toast.success("Exporting in PDF format")}
            className="btn btn-primary px-5 btn-sm rounded-lg shadow-md text-sm font-semibold normal-case"
          >
            Export Schedule
          </button>
        </div>
      </div>

      {/* Metrics */}
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
          isWorkload
        />
      </div>

      {/* Profile card */}
      <div className="card bg-white shadow-xl p-6 md:p-10 rounded-xl border border-gray-100 mb-10">
        <div className="flex items-center mb-6">
          <UserIcon className="w-6 h-6 text-gray-600 mr-3" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{data.name}</h2>
            <p className="text-sm text-gray-500">{data.role}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
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

      {/* Timetable */}
      <div className="overflow-x-auto border rounded-lg bg-white shadow mb-8">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="border p-3 text-left font-medium text-gray-600">Time</th>
              {days.map((day) => (
                <th key={day} className="border p-3 text-center font-medium text-gray-600">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time) => (
              <tr key={time}>
                <td className="border p-3 text-gray-700 font-medium">{time}</td>
                {days.map((day) => {
                  const entry = schedule[day]?.[time];
                  return (
                    <td key={day} className="border p-2 text-center align-top">
                      {entry ? (
                        <div className="p-2 border rounded-lg bg-gray-50 shadow-sm text-left space-y-1">
                          <p className="text-xs font-semibold">{entry.code}</p>
                          <p className="text-xs text-gray-600 truncate">{entry.subject}</p>
                          <p className="text-xs text-gray-500">{entry.room}</p>
                          <span
                            className={`inline-block px-2 py-0.5 text-[10px] rounded-full ${
                              entry.type === "theory" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                            }`}
                          >
                            {entry.type}
                          </span>
                        </div>
                      ) : (
                        <div className="h-12"></div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== All Scheduled Sessions (new) ===== */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-100 mb-12">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-blue-600" />
            All Scheduled Sessions
          </h3>
          <p className="text-sm text-gray-500">
            {totalSessions} session{totalSessions !== 1 ? "s" : ""}
          </p>
        </div>

        {totalSessions === 0 ? (
          <p className="text-sm text-gray-500">No sessions scheduled for this faculty.</p>
        ) : (
          <div className="grid gap-4">
            {sessionsByDay.map(({ day, sessions }) =>
              sessions.length === 0 ? null : (
                <div key={day} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-700">{day}</h4>
                    <span className="text-xs text-gray-500">
                      {sessions.length} session{sessions.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {sessions.map((s, idx) => (
                      <li key={idx} className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {s.subject} <span className="text-xs text-gray-500">({s.code})</span>
                          </p>
                          <p className="text-xs text-gray-500">
                            {s.time} • {s.room}
                          </p>
                        </div>
                        <span
                          className={`h-fit px-2 py-0.5 text-[10px] rounded-full ${
                            s.type === "theory" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                          }`}
                        >
                          {s.type}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
