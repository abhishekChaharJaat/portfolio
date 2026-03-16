import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-12"
    >
      <div className="w-full sm:px-6 lg:px-8">
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-bold text-center mb-10 border-b-2 border-[#13866F] inline-block text-[#394045]"
        >
          About Me
        </h2>
        <p
          data-aos="fade-up"
          className="text-left text-lg leading-relaxed font-sans text-[#394045]"
        >
          I am a{" "}
          <span className="font-semibold text-[#13866F]">Software Engineer</span>{" "}
          specializing in{" "}
          <span className="font-semibold text-[#13866F]">Frontend</span> who
          builds scalable, high-performance web interfaces using{" "}
          <span className="font-semibold text-[#13866F]">React.js</span>,{" "}
          <span className="font-semibold text-[#13866F]">Redux</span>, and{" "}
          <span className="font-semibold text-[#13866F]">Tailwind CSS</span>. I
          focus on writing clean, reusable code with strong attention to
          responsiveness, accessibility, and performance. I collaborate closely
          with cross-functional teams across multiple time zones to deliver new
          features and refine UI components, integrating{" "}
          <span className="font-semibold text-[#13866F]">RESTful APIs</span> and
          authentication with{" "}
          <span className="font-semibold text-[#13866F]">Clerk</span> to create
          interactive, data-driven user experiences and manage complex state
          effectively. Working alongside lead frontend engineers in fast-paced,
          product-focused environments, I actively contribute to UI/UX
          discussions and implement frontend best practices to ship
          production-level features seamlessly.
        </p>
        <p
          data-aos="fade-up"
          className="text-left text-lg md:text-[18px] leading-relaxed font-sans text-[#394045] mt-4"
        >
          I have backend experience working with{" "}
          <span className="font-semibold text-[#13866F]">Node.js</span>,{" "}
          <span className="font-semibold text-[#13866F]">Express.js</span>, and{" "}
          <span className="font-semibold text-[#13866F]">MongoDB</span>, having
          built several projects that demonstrate full-stack capabilities and
          efficient API development.
        </p>
      </div>
    </section>
  );
};

export default About;
