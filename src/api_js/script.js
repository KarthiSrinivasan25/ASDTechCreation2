// script.js (React-safe version)

// -----------------------------
// COUNTERS + INTERSECTION OBSERVER
// -----------------------------
// document.addEventListener("DOMContentLoaded", () => {
//   const counters = document.querySelectorAll(".counter");

//   if (counters.length > 0) {
//     let animated = false;

//     const startCounters = () => {
//       counters.forEach((counter) => {
//         const target = parseInt(counter.getAttribute("data-target")) || 0;
//         let current = 0;

//         const increment = Math.ceil(target / 50);

//         const updateCounter = () => {
//           current += increment;

//           if (current < target) {
//             counter.innerText = current;
//             requestAnimationFrame(updateCounter);
//           } else {
//             counter.innerText = target;
//           }
//         };

//         updateCounter();
//       });
//     };

//     const statsSection = document.querySelector(".stats-compact");

//     if (statsSection) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting && !animated) {
//               animated = true;
//               startCounters();
//             }
//           });
//         },
//         { threshold: 0.3 }
//       );

//       observer.observe(statsSection);
//     }

//     counters.forEach((counter) => {
//       counter.innerText = "0";
//     });
//   }

  // -----------------------------
  // TECH TABS
  // -----------------------------
  // const tabBtns = document.querySelectorAll(".tech-tab-btn");
  // const categoryContents = document.querySelectorAll(".tech-category-content");

  // if (tabBtns.length > 0 && categoryContents.length > 0) {
  //   tabBtns.forEach((btn) => {
  //     btn.addEventListener("click", () => {
  //       const category = btn.getAttribute("data-category");

  //       tabBtns.forEach((b) => b.classList.remove("active"));
  //       btn.classList.add("active");

  //       categoryContents.forEach((content) => {
  //         content.classList.remove("active");

  //         if (content.id === category) {
  //           content.classList.add("active");
  //         }
  //       });
  //     });
  //   });
  // }

  // // -----------------------------
  // // PARTICLE SYSTEM (MAIN)
  // // -----------------------------
  // function createParticles(containerId, className, count) {
  //   const container = document.getElementById(containerId);
  //   if (!container) return;

  //   for (let i = 0; i < count; i++) {
  //     const particle = document.createElement("div");
  //     particle.classList.add(className);

  //     const size = Math.random() * 4 + 2;

  //     particle.style.width = size + "px";
  //     particle.style.height = size + "px";
  //     particle.style.left = Math.random() * 100 + "%";
  //     particle.style.animationDuration = Math.random() * 15 + 8 + "s";
  //     particle.style.animationDelay = Math.random() * 5 + "s";

  //     container.appendChild(particle);
  //   }
  // }

  // createParticles("particleField", "particle", 60);
  // createParticles("ctaParticles", "cta-particle", 50);
// });



const projects = [
  {
    id: 1,
    title: "Leeangadi",
    category: "Web App",
    description:
      "Responsive business website with modern UI and smooth performance.",
    tech: "Java + Bootstrap + MySQL",
    stats: "200K+ MAU",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    ],
  },
  {
    id: 2,
    title: "PST Silver Ledger",
    category: "Mobile App",
    description:
      "Secure ledger app for tracking transactions in real time efficiently accurately.",
    tech: "Java + Firebase",
    stats: "+310% revenue",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Leeangadi Business Service",
    category: "Mobile App",
    description:
      "Fast and user-friendly mobile app for seamless business access.",
    tech: "Java + Firebase",
    stats: "500+ teams",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Vinayaga Poultry Farm",
    category: "Mobile App",
    description:
      "Farm management app for easy monitoring and operations.",
    tech: "Java + Firebase",
    stats: "500+ teams",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    ],
  },
];

export default projects;


window.addEventListener('load', () => {

    // script.js முழு code

});

