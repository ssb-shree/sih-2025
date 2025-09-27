import Hero from "@/components/Root/Hero";
import KeyFeatures from "@/components/Root/KeyFeatures";
import Roles from "@/components/Root/Roles";
import SystemOverview from "@/components/Root/SystemOverview";

const Rootpage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <main className="p-8 text-center">
        {/* Hero Section */}
        <Hero />
        <div className="p-8 space-y-16">
          {/* Key Features */}
          <KeyFeatures />
          {/* Choose Your Role */}
          <Roles />
          {/* System Overview */}
          <SystemOverview />
        </div>
      </main>
    </div>
  );
};

export default Rootpage;
