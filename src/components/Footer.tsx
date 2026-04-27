export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 px-6 py-10 md:px-16 lg:px-32 text-slate-400 text-sm">
      <p>© {new Date().getFullYear()} Shameena Koodan. All rights reserved.</p>
      <p className="mt-2">
        Built with Next.js, Tailwind CSS, and a love for AI‑powered development.
      </p>
    </footer>
  );
}
