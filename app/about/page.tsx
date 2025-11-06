
import Image from "next/image";

const page = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-10 py-16">
      {/* Header */}

      

      <div className="flex justify-center items-center">
        <Image
        src="/images/my.png"
        alt="My picture"
        width={600}
        height={400}
        className="w-80 h-80 object-cover items-center rounded-full"
      ></Image>
      </div>

      <div className="pt-6 pb-16 text-center">
        <b className="text-[#1A1A1A] dark:text-white md:font-bold text-5xl font-extrabold md:text-8xl 2xl:text-[150px]">
          Isaiah Onanubi
        </b>
      </div>

      {/* Bio */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Hi! I&apos;m Isaiah Onanubi, a Political Science graduate in
          Nigeria with a growing passion for technology and digital innovation.
          Over the past few years, I&apos;ve explored multiple career paths including
          fullstack development, AI research, technical writing, and digital
          marketing. I enjoy building versatile solutions that merge technology,
          business, and user experience. Outside of tech, I also create
          lifestyle content and document personal growth journeys, sharing
          insights and inspiration with my audience.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Skills
        </h2>
       <ul className="flex flex-wrap gap-3">
  {[
    "JavaScript",
    "React",
    "Next.js",
    "Full-stack Web Development",
    "Flutterflow",
    "Webflow",
    "Email Marketing",
    "Social Media Management",
    "Technical Writing",
    "Digital Marketing",
    "AI Automation",
    "Workflow Building",
    "WordPress",
    "UI/UX Design",
  ].map((skill) => {
    
    // Arrays of colors
    const colors = [
      { bg: "#E0F2FE", text: "#0369A1" }, // blue
      { bg: "#ECFDF5", text: "#047857" }, // green
      { bg: "#EDE9FE", text: "#7C3AED" }, // purple
    ];

    // Pick random color pair
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <li
        key={skill}
        className="px-3 py-1 rounded-full text-sm font-medium"
        style={{ backgroundColor: color.bg, color: color.text }}
      >
        {skill}
      </li>
    );
  })}
</ul>

      </div>

      

      {/* Experience */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Experience
        </h2>
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <div>
            <p className="font-semibold">Technical Writing Evaluator</p>
            <p>U.S.-based AI Research Company | Remote</p>
            <p>
              Evaluated technical writing tasks and research outputs, ensuring
              high-quality documentation and analytical accuracy.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2023 - Present
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Front-end Web Development & Freelancing
            </p>
            <p>Independent | Remote</p>
            <p>
              Built projects using React, Next.js, WordPress, and Webflow,
              integrating client feedback and delivering responsive,
              user-friendly websites.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2024 - Present
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Content Creation & Digital Marketing
            </p>
            <p>Independent | Remote</p>
            <p>
              Produce lifestyle and personal growth content for social media,
              leveraging email marketing, social media campaigns, and audience
              engagement strategies.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2025 - Present
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Education
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <div>
            <p className="font-semibold">Obafemi Awolowo University, Ile-Ife</p>
            <p>B.Sc. Political Science</p>
            <p>Focus: International Relations, Foreign Policy</p>
          </div>
          <div>
            <p className="font-semibold">Self-Learning & Online Courses</p>
            <p>Front-end Development, Digital Marketing, AI Automation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
