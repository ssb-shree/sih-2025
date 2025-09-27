import React from "react";

const Hero = () => {
  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-6xl mx-auto flex flex-row justify-center items-center gap-16 px-4">
        {/* Left Side: Text + Buttons */}
        <div className="flex flex-col justify-center items-center space-y-6">
          <h1 className="text-xl text-nowrap md:text-6xl font-extrabold">Welcome to TimetableGen</h1>
          <p className="text-sm md:text-xl max-w-lg mx-auto lg:mx-0">
            Easily create and customize your class schedules with our generator. Switch between coffee and dark themes
            to match your mood.
          </p>

          {/* Optional Feature Badges */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center lg:justify-start gap-4 mt-8">
            <span className="btn btn-outline rounded-full badge-lg">Easy Scheduling</span>
            <span className="btn btn-outline rounded-full badge-lg">Dark & Coffee Mode</span>
            <span className="btn btn-outline rounded-full badge-lg">100% Free</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
