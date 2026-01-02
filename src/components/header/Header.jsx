import Logo from "./Logo";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";


export default function Header(){
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      } bg-white`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-between px-6 py-4">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}