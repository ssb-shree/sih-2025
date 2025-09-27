"use client";

import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function TimeTable() {
  const timeSlots = ["9:00-10:00", "10:00-11:00", "11:15-12:15", "12:15-1:15", "2:15-3:15", "3:15-4:15", "4:15-5:15"];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const schedule = {
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
  };

  // Extract all sessions into a flat array for the "All Sessions" section
  const allSessions = days.flatMap((day) => {
    const daySchedule = schedule[day] || {};
    return Object.entries(daySchedule).map(([time, session]) => ({
      day,
      time,
      ...session,
    }));
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center gap-2">
          <FaCalendarAlt className="text-blue-600 text-xl" />
          <h2 className="text-xl font-semibold text-gray-800">Weekly Teaching Schedule</h2>
        </div>
        <p className="text-gray-600 mb-6">Your complete weekly timetable with all assigned classes</p>

        {/* Table */}
        <div className="overflow-x-auto border rounded-lg bg-white shadow mb-10">
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
                  {/* Time slot column */}
                  <td className="border p-3 text-gray-700 font-medium">{time}</td>

                  {/* Day columns */}
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
                          <div className="h-12"></div> // empty cell height
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* All Sessions List */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaCalendarAlt className="text-blue-600" />
            All Scheduled Sessions
          </h3>
          <ul className="space-y-3">
            {allSessions.length > 0 ? (
              allSessions.map((session, index) => (
                <li key={index} className="p-3 border rounded-lg shadow-sm hover:bg-gray-50 transition">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {session.subject} ({session.code})
                      </p>
                      <p className="text-xs text-gray-500">
                        {session.day} • {session.time}
                      </p>
                      <p className="text-xs text-gray-400">{session.room}</p>
                    </div>
                    <span
                      className={`h-fit px-2 py-0.5 text-[10px] rounded-full ${
                        session.type === "theory" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                      }`}
                    >
                      {session.type}
                    </span>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-sm text-gray-500">No sessions scheduled for this week.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
