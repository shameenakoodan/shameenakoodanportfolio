"use client";

import Link from "next/link";
import { useState } from "react";

const aiSkills = [
  "LLMs (Groq, Gemini, OpenAI)",
  "Prompt Engineering",
  "RAG & Vector Databases",
  "Machine Learning Fundamentals",
  "Python (Pandas, NumPy, Scikit‑Learn)",
  "OCR & Document AI",
  "Next.js, React, Node.js",
  "Java, Spring Boot",
  "SQL, MongoDB, Firebase",
  "AWS (S3, EC2), CI/CD",
];

// ----------------------
// PROJECT CATEGORIES DATA
// ----------------------

const categorizedProjects: Record<string, any[]> = {
  "Document & Text Intelligence": [
    {
      title: "AI PDF Summarizer",
      description:
        "Summarizes long PDFs using Groq’s Llama 3.1 with chunking, OCR, and multi‑language support. Generates short, medium, or detailed summaries.",
      tech: ["Python", "Groq", "Llama 3.1", "Streamlit"],
      link: "https://pdf-summarizer-pz0b.onrender.com",
      github: "https://github.com/shameenakoodan/pdf-summarizer",
      status: "Live",
    },
    {
      title: "AI Resume Analyzer",
      description:
        "Extracts skills, experience, and job match score from resumes using LLMs.",
      tech: ["Python", "LLMs", "NLP"],
      link: "https://ai-resume-analyzer-gamma-three.vercel.app/",
      status: "Live",
    },
    {
      title: "AI Contract Summarizer",
      description:
        "Summarizes legal documents and extracts clauses, risks, and obligations.",
      tech: ["Python", "LLMs", "OCR"],
      status: "Coming Soon",
    },
    {
      title: "AI Research Paper Explainer",
      description:
        "Explains academic papers in simple language with multi‑level summaries.",
      tech: ["Python", "LLMs"],
      status: "Coming Soon",
    },
  ],

  "Chatbots & Assistants": [
    {
      title: "AI Personal Assistant",
      description:
        "A chatbot with memory, task management, and personalized responses.",
      tech: ["Next.js", "Node.js", "LLMs"],
      status: "Coming Soon",
    },
    {
      title: "AI Customer Support Bot",
      description:
        "Answers FAQs using a knowledge base and LLM reasoning.",
      tech: ["Python", "RAG", "LLMs"],
      status: "Coming Soon",
    },
  ],

  "RAG (Retrieval‑Augmented Generation)": [
    {
      title: "AI Knowledge Base Search",
      description:
        "Upload documents and ask questions using embeddings + vector search.",
      tech: ["Python", "ChromaDB", "LLMs"],
      status: "Coming Soon",
    },
    {
      title: "AI Book Q&A System",
      description:
        "Ask questions about any book and get accurate answers using RAG.",
      tech: ["Python", "RAG", "LLMs"],
      status: "Coming Soon",
    },
  ],

  "AI Agents & Automation": [
    {
      title: "AI Email Inbox Manager",
      description:
        "Summarizes emails, prioritizes them, and drafts replies automatically.",
      tech: ["Python", "LLMs"],
      status: "Coming Soon",
    },
    {
      title: "AI Job Application Assistant",
      description:
        "Tailors resumes and cover letters to job descriptions.",
      tech: ["Python", "LLMs"],
      status: "Coming Soon",
    },
  ],

  "Vision & OCR": [
    {
      title: "AI Receipt Scanner",
      description:
        "Extracts totals, categories, and vendors from receipts.",
      tech: ["Python", "OCR", "LLMs"],
      status: "Coming Soon",
    },
    {
      title: "AI Business Card Reader",
      description:
        "Converts business cards into structured contact data.",
      tech: ["Python", "OCR"],
      status: "Coming Soon",
    },
  ],

  "Audio & Speech AI": [
    {
      title: "AI Voice Notes Summarizer",
      description:
        "Transcribes and summarizes voice notes into bullet points.",
      tech: ["Whisper", "LLMs"],
      status: "Coming Soon",
    },
    {
      title: "AI Podcast Topic Extractor",
      description:
        "Extracts topics and insights from long podcast episodes.",
      tech: ["Python", "Whisper", "LLMs"],
      status: "Coming Soon",
    },
  ],

  "Full‑Stack + AI Hybrid": [
    {
      title: "AI Dashboard",
      description:
        "A full‑stack dashboard with AI insights and analytics.",
      tech: ["Next.js", "Node.js", "LLMs"],
      status: "Coming Soon",
    },
    {
      title: "AI Task Manager",
      description:
        "Smart task suggestions and summaries using LLMs.",
      tech: ["React", "Node.js", "LLMs"],
      status: "Coming Soon",
    },
  ],

  "Creative AI": [
    {
      title: "AI Story Generator",
      description:
        "Generates stories with illustrations using multimodal models.",
      tech: ["Python", "LLMs"],
      status: "Coming Soon",
    },
    {
      title: "AI Meme Generator",
      description:
        "Creates memes from text prompts.",
      tech: ["Python", "Vision Models"],
      status: "Coming Soon",
    },
  ],

  "Developer Tools": [
    {
      title: "AI Code Reviewer",
      description:
        "Reviews code, finds bugs, and suggests improvements.",
      tech: ["LLMs", "Next.js"],
      status: "Coming Soon",
    },
    {
      title: "AI SQL Query Generator",
      description:
        "Converts natural language into SQL queries.",
      tech: ["Python", "LLMs"],
      status: "Coming Soon",
    },
  ],

  "Career‑Focused AI": [
    {
      title: "AI Interview Coach",
      description:
        "Generates interview questions and evaluates your answers.",
      tech: ["LLMs"],
      status: "Coming Soon",
    },
    {
      title: "AI Skill Gap Analyzer",
      description:
        "Analyzes your resume and suggests skills to learn.",
      tech: ["Python", "LLMs"],
      status: "Coming Soon",
    },
  ],
};

