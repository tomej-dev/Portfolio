import { useEffect, useState } from "react";

export default function Apresentacao() {

    const text = "Desenvolvedor Web Fullstack";

  const typingSpeed = 80;
  const deletingSpeed = 50;
  const delayAfterTyping = 3000;

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayedText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } 
    else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, deletingSpeed);
    } 
    else if (!isDeleting && displayedText.length === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayAfterTyping);
    } 
    else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text]);

    return (
        <>
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
                Me chamo João Tomé 👋
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-6">
                {displayedText}
                <span className="animate-pulse">|</span>
            </p>
        </>
    )
}