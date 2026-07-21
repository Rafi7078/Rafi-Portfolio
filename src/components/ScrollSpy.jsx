import { useEffect, useState } from "react";

const sections = [
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "certificates",
  "contact",
];

export default function ScrollSpy({ children }) {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return children(active);
}