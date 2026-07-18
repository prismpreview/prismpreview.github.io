const sidebarLinks = [...document.querySelectorAll(".sidebar a")];
const sections = sidebarLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    for (const link of sidebarLinks) {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    }
  },
  {
    rootMargin: "-20% 0px -65% 0px",
    threshold: [0.1, 0.4, 0.8]
  }
);

for (const section of sections) {
  observer.observe(section);
}

