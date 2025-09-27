import { BarChart } from "lucide-react";

const SystemOverview = () => {
  const systemStats = [
    { number: "4", label: "Programs Supported", sub: "B.Ed, M.Ed, FYUP, ITEP" },
    { number: "30+", label: "Students Managed", sub: "Multi-semester tracking" },
    { number: "5", label: "Faculty Members", sub: "Availability optimization" },
    { number: "8", label: "Rooms & Labs", sub: "Capacity management" },
  ];
  return (
    <section className="bg-base-200 rounded-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold flex items-center justify-center gap-2">
          <BarChart className="h-5 w-5 text-primary" />
          System Overview
        </h2>
        <p className="text-gray-500">Comprehensive timetable management for educational institutions</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
        {systemStats.map((stat, idx) => (
          <div key={idx}>
            <p className="text-3xl font-bold text-primary">{stat.number}</p>
            <p className="font-medium">{stat.label}</p>
            <p className="text-gray-500 text-sm">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SystemOverview;
