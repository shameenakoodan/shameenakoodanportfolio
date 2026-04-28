import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-16 lg:px-32 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <Link href="/" className="text-lg font-semibold text-sky-400">
        Shameena Koodan
      </Link>

      <div className="flex gap-6 text-sm text-slate-300">
        <a href="#about" className="hover:text-sky-400">About</a>
        <a href="#projects" className="hover:text-sky-400">Projects</a>
        <a href="#contact" className="hover:text-sky-400">Contact</a>
      </div>

    </nav>
  );
}
