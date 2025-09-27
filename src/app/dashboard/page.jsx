"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCalendarAlt, FaUserTie, FaUsers, FaDoorOpen, FaCogs } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";

export default function AdminDashboard() {
  const [flag, setFlag] = useState(false);
  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-500">AI-Assisted Timetable Generator - NEP 2020 Compliant</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="card shadow border p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">Total Programs</h2>
              <p className="text-3xl font-bold text-gray-800">4</p>
              <p className="text-xs text-gray-400">Active academic programs</p>
            </div>
            <FaCalendarAlt className="text-blue-600 text-2xl" />
          </div>
        </div>

        <div className="card shadow border p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">Faculty Members</h2>
              <p className="text-3xl font-bold text-gray-800">5</p>
              <p className="text-xs text-gray-400">Registered faculty</p>
            </div>
            <FaUserTie className="text-green-600 text-2xl" />
          </div>
        </div>

        <div className="card shadow border p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">Students Enrolled</h2>
              <p className="text-3xl font-bold text-gray-800">30</p>
              <p className="text-xs text-gray-400">Total student enrollment</p>
            </div>
            <FaUsers className="text-blue-500 text-2xl" />
          </div>
        </div>

        <div className="card shadow border p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">Rooms Available</h2>
              <p className="text-3xl font-bold text-gray-800">8</p>
              <p className="text-xs text-gray-400">Lecture halls & labs</p>
            </div>
            <FaDoorOpen className="text-yellow-500 text-2xl" />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="tabs tabs-boxed mb-8">
        <a className="tab tab-active">Generate Timetable</a>
        <a className="tab">Manage Data</a>
        <a className="tab">View Timetables</a>
        <a className="tab">Export & Settings</a>
      </div>

      {/* AI Timetable Generation */}
      <div className="card shadow border p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <FaCogs className="text-gray-600" />
          AI Timetable Generation
        </h2>
        <p className="text-gray-500 mb-6">
          Generate conflict-free timetables automatically using AI scheduling algorithms
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Configuration Status */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-700">Configuration Status</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Course Data</span>
                <span className="badge badge-success">10 courses loaded</span>
              </li>
              <li className="flex justify-between">
                <span>Faculty Availability</span>
                <span className="badge badge-success">5 faculty configured</span>
              </li>
              <li className="flex justify-between">
                <span>Room Allocation</span>
                <span className="badge badge-success">8 rooms available</span>
              </li>
              <li className="flex justify-between">
                <span>Student Enrollment</span>
                <span className="badge badge-success">30 students enrolled</span>
              </li>
            </ul>
          </div>

          {/* Generation Process */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-700">Generation Process</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
              <li>Analyze course requirements and constraints</li>
              <li>Check faculty availability and workload</li>
              <li>Optimize room allocation and capacity</li>
              <li>Resolve scheduling conflicts automatically</li>
              <li>Generate NEP 2020 compliant timetables</li>
            </ul>
          </div>
        </div>

        {/* Generate Button */}
        <div className="mt-8">
          <button
            onClick={() => {
              setFlag(true);

              setTimeout(() => {
                setFlag(false);
                toast.success("TimeTable Generated");
              }, 2000);
            }}
            className="btn btn-primary w-full md:w-auto"
          >
            {flag ? <VscLoading className="animate-spin" /> : <FaCogs className="mr-2" />}
            {flag ? "Generating For you" : " Generate AI Timetable"}
          </button>
        </div>
      </div>
    </div>
  );
}
