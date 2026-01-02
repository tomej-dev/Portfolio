import {Github, Instagram, Linkedin} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold mb-1">João Tomé</h3>
            <p className="text-gray-400">
              Desenvolvedor Web Fullstack
            </p>
          </div>

          {/* Redes */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/tomej-dev" rel="noopener noreferrer" target="_blank"><Github/></a>
            <a href="https://www.linkedin.com/in/joaotomesz/" rel="noopener noreferrer" target="_blank"><Linkedin/></a>
            <a href="https://www.instagram.com/_joaotm/?next=%2F" rel="noopener noreferrer" target="_blank"><Instagram/></a>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-400 text-sm">
          © 2026 João Tomé.
        </p>

      </div>
    </footer>
  );
}

function Social({ icon }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
    >
      {icon}
    </a>
  );
}
