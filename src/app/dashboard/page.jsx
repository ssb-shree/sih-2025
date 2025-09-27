"use client";
import { Book, Building, Calendar, Download, PersonStanding, Upload, Users } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCalendarAlt, FaUserTie, FaUsers, FaDoorOpen, FaCogs } from "react-icons/fa";
import { GrAnalytics } from "react-icons/gr";
import { VscLoading } from "react-icons/vsc";

export default function AdminDashboard() {
  const [flag, setFlag] = useState(false);
  const [active, setActive] = useState("generate timetable");

  const manageData = [
    {
      title: (
        <span className="flex gap-2 text-lg font-bold justify-start items-center">
          <Book /> <span className="capitalize">course data</span>
        </span>
      ),
      description: "Upload course information, credits, and requirements",
    },
    {
      title: (
        <span className="flex gap-2 text-lg font-bold justify-start items-center">
          <PersonStanding /> <span className="capitalize">faculty data</span>
        </span>
      ),
      description: "Manage faculty details, expertise, and availability",
    },
    {
      title: (
        <span className="flex gap-2 text-lg font-bold justify-start items-center">
          <Users /> <span className="capitalize">students data</span>
        </span>
      ),
      description: "Import student enrollment and elective choices",
    },
    {
      title: (
        <span className="flex gap-2 text-lg font-bold justify-start items-center">
          <Building /> <span className="capitalize">room data</span>
        </span>
      ),
      description: "Configure rooms, labs, and capacity information",
    },
  ];

  const tabs = [
    {
      name: "generate timetable",
      element: (
        <div key="generate-data" className="card shadow border p-6 w-full">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <FaCogs className="text-gray-600" />
            AI Timetable Generation
          </h2>
          <p className="text-gray-500 mb-6">
            Generate conflict-free timetables automatically using AI scheduling algorithms
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Configuration Status */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-700">Configuration Status</h3>
              <ul className="space-y-2 text-sm">
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
          <div className="mt-6 flex justify-center md:justify-start">
            <button
              onClick={() => {
                setFlag(true);
                setTimeout(() => {
                  setFlag(false);
                  toast.success("TimeTable Generated");
                }, 2000);
              }}
              className="btn btn-primary w-full md:w-auto flex items-center justify-center gap-2"
            >
              {flag ? <VscLoading className="animate-spin" /> : <FaCogs />}
              {flag ? "Generating For You" : "Generate AI Timetable"}
            </button>
          </div>
        </div>
      ),
    },
    {
      name: "manage data",
      element: (
        <div key="manage-data" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 w-full">
          {manageData.map((item, index) => (
            <div key={index} className="card shadow-xl border rounded-xl p-4 flex flex-col justify-between">
              <div className="mb-4">
                <h2 className="card-title">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <button
                onClick={() =>
                  toast.success("In real implementation this would open a file upload dialog for CSV/Excel files")
                }
                className="btn btn-outline btn-sm w-full"
              >
                <span className="flex items-center gap-2">
                  <Upload />
                  Upload CSV/Excel
                </span>
              </button>
            </div>
          ))}
        </div>
      ),
    },
    {
      name: "view timetable",
      element: (
        <div key="view-timetable" className="card shadow border p-6 flex flex-col justify-center items-center gap-4">
          <Calendar size={30} />
          <h2 className="text-lg font-bold">No TimeTable Generated</h2>
          <p className="text-center text-gray-500">
            Please generate a timetable first using the AI scheduling engine in the "Generate Timetable" tab.
          </p>
        </div>
      ),
    },
    {
      name: "export & settings",
      element: (
        <div key="export-and-settings" className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="border p-6 rounded-md flex flex-col gap-4">
            <h2 className="flex gap-2 items-center text-lg font-bold">
              <Download />
              Export Timetables
            </h2>
            <p>Download generated timetables in various formats</p>
            <div className="flex flex-col gap-2">
              <button className="btn btn-outline w-full" disabled>
                <Download /> Export Timetables
              </button>
              <button className="btn btn-outline w-full" disabled>
                <Download /> Export Timetables
              </button>
            </div>
          </div>
          <div className="border p-6 rounded-md flex flex-col gap-4">
            <h2 className="flex gap-2 items-center text-lg font-bold">
              <GrAnalytics />
              Analytics & Report
            </h2>
            <p>View scheduling statistics and optimization metrics</p>
            <ul className="mt-2 space-y-1">
              {[
                { text: "Faculty Utilization:", number: "85%" },
                { text: "Room Utilization:", number: "78%" },
                { text: "Scheduling Conflicts:", number: "0%" },
                { text: "Programs Scheduled:", number: "4%" },
              ].map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-1">
                  <span>{item.text}</span>
                  <span>{item.number}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-500 text-sm md:text-base">AI-Assisted Timetable Generator - NEP 2020 Compliant</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
        <div className="card shadow border p-4 md:p-5 flex justify-between items-center">
          <div>
            <h2 className="text-gray-500 text-xs md:text-sm">Total Programs</h2>
            <p className="text-2xl md:text-3xl font-bold text-gray-800">4</p>
            <p className="text-xs text-gray-400">Active academic programs</p>
          </div>
          <FaCalendarAlt className="text-blue-600 text-xl md:text-2xl" />
        </div>
        <div className="card shadow border p-4 md:p-5 flex justify-between items-center">
          <div>
            <h2 className="text-gray-500 text-xs md:text-sm">Faculty Members</h2>
            <p className="text-2xl md:text-3xl font-bold text-gray-800">5</p>
            <p className="text-xs text-gray-400">Registered faculty</p>
          </div>
          <FaUserTie className="text-green-600 text-xl md:text-2xl" />
        </div>
        <div className="card shadow border p-4 md:p-5 flex justify-between items-center">
          <div>
            <h2 className="text-gray-500 text-xs md:text-sm">Students Enrolled</h2>
            <p className="text-2xl md:text-3xl font-bold text-gray-800">30</p>
            <p className="text-xs text-gray-400">Total student enrollment</p>
          </div>
          <FaUsers className="text-blue-500 text-xl md:text-2xl" />
        </div>
        <div className="card shadow border p-4 md:p-5 flex justify-between items-center">
          <div>
            <h2 className="text-gray-500 text-xs md:text-sm">Rooms Available</h2>
            <p className="text-2xl md:text-3xl font-bold text-gray-800">8</p>
            <p className="text-xs text-gray-400">Lecture halls & labs</p>
          </div>
          <FaDoorOpen className="text-yellow-500 text-xl md:text-2xl" />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="tabs tabs-boxed mb-6 md:mb-8 grid grid-cols-2 grid-rows-2 md:flex  justify-between items-center gap-2 w-full">
        {tabs.map((items, index) => (
          <li
            onClick={() => setActive(items.name)}
            className={`btn btn-wide btn-outline capitalize border rounded-lg ${
              items.name === active ? "tab-active bg-base-300" : ""
            }`}
            key={index}
          >
            {items.name}
          </li>
        ))}
      </div>

      {/* Active Tab */}
      <div className="w-full">{tabs.map((item) => (item.name === active ? item.element : null))}</div>
    </div>
  );
}