// ----------------------
// MAIN COMPONENT
// ----------------------

export default function Home() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <main className="min-h-screen px-6 py-10 md:px-16 lg:px-32">

      {/* Hero */}
      <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-sky-400">
            Full Stack Developer • AI Engineer in Progress
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Hi, I&apos;m <span className="text-sky-400">Shameena Koodan</span>.
          </h1>
          <p className="mt-4 text-slate-300">
            I&apos;m a full‑stack developer transitioning into AI through hands‑on
            projects, self‑learning, and real experimentation. I love building
            intelligent applications that combine strong engineering with modern
            AI capabilities — turning complex problems into simple, elegant
            solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400"
            >
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
          I&apos;m a Texas‑based full‑stack developer expanding into the world of
          AI and machine learning. My background includes building scalable web
          applications, backend systems, and cloud‑ready solutions — and now I&apos;m
          applying those skills to create AI‑powered tools that summarize,
          analyze, and extract insights from unstructured data.
          <br /><br />
          I&apos;m self‑taught in AI, learning through real projects, experimentation,
          and continuous exploration. My goal is to blend software engineering
          with intelligent automation to build applications that make a real
          impact.
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

      {/* Accordion Projects */}
      <section id="projects" className="mt-16">
        <h2 className="text-xl font-semibold text-slate-100">AI Projects</h2>

        <div className="mt-6 space-y-4">
          {(Object.keys(categorizedProjects) as string[]).map((category) => (
            <div key={category} className="border border-slate-800 rounded-xl bg-slate-900/40">

              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-slate-200 hover:bg-slate-800/40"
              >
                <span className="text-lg font-medium">{category}</span>
                <span className="text-sky-400">
                  {openCategory === category ? "−" : "+"}
                </span>
              </button>

              {/* Projects List */}
              {openCategory === category && (
                <div className="px-5 pb-5 pt-2 space-y-4">
                  {categorizedProjects[category].map((project) => (
                    <div
                      key={project.title}
                      className="rounded-lg border border-slate-800 bg-slate-900/60 p-4"
                    >
                      <h3 className="text-slate-50 font-semibold">{project.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">{project.description}</p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.tech?.map((t:string) => (
                          <span
                            key={t}
                            className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-3 flex gap-4 text-sm">
                        {project.link && (
                          <Link href={project.link} className="text-sky-400 hover:underline">
                            Live demo
                          </Link>
                        )}
                        {project.github && (
                          <Link href={project.github} className="text-slate-400 hover:underline">
                            GitHub
                          </Link>
                        )}
                        <span className="text-xs text-slate-500">{project.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-16 mb-10 max-w-xl">
        <h2 className="text-xl font-semibold text-slate-100">Contact</h2>
        <p className="mt-3 text-slate-300">
          I&apos;m open to opportunities in AI engineering, full‑stack development,
          and roles that blend both. Let&apos;s connect.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-300">
          <a href="mailto:shameenakoodan@gmail.com" className="text-sky-400 hover:underline">
            shameenakoodan@gmail.com
          </a>
          <a href="https://github.com/shameenakoodan" target="_blank" className="hover:underline">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shameenakoodan" target="_blank" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
