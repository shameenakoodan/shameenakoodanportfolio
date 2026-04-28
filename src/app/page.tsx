import Link from "next/link";

const aiSkills = [
  "LLMs (Groq, Gemini, OpenAI)",
  "Machine Learning & Deep Learning",
  "RAG & Vector Databases",
  "Prompt Engineering",
  "Python (Pandas, NumPy, Scikit‑Learn)",
  "Next.js, React, Node.js",
  "SQL, MongoDB, Firebase",
];

const projects = [
  {
  title: "AI PDF Summarizer",
  description:
    "A high‑performance PDF summarization system using Groq’s Llama 3.1 with chunking, multi‑step synthesis, OCR support, and automatic language detection. Generates short, medium, or detailed bullet‑point summaries through a responsive Streamlit UI.",
  tech: ["Python", "Groq", "Llama 3.1", "Streamlit"],
  link: "https://pdf-summarizer-pz0b.onrender.com",
  github: "https://github.com/shameenakoodan/pdf-summarizer"
}
,
  // {
  //   title: "AI Resume Analyzer",
  //   description:
  //     "Analyzes resumes, extracts skills, and matches candidates to job descriptions using LLMs.",
  //   tech: ["Python", "LLMs", "NLP"],
  //   link: "#",
  //   github: "https://github.com/shameenakoodan",
  // },
  // {
  //   title: "AI Chatbot",
  //   description:
  //     "A conversational chatbot built using modern LLM APIs with memory and context handling.",
  //   tech: ["Next.js", "Node.js", "LLMs"],
  //   link: "#",
  //   github: "https://github.com/shameenakoodan",
  // },
  // {
  //   title: "Weather App",
  //   description:
  //     "A clean and responsive weather application using React and OpenWeather API.",
  //   tech: ["React", "JavaScript", "API"],
  //   link: "https://shameenakoodan.github.io/weather-app/",
  //   github: "https://github.com/shameenakoodan/weather-app",
  // },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 md:px-16 lg:px-32">
      {/* Hero */}
      <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-sky-400">
            AI Engineer • Software Developer
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Hi, I&apos;m <span className="text-sky-400">Shameena Koodan</span>.
          </h1>
          <p className="mt-4 text-slate-300">
            I’m a Full Stack Developer with a strong foundation in building scalable, user‑focused applications — and I’m currently expanding my expertise into AI and machine learning through hands‑on projects and self‑driven learning.

I love solving real problems with clean, efficient code, and I’m especially excited about how AI can transform the way we build software. My recent work blends traditional full‑stack development with modern AI capabilities, from LLM‑powered tools to intelligent automation.

I’m continuously learning, experimenting, and building — and I enjoy sharing that journey through my projects.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400"
             target="_blank">
              View AI Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-slate-600 px-5 py-2 text-sm font-medium text-slate-100 hover:border-sky-400"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mt-16 max-w-3xl">
        <h2 className="text-xl font-semibold text-slate-100">About</h2>
        <p className="mt-4 text-slate-300">
          I&apos;m a Texas‑based developer with a strong passion for AI,
          automation, and full‑stack development. I specialize in building
          intelligent tools that summarize, analyze, and extract insights from
          unstructured data. My work blends software engineering with modern AI
          capabilities to create real‑world impact.
        </p>
      </section>

      {/* AI Skills */}
      <section id="skills" className="mt-16">
        <h2 className="text-xl font-semibold text-slate-100">AI Skills</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {aiSkills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 text-sm text-slate-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-16">
        <h2 className="text-xl font-semibold text-slate-100">AI Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex gap-3 text-sm">
                <Link href={project.link} className="text-sky-400 hover:underline">
                  Live demo
                </Link>
                <Link
                  href={project.github}
                  className="text-slate-400 hover:underline"
                >
                  GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-16 mb-10 max-w-xl">
        <h2 className="text-xl font-semibold text-slate-100">Contact</h2>
        <p className="mt-3 text-slate-300">
          Interested in collaborating or discussing an AI project? Let&apos;s
          connect.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-300">
          <a
            href="mailto:shameenakoodan@gmail.com"
            className="text-sky-400 hover:underline"
          >
            shameenakoodan@gmail.com
          </a>
          <a
            href="https://github.com/shameenakoodan"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shameenakoodan"
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
