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

    // Detail page fields
    client: "Leeangadi Pvt. Ltd.",
    started: "March 2023",
    duration: "3 Months",
    budget: "$40K",
    liveUrl: "https://leeangadi.com",
    industry: "Retail / E-Commerce",
    teamSize: "4 Members",
    fullDescription: [
      "Leeangadi is a fully responsive business website built for a retail client looking to establish a strong digital presence. The platform features a clean UI, fast load times, and a seamless shopping experience optimized for both desktop and mobile.",
      "Built with Java on the backend and Bootstrap on the frontend, the site integrates a MySQL database for product management, order tracking, and customer data — all delivered with a smooth, modern design.",
    ],
    techStack: [
      { icon: "fab fa-java", color: "#007396", label: "Java" },
      { icon: "fab fa-bootstrap", color: "#7952b3", label: "Bootstrap" },
      { icon: "fas fa-database", color: "#336791", label: "MySQL" },
      { icon: "fab fa-html5", color: "#e34f26", label: "HTML5" },
      { icon: "fab fa-css3-alt", color: "#1572b6", label: "CSS3" },
      { icon: "fab fa-js", color: "#f7df1e", label: "JavaScript" },
    ],
    challenge:
      "The client needed a modern, fast-loading website to replace their outdated offline catalogue. The main challenge was organizing hundreds of products into a clean, searchable UI while keeping the backend lightweight and maintainable.",
    solution:
      "We designed a component-driven frontend with Bootstrap, backed by a Java servlet API and MySQL. Product categories are dynamically loaded, and the admin panel allows easy content updates without touching any code.",
    testimonial: {
    name: "David Wilson",
    designation: "Chief Technology Officer",
    company: "NovaTech Solutions",
    image: "/user.png",
    message:
      "Working with this team was a fantastic experience. They understood our requirements immediately, delivered every milestone on time, and the final product exceeded expectations in both performance and design."
},
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        title: "Homepage Overview",
        sub: "Modern landing page",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        title: "Product Listings",
        sub: "Category-wise product grid",
      },
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        title: "Admin Dashboard",
        sub: "Backend management panel",
      },
      {
        src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
        title: "Mobile View",
        sub: "Fully responsive design",
      },
    ],
    tags: ["Web App", "Retail", "200K+ MAU", "2023"],
    badge: "Live Project",
  },
  {
    id: 2,
    title: "PST Silver Ledger",
    category: "Mobile App",
    description:
      "Secure ledger app for tracking transactions in real time efficiently and accurately.",
    tech: "Java + Firebase",
    stats: "+310% revenue",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",

    client: "PST Jewellers",
    started: "June 2023",
    duration: "2 Months",
    budget: "$25K",
    liveUrl: "#",
    industry: "Finance / Jewellery",
    teamSize: "2 Members",
    fullDescription: [
      "PST Silver Ledger is a secure mobile application built for a jewellery business to track daily silver transactions, customer balances, and payment history in real time.",
      "Using Firebase Realtime Database, the app syncs data instantly across devices, ensuring the business owner and staff always have accurate, up-to-date records — even on the go.",
    ],
    techStack: [
      { icon: "fab fa-java", color: "#007396", label: "Java" },
      { icon: "fas fa-fire", color: "#FFA000", label: "Firebase" },
      { icon: "fab fa-android", color: "#3ddc84", label: "Android" },
      { icon: "fas fa-lock", color: "#f72585", label: "Auth" },
      { icon: "fas fa-database", color: "#336791", label: "Firestore" },
    ],
    challenge:
      "Manual ledger books were error-prone and inaccessible remotely. The client needed a secure, simple app that even non-technical staff could use confidently for daily transaction entries.",
    solution:
      "We built a native Android app with Java and Firebase, featuring PIN-based authentication, real-time sync, and an intuitive transaction entry form. Offline mode ensures data isn't lost even without internet.",
    testimonial: {
  name: "Prakash S",
  designation: "Owner",
  company: "PST Jewellers",
  image: "/user.png",
  message:
    "The Silver Ledger app completely transformed how we manage our daily transactions. The interface is simple enough for our staff to use without training, and real-time synchronization has eliminated manual errors. It has become an essential part of our business."
},
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        title: "Ledger Dashboard",
        sub: "Daily transaction summary",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        title: "Transaction Entry",
        sub: "Quick add screen",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        title: "Balance Report",
        sub: "Monthly summary view",
      },
    ],
    tags: ["Mobile App", "Finance", "+310% Revenue", "2023"],
    badge: "Featured Project",
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

    client: "Leeangadi Pvt. Ltd.",
    started: "September 2023",
    duration: "2.5 Months",
    budget: "$30K",
    liveUrl: "#",
    industry: "Business Services",
    teamSize: "3 Members",
    fullDescription: [
      "Leeangadi Business Service is the companion mobile app to the Leeangadi web platform, giving business teams mobile access to orders, inventory, and customer management on the go.",
      "Built with Java and Firebase, the app offers push notifications, real-time data sync, and a clean, fast UI designed for daily field use by sales teams and managers.",
    ],
    techStack: [
      { icon: "fab fa-java", color: "#007396", label: "Java" },
      { icon: "fas fa-fire", color: "#FFA000", label: "Firebase" },
      { icon: "fab fa-android", color: "#3ddc84", label: "Android" },
      { icon: "fas fa-bell", color: "#4361ee", label: "Push Notifications" },
      { icon: "fas fa-sync", color: "#4cc9f0", label: "Real-time Sync" },
    ],
    challenge:
      "Field sales teams had no mobile access to business data and had to call the office for order and inventory updates, causing delays and errors in customer service.",
    solution:
      "A lightweight Android app with Firebase backend giving sales staff instant access to product lists, order status, and customer details. Push notifications alert teams to new orders in real time.",
    testimonial: {
  name: "Karthik Raj",
  designation: "Operations Manager",
  company: "Leeangadi Pvt. Ltd.",
  image: "/user.png",
  message:
    "Our field staff can now access orders, inventory, and customer information instantly from anywhere. The app is fast, reliable, and has significantly improved communication between our office and sales team."
},
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        title: "App Home Screen",
        sub: "Business dashboard overview",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        title: "Order Management",
        sub: "Live order tracking",
      },
      {
        src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
        title: "Inventory View",
        sub: "Stock level monitoring",
      },
    ],
    tags: ["Mobile App", "Business", "500+ Teams", "2023"],
    badge: "Client Favourite",
  },
  {
    id: 4,
    title: "Vinayaga Poultry Farm",
    category: "Mobile App",
    description: "Farm management app for easy monitoring and operations.",
    tech: "Java + Firebase",
    stats: "500+ teams",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",

    client: "Vinayaga Farms",
    started: "November 2023",
    duration: "2 Months",
    budget: "$20K",
    liveUrl: "#",
    industry: "Agriculture / Poultry",
    teamSize: "2 Members",
    fullDescription: [
      "Vinayaga Poultry Farm app is a purpose-built farm management tool that helps the owner track flock counts, feed schedules, egg production, and daily sales — all from a smartphone.",
      "Replacing paper registers, the app stores all farm data in Firebase and generates weekly and monthly production reports, making it easier to identify trends and optimize operations.",
    ],
    techStack: [
      { icon: "fab fa-java", color: "#007396", label: "Java" },
      { icon: "fas fa-fire", color: "#FFA000", label: "Firebase" },
      { icon: "fab fa-android", color: "#3ddc84", label: "Android" },
      { icon: "fas fa-chart-bar", color: "#4361ee", label: "Reports" },
      { icon: "fas fa-cloud", color: "#4285f4", label: "Cloud Backup" },
    ],
    challenge:
      "The farm relied entirely on paper records, making it nearly impossible to track performance trends or quickly access historical data. Records were frequently lost or damaged.",
    solution:
      "A simple, offline-capable Android app with clear data entry screens for daily farm activity. Firebase cloud backup ensures no data is ever lost, and auto-generated reports give the owner weekly insights without manual calculation.",
    testimonial: {
  name: "R. Vinayagam",
  designation: "Farm Owner",
  company: "Vinayaga Poultry Farm",
  image: "/user.png",
  message:
    "We previously maintained everything in notebooks, making it difficult to track production. This app has simplified our daily operations, securely stores our records, and provides useful reports that help us make better business decisions."
},
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        title: "Farm Dashboard",
        sub: "Daily overview screen",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        title: "Production Log",
        sub: "Egg count and feed tracking",
      },
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        title: "Weekly Report",
        sub: "Auto-generated summary",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        title: "Farm Dashboard",
        sub: "Daily overview screen",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        title: "Production Log",
        sub: "Egg count and feed tracking",
      },
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        title: "Weekly Report",
        sub: "Auto-generated summary",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        title: "Farm Dashboard",
        sub: "Daily overview screen",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        title: "Production Log",
        sub: "Egg count and feed tracking",
      },
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        title: "Weekly Report",
        sub: "Auto-generated summary",
      }
    ],
    tags: ["Mobile App", "Agriculture", "Farm Mgmt", "2023"],
    badge: "Impact Project",
  },
];

export default projects;


// window.addEventListener('load', () => {
 


//         // ================================================================
//         // SPOTLIGHT GALLERY
//         // ================================================================
//         let currentIndex = 0;
//         let isAutoPlaying = true;
//         let autoPlayTimer = null;
//         let isAnimating = false;
//         let isScrolling = false;

//         const mainImage = document.getElementById('spotlightMainImage');
//         const title = document.getElementById('spotlightTitle');
//         const sub = document.getElementById('spotlightSub');
//         const counter = document.getElementById('spotlightCounter');
//         const thumbnails = document.getElementById('spotlightThumbnails');
//         const prevBtn = document.getElementById('spotlightPrev');
//         const nextBtn = document.getElementById('spotlightNext');

//         // ================================================================
//         // BUTTERFLY
//         // ================================================================
//         function createButterfly() {
//             const butterfly = document.createElement('div');
//             butterfly.className = 'butterfly';
//             butterfly.innerHTML = '🦋';
//             document.body.appendChild(butterfly);
//             return butterfly;
//         }

//         function createSparkle(x, y, type = 'medium') {
//             const sparkle = document.createElement('div');
//             sparkle.className = `sparkle-trail ${type}`;
//             sparkle.style.left = x + 'px';
//             sparkle.style.top = y + 'px';
//             sparkle.style.transform = 'translate(-50%, -50%)';
//             const duration = 0.6 + Math.random() * 0.4;
//             sparkle.style.animationDuration = duration + 's';
//             document.body.appendChild(sparkle);
//             setTimeout(() => sparkle.remove(), 1000);
//         }

//         function createSparkleBurst(x, y) {
//             const colors = ['#4cc9f0', '#4361ee', '#a5b4fc', '#f72585', '#ffd700'];
//             const numSparkles = 30;
//             for (let i = 0; i < numSparkles; i++) {
//                 const sparkle = document.createElement('div');
//                 sparkle.className = 'sparkle-burst';
//                 const size = 4 + Math.random() * 10;
//                 const angle = Math.random() * Math.PI * 2;
//                 const distance = 40 + Math.random() * 100;
//                 const tx = Math.cos(angle) * distance;
//                 const ty = Math.sin(angle) * distance;
//                 sparkle.style.width = size + 'px';
//                 sparkle.style.height = size + 'px';
//                 sparkle.style.left = (x + tx) + 'px';
//                 sparkle.style.top = (y + ty) + 'px';
//                 sparkle.style.transform = 'translate(-50%, -50%)';
//                 sparkle.style.background =
//                     `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;
//                 sparkle.style.boxShadow = `0 0 ${size * 2}px rgba(76, 201, 240, 0.3)`;
//                 const duration = 0.4 + Math.random() * 0.4;
//                 sparkle.style.animationDuration = duration + 's';
//                 document.body.appendChild(sparkle);
//                 setTimeout(() => sparkle.remove(), 800);
//             }
//         }

//         function flyButterfly(fromElement, toElement, callback) {
//             if (isAnimating) {
//                 if (callback) callback();
//                 return;
//             }
//             isAnimating = true;

//             const fromRect = fromElement.getBoundingClientRect();
//             const toRect = toElement.getBoundingClientRect();

//             const startX = fromRect.left + fromRect.width / 2;
//             const startY = fromRect.top + fromRect.height / 2;
//             const endX = toRect.left + toRect.width / 2;
//             const endY = toRect.top + toRect.height / 2;

//             const butterfly = createButterfly();
//             butterfly.style.left = startX + 'px';
//             butterfly.style.top = startY + 'px';
//             butterfly.style.transform = 'translate(-50%, -50%) scale(0.3)';
//             butterfly.style.opacity = '0';
//             butterfly.classList.add('flying');

//             setTimeout(() => {
//                 butterfly.style.opacity = '1';
//                 for (let i = 0; i < 8; i++) {
//                     const offsetX = (Math.random() - 0.5) * 60;
//                     const offsetY = (Math.random() - 0.5) * 60;
//                     const types = ['large', 'medium', 'small'];
//                     createSparkle(startX + offsetX, startY + offsetY, types[Math.floor(Math.random() * types
//                     .length)]);
//                 }
//             }, 50);

//             const trailInterval = setInterval(() => {
//                 if (butterfly.style.opacity !== '0') {
//                     const rect = butterfly.getBoundingClientRect();
//                     const x = rect.left + rect.width / 2;
//                     const y = rect.top + rect.height / 2;
//                     const types = ['large', 'medium', 'small'];
//                     for (let i = 0; i < 3; i++) {
//                         const offsetX = (Math.random() - 0.5) * 30;
//                         const offsetY = (Math.random() - 0.5) * 30;
//                         createSparkle(
//                             x + offsetX,
//                             y + offsetY,
//                             types[Math.floor(Math.random() * types.length)]
//                         );
//                     }
//                 }
//             }, 30);

//             const duration = 1000;
//             const startTime = Date.now();

//             function animateButterfly() {
//                 const elapsed = Date.now() - startTime;
//                 const progress = Math.min(elapsed / duration, 1);

//                 const ease = progress < 0.5 ?
//                     4 * progress * progress * progress :
//                     1 - Math.pow(-2 * progress + 2, 3) / 2;

//                 const x = startX + (endX - startX) * ease;
//                 const y = startY + (endY - startY) * ease - Math.sin(ease * Math.PI) * 120;

//                 const wobble = Math.sin(ease * 20) * 8;

//                 butterfly.style.left = (x + wobble) + 'px';
//                 butterfly.style.top = (y + Math.sin(ease * 15) * 6) + 'px';
//                 butterfly.style.transform =
//                     `translate(-50%, -50%) scale(${0.3 + ease * 0.7}) rotate(${ease * 250}deg)`;

//                 if (progress < 1) {
//                     requestAnimationFrame(animateButterfly);
//                 } else {
//                     createSparkleBurst(endX, endY);
//                     clearInterval(trailInterval);
//                     butterfly.style.opacity = '0';
//                     butterfly.classList.remove('flying');
//                     setTimeout(() => {
//                         butterfly.remove();
//                         isAnimating = false;
//                         if (callback) callback();
//                     }, 300);
//                 }
//             }

//             animateButterfly();
//         }

//         // ================================================================
//         // SCROLL THUMBNAIL
//         // ================================================================
//         function scrollThumbnailIntoView(index, animate = true) {
//             const targetThumb = document.querySelectorAll('.spotlight-thumb')[index];
//             if (!targetThumb || !thumbnails) return;

//             const containerRect = thumbnails.getBoundingClientRect();
//             const thumbRect = targetThumb.getBoundingClientRect();

//             if (thumbnails.scrollWidth > thumbnails.clientWidth) {
//                 const isVisible = (
//                     thumbRect.left >= containerRect.left - 10 &&
//                     thumbRect.right <= containerRect.right + 10
//                 );
//                 if (!isVisible) {
//                     const scrollLeft = thumbnails.scrollLeft + (thumbRect.left - containerRect.left) - (containerRect
//                         .width / 2) + (thumbRect.width / 2);
//                     thumbnails.scrollTo({
//                         left: Math.max(0, scrollLeft),
//                         behavior: animate ? 'smooth' : 'auto'
//                     });
//                 }
//             } else {
//                 const isVisible = (
//                     thumbRect.top >= containerRect.top - 10 &&
//                     thumbRect.bottom <= containerRect.bottom + 10
//                 );
//                 if (!isVisible) {
//                     const scrollTop = thumbnails.scrollTop + (thumbRect.top - containerRect.top) - (containerRect
//                         .height / 2) + (thumbRect.height / 2);
//                     thumbnails.scrollTo({
//                         top: Math.max(0, scrollTop),
//                         behavior: animate ? 'smooth' : 'auto'
//                     });
//                 }
//             }
//         }

//         // ================================================================
//         // GO TO IMAGE
//         // ================================================================
//         function goToImageWithButterfly(index, fromThumb = null) {
//             if (index === currentIndex || isAnimating || isScrolling) return;

//             isScrolling = true;
//             scrollThumbnailIntoView(index, true);

//             setTimeout(() => {
//                 isScrolling = false;

//                 if (!fromThumb) {
//                     fromThumb = document.querySelectorAll('.spotlight-thumb')[index] || null;
//                 }

//                 const featuredEl = document.getElementById('spotlightFeatured');

//                 if (fromThumb && featuredEl) {
//                     flyButterfly(fromThumb, featuredEl, () => {
//                         performImageChange(index);
//                     });
//                 } else {
//                     performImageChange(index);
//                 }
//             }, 400);
//         }

//         function performImageChange(index) {
//             const img = galleryImages[index];
//             mainImage.src = img.src;
//             mainImage.alt = img.title;
//             title.textContent = img.title;
//             sub.textContent = img.sub;
//             counter.textContent = `${index + 1} / ${galleryImages.length}`;

//             document.querySelectorAll('.spotlight-thumb').forEach((thumb, i) => {
//                 thumb.classList.toggle('active', i === index);
//                 thumb.classList.toggle('upcoming', i === (index + 1) % galleryImages.length);
//             });

//             currentIndex = index;

//             setTimeout(() => {
//                 scrollThumbnailIntoView(index, true);
//             }, 150);
//         }

//         // ================================================================
//         // AUTO-PLAY
//         // ================================================================
//         function autoPlayNext() {
//             if (!isAutoPlaying || isAnimating || isScrolling) {
//                 if (!isAutoPlaying) return;
//                 setTimeout(autoPlayNext, 500);
//                 return;
//             }
//             const next = (currentIndex + 1) % galleryImages.length;
//             goToImageWithButterfly(next);

//             clearTimeout(autoPlayTimer);
//             autoPlayTimer = setTimeout(autoPlayNext, 4500);
//         }

//         function startAutoPlay() {
//             isAutoPlaying = true;
//             clearTimeout(autoPlayTimer);
//             autoPlayTimer = setTimeout(autoPlayNext, 3000);
//         }

//         function stopAutoPlay() {
//             isAutoPlaying = false;
//             clearTimeout(autoPlayTimer);
//         }

//         // ================================================================
//         // RENDER THUMBNAILS
//         // ================================================================
//         function renderThumbnails() {
//             thumbnails.innerHTML = '';
//             galleryImages.forEach((img, index) => {
//                 const isActive = index === currentIndex;
//                 const isUpcoming = index === (currentIndex + 1) % galleryImages.length;
//                 const thumb = document.createElement('div');
//                 thumb.className = `spotlight-thumb ${isActive ? 'active' : ''} ${isUpcoming ? 'upcoming' : ''}`;
//                 thumb.innerHTML = `
//                     <img src="${img.src}" alt="${img.title}" loading="lazy" />
//                     <span class="thumb-index">${String(index + 1).padStart(2, '0')}</span>
//                     <span class="thumb-title">${img.title}</span>
//                 `;
//                 thumb.addEventListener('click', (e) => {
//                     e.preventDefault();
//                     if (isAnimating || isScrolling) return;
//                     stopAutoPlay();
//                     goToImageWithButterfly(index, thumb);
//                     setTimeout(startAutoPlay, 5000);
//                 });
//                 thumb.addEventListener('touchend', (e) => {
//                     if (isAnimating || isScrolling) return;
//                     stopAutoPlay();
//                     goToImageWithButterfly(index, thumb);
//                     setTimeout(startAutoPlay, 5000);
//                 });
//                 thumbnails.appendChild(thumb);
//             });

//             setTimeout(() => {
//                 scrollThumbnailIntoView(currentIndex, false);
//             }, 100);
//         }

//         // ================================================================
//         // NAVIGATION
//         // ================================================================
//         function nextImage() {
//             if (isAnimating || isScrolling) return;
//             stopAutoPlay();
//             const next = (currentIndex + 1) % galleryImages.length;
//             goToImageWithButterfly(next);
//             setTimeout(startAutoPlay, 5000);
//         }

//         function prevImage() {
//             if (isAnimating || isScrolling) return;
//             stopAutoPlay();
//             const prev = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
//             const thumbs = document.querySelectorAll('.spotlight-thumb');
//             goToImageWithButterfly(prev, thumbs[prev]);
//             setTimeout(startAutoPlay, 5000);
//         }

//         prevBtn.addEventListener('click', prevImage);
//         nextBtn.addEventListener('click', nextImage);

//         document.addEventListener('keydown', (e) => {
//             if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
//             if (e.key === 'ArrowLeft') prevImage();
//             if (e.key === 'ArrowRight') nextImage();
//         });

//         document.getElementById('spotlightFeatured').addEventListener('click', (e) => {
//             if (e.target.closest('.featured-nav-btn')) return;
//             if (isAnimating || isScrolling) return;
//             stopAutoPlay();
//             openLightbox(currentIndex);
//         });

//         // ================================================================
//         // LIGHTBOX
//         // ================================================================
//         const overlay = document.getElementById('lightboxOverlay');
//         const lightboxImage = document.getElementById('lightboxMainImage');
//         const lightboxCounter = document.getElementById('lightboxCounter');
//         const closeBtn = document.getElementById('lightboxClose');

//         function openLightbox(index) {
//             currentIndex = index;
//             overlay.classList.add('active');
//             document.body.style.overflow = 'hidden';
//             updateLightbox();
//         }

//         function closeLightbox() {
//             overlay.classList.remove('active');
//             document.body.style.overflow = '';
//             startAutoPlay();
//         }

//         function updateLightbox() {
//             const item = galleryImages[currentIndex];
//             lightboxImage.src = item.src;
//             lightboxImage.alt = item.title;
//             lightboxCounter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
//         }

//         function navigateLightbox(direction) {
//             currentIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length;
//             updateLightbox();
//             const thumbs = document.querySelectorAll('.spotlight-thumb');
//             goToImageWithButterfly(currentIndex, thumbs[currentIndex]);
//         }

//         closeBtn.addEventListener('click', closeLightbox);
//         overlay.addEventListener('click', (e) => {
//             if (e.target === overlay) closeLightbox();
//         });

//         document.addEventListener('keydown', (e) => {
//             if (!overlay.classList.contains('active')) return;
//             if (e.key === 'Escape') closeLightbox();
//             if (e.key === 'ArrowLeft') navigateLightbox(-1);
//             if (e.key === 'ArrowRight') navigateLightbox(1);
//         });

//         // ================================================================
//         // RESIZE
//         // ================================================================
//         let resizeTimer;
//         window.addEventListener('resize', () => {
//             clearTimeout(resizeTimer);
//             resizeTimer = setTimeout(() => {
//                 if (thumbnails) {
//                     scrollThumbnailIntoView(currentIndex, false);
//                 }
//             }, 300);
//         });

//         // ================================================================
//         // INIT
//         // ================================================================
//         window.addEventListener('scroll', () => {
//             const navbar = document.getElementById('mainNavbar');
//             if (window.scrollY > 20) navbar.classList.add('scrolled');
//             else navbar.classList.remove('scrolled');
//         });

//         document.getElementById('subscribeFooterBtn')?.addEventListener('click', () => {
//             let email = document.getElementById('footerEmail').value.trim();
//             alert(email && email.includes('@') ? `Subscribed ${email}` : 'Valid email required');
//         });

//         renderThumbnails();
//         const initialImg = galleryImages[0];
//         mainImage.src = initialImg.src;
//         mainImage.alt = initialImg.title;
//         title.textContent = initialImg.title;
//         sub.textContent = initialImg.sub;
//         counter.textContent = `1 / ${galleryImages.length}`;
//         currentIndex = 0;

//         document.querySelectorAll('.spotlight-thumb').forEach((thumb, i) => {
//             thumb.classList.toggle('upcoming', i === 1);
//         });

//         setTimeout(() => {
//             scrollThumbnailIntoView(0, false);
//         }, 300);

//         setTimeout(startAutoPlay, 2000);
   
// });

window.addEventListener('load', ()=>{
  // const serviceData = {
  //           web: {
  //               id: 'web',
  //               name: 'Web Development',
  //               icon: 'fa-code',
  //               heroTag: '<i class="fas fa-code me-1"></i> Web Development',
  //               heroTitle: 'Build High-Performance <br /><span style="background:linear-gradient(135deg,#4361ee,#4cc9f0);-webkit-background-clip:text;background-clip:text;color:transparent;">Web Applications</span>',
  //               heroDesc: 'We build fast, scalable, and secure web applications that drive business growth and deliver exceptional user experiences.',
  //               heroStats: ['<strong>50+</strong> Projects Delivered', '<strong>98%</strong> Client Satisfaction',
  //                   '<strong>2.5x</strong> Avg. ROI Increase'
  //               ],
  //               benefits: [
  //                   { icon: 'fa-rocket', color: '#4361ee', title: 'Fast Performance',
  //                       desc: 'Lightning-fast load times with optimized code and modern infrastructure.' },
  //                   { icon: 'fa-shield-alt', color: '#4cc9f0', title: 'Secure & Scalable',
  //                       desc: 'Enterprise-grade security and architecture that grows with your business.' },
  //                   { icon: 'fa-mobile-alt', color: '#f72585', title: 'Mobile Responsive',
  //                       desc: 'Flawless experience across all devices — phones, tablets, and desktops.' }
  //               ],
  //               overview: {
  //                   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
  //                   title: 'Custom Web Solutions That Drive Results',
  //                   desc: 'We build websites and web applications that combine stunning design with powerful functionality. Our focus is on creating digital experiences that engage users and achieve your business objectives.',
  //                   list: [
  //                       'Custom design tailored to your brand',
  //                       'SEO-optimized for better search rankings',
  //                       'CMS integration for easy content management',
  //                       'Ongoing support and maintenance'
  //                   ]
  //               },
  //               features: [
  //                   { icon: 'fa-paint-brush', title: 'Custom UI/UX Design',
  //                       desc: 'Pixel-perfect designs crafted for your target audience.' },
  //                   { icon: 'fa-database', title: 'Database Integration',
  //                       desc: 'Seamless integration with MySQL, PostgreSQL, or MongoDB.' },
  //                   { icon: 'fa-cloud', title: 'Cloud Hosting Setup',
  //                       desc: 'Deploy on AWS, Azure, or Google Cloud with CI/CD pipelines.' },
  //                   { icon: 'fa-lock', title: 'Security Hardening',
  //                       desc: 'SSL, encryption, and best practices for data protection.' },
  //                   { icon: 'fa-search', title: 'SEO Optimization',
  //                       desc: 'Built-in SEO features to help you rank higher in search results.' },
  //                   { icon: 'fa-headset', title: '24/7 Support',
  //                       desc: 'Round-the-clock assistance from our expert team.' }
  //               ],
  //               process: [
  //                   { number: '01', title: 'Discovery & Planning',
  //                       desc: 'We understand your goals, audience, and requirements to create a detailed project roadmap.' },
  //                   { number: '02', title: 'Design & Development',
  //                       desc: 'Our team creates stunning designs and develops clean, maintainable code with regular updates.' },
  //                   { number: '03', title: 'Testing & Launch',
  //                       desc: 'Rigorous testing across devices and browsers, followed by a smooth deployment and handover.' }
  //               ],
  //               portfolio: [
  //                   { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  //                       tag: 'Fintech', title: 'NeoBank Dashboard',
  //                       desc: 'Real-time financial analytics platform serving 200K+ users.' },
  //                   { image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  //                       tag: 'E-commerce', title: 'EcoStore Marketplace',
  //                       desc: 'Sustainable goods platform with 310% revenue growth.' },
  //                   { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  //                       tag: 'HealthTech', title: 'MediPredict AI',
  //                       desc: 'AI-driven diagnostic tool used by 45+ healthcare providers.' }
  //               ],
  //               techs: [
  //                   { icon: 'fa-react', color: '#61dafb', name: 'React' },
  //                   { icon: 'fa-vuejs', color: '#4fc08d', name: 'Vue.js' },
  //                   { icon: 'fa-angular', color: '#dd0031', name: 'Angular' },
  //                   { icon: 'fa-node-js', color: '#68a063', name: 'Node.js' },
  //                   { icon: 'fa-python', color: '#3776ab', name: 'Python' },
  //                   { icon: 'fa-php', color: '#777bb4', name: 'PHP' },
  //                   { icon: 'fa-laravel', color: '#ff2d20', name: 'Laravel' },
  //                   { icon: 'fas fa-database', color: '#336791', name: 'PostgreSQL' },
  //                   { icon: 'fas fa-aws', color: '#ff9900', name: 'AWS' },
  //                   { icon: 'fas fa-docker', color: '#2496ed', name: 'Docker' },
  //                   { icon: 'fab fa-tailwindcss', color: '#06b6d4', name: 'Tailwind' },
  //                   { icon: 'fab fa-bootstrap', color: '#7952b3', name: 'Bootstrap' }
  //               ],
  //               pricing: [
  //                   { price: '$2,500', period: '/project', title: 'Starter', desc: 'Perfect for small businesses',
  //                       features: ['5 Pages Website', 'Mobile Responsive', 'SEO Optimized', '1 Month Support'],
  //                       btnText: 'Get Started', popular: false },
  //                   { price: '$5,500', period: '/project', title: 'Professional', desc: 'For growing businesses',
  //                       features: ['15 Pages Website', 'Custom CMS', 'E-commerce Ready', '3 Months Support'],
  //                       btnText: 'Get Started', popular: true },
  //                   { price: '$9,900', period: '/project', title: 'Enterprise', desc: 'For large-scale applications',
  //                       features: ['Unlimited Pages', 'Custom Development', 'API Integrations', '12 Months Support'],
  //                       btnText: 'Contact Sales', popular: false }
  //               ],
  //               faq: [
  //                   { q: 'How long does it take to build a website?',
  //                       a: 'Timeline varies based on project complexity. A typical website takes 4-8 weeks, while complex web applications may take 3-6 months.' },
  //                   { q: 'Do you offer maintenance after launch?',
  //                       a: 'Yes! We offer ongoing maintenance packages including updates, security patches, backups, and technical support.' },
  //                   { q: 'Can you redesign my existing website?',
  //                       a: 'Absolutely! We can redesign your current website to improve performance, design, and user experience while preserving your content.' },
  //                   { q: 'Do you provide hosting services?',
  //                       a: 'Yes, we offer cloud hosting solutions with 99.99% uptime, automatic backups, and 24/7 monitoring through our trusted partners.' }
  //               ],
  //               testimonials: [
  //                   { name: 'Sarah Johnson', role: 'CEO, TechStartup',
  //                       text: '"CodeStack transformed our online presence completely. Their team delivered a stunning, high-performance website that exceeded all expectations."',
  //                       rating: 5 },
  //                   { name: 'Michael Chen', role: 'Founder, UrbanStore',
  //                       text: '"Working with CodeStack was a game-changer. Their technical expertise helped us increase conversions by 45% within the first 3 months."',
  //                       rating: 5 },
  //                   { name: 'Emily Rodriguez', role: 'Marketing Director',
  //                       text: '"Professional, responsive, and incredibly talented. They delivered our project on time and within budget. Highly recommended!"',
  //                       rating: 5 }
  //               ],
  //               cta: {
  //                   title: 'Ready to Build Your Dream Website?',
  //                   desc: 'Let\'s discuss how we can bring your vision to life with a custom web solution.',
  //                   btnText: 'Start Your Project Today'
  //               }
  //           },
  //           seo: {
  //               id: 'seo',
  //               name: 'SEO',
  //               icon: 'fa-chart-line',
  //               heroTag: '<i class="fas fa-chart-line me-1"></i> SEO Services',
  //               heroTitle: 'Dominate Search Rankings <br /><span style="background:linear-gradient(135deg,#f72585,#4361ee);-webkit-background-clip:text;background-clip:text;color:transparent;">with Data-Driven SEO</span>',
  //               heroDesc: 'We help businesses increase organic traffic, improve search rankings, and drive sustainable growth through proven SEO strategies.',
  //               heroStats: ['<strong>150+</strong> Keywords Ranked', '<strong>93%</strong> Client Retention',
  //                   '<strong>4.2x</strong> Avg. Traffic Increase'
  //               ],
  //               benefits: [
  //                   { icon: 'fa-arrow-trend-up', color: '#f72585', title: 'Higher Rankings',
  //                       desc: 'We use proven strategies to get your site on the first page of Google.' },
  //                   { icon: 'fa-users', color: '#4361ee', title: 'Targeted Traffic',
  //                       desc: 'Attract high-quality visitors who are actively searching for your products or services.' },
  //                   { icon: 'fa-chart-simple', color: '#4cc9f0', title: 'Measurable Results',
  //                       desc: 'Transparent reporting with clear metrics on traffic, rankings, and conversions.' }
  //               ],
  //               overview: {
  //                   image: 'https://images.unsplash.com/photo-1432889821006-c6c5e4a2f6c0?w=800&h=500&fit=crop',
  //                   title: 'Data-Driven SEO That Delivers Results',
  //                   desc: 'Our SEO strategies are built on data, research, and proven techniques. We optimize your website to rank higher, attract more visitors, and convert them into loyal customers.',
  //                   list: [
  //                       'Comprehensive keyword research and strategy',
  //                       'On-page and technical SEO optimization',
  //                       'High-quality backlink building',
  //                       'Regular performance tracking and reporting'
  //                   ]
  //               },
  //               features: [
  //                   { icon: 'fa-magnifying-glass', title: 'Keyword Research',
  //                       desc: 'Find the right keywords to target for maximum visibility.' },
  //                   { icon: 'fa-code', title: 'Technical SEO',
  //                       desc: 'Optimize site structure, speed, and crawlability for search engines.' },
  //                   { icon: 'fa-file-lines', title: 'Content Strategy',
  //                       desc: 'Create high-quality content that ranks and engages your audience.' },
  //                   { icon: 'fa-link', title: 'Link Building',
  //                       desc: 'Build high-authority backlinks to boost your domain authority.' },
  //                   { icon: 'fa-mobile-screen', title: 'Mobile Optimization',
  //                       desc: 'Ensure your site is fully optimized for mobile users.' },
  //                   { icon: 'fa-chart-column', title: 'Analytics & Reporting',
  //                       desc: 'Detailed reports to track progress and measure success.' }
  //               ],
  //               process: [
  //                   { number: '01', title: 'SEO Audit & Research',
  //                       desc: 'We analyze your current SEO performance and identify opportunities for improvement.' },
  //                   { number: '02', title: 'Strategy Development',
  //                       desc: 'We create a customized SEO strategy tailored to your business goals and target audience.' },
  //                   { number: '03', title: 'Implementation & Optimization',
  //                       desc: 'We execute the strategy with ongoing optimization and performance tracking.' }
  //               ],
  //               portfolio: [
  //                   { image: 'https://images.unsplash.com/photo-1432889821006-c6c5e4a2f6c0?w=600&h=400&fit=crop',
  //                       tag: 'SEO', title: 'EcoStore SEO Campaign',
  //                       desc: 'Increased organic traffic by 320% in 6 months.' },
  //                   { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  //                       tag: 'SEO', title: 'FinTech Keyword Domination',
  //                       desc: 'Ranked #1 for 45 high-value keywords in the finance space.' },
  //                   { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  //                       tag: 'SEO', title: 'HealthTech SEO Growth',
  //                       desc: 'Drove 180% increase in qualified leads through organic search.' }
  //               ],
  //               techs: [
  //                   { icon: 'fab fa-google', color: '#4285f4', name: 'Google Analytics' },
  //                   { icon: 'fab fa-google', color: '#34a853', name: 'Google Search Console' },
  //                   { icon: 'fas fa-toolbox', color: '#f72585', name: 'SEMrush' },
  //                   { icon: 'fas fa-robot', color: '#4361ee', name: 'Ahrefs' },
  //                   { icon: 'fas fa-code', color: '#4cc9f0', name: 'Schema Markup' },
  //                   { icon: 'fas fa-mobile-screen', color: '#06b6d4', name: 'Mobile-First Indexing' }
  //               ],
  //               pricing: [
  //                   { price: '$1,200', period: '/month', title: 'Starter SEO', desc: 'Perfect for small businesses',
  //                       features: ['5 Keywords Tracked', 'Monthly SEO Audit', 'Basic Reporting', 'Email Support'],
  //                       btnText: 'Get Started', popular: false },
  //                   { price: '$2,500', period: '/month', title: 'Professional SEO', desc: 'For growing businesses',
  //                       features: ['15 Keywords Tracked', 'Weekly SEO Audit', 'Content Strategy', 'Monthly Reporting'],
  //                       btnText: 'Get Started', popular: true },
  //                   { price: '$4,900', period: '/month', title: 'Enterprise SEO', desc: 'For large-scale campaigns',
  //                       features: ['Unlimited Keywords', 'Daily Monitoring', 'Advanced Link Building',
  //                           'Dedicated SEO Manager'
  //                       ], btnText: 'Contact Sales', popular: false }
  //               ],
  //               faq: [
  //                   { q: 'How long does SEO take to show results?',
  //                       a: 'SEO is a long-term strategy. Typically, you can see initial results in 3-6 months, with significant improvements in 6-12 months.' },
  //                   { q: 'Do you guarantee #1 rankings?',
  //                       a: 'No reputable SEO agency can guarantee #1 rankings. However, we guarantee to use ethical, white-hat strategies to improve your rankings and traffic.' },
  //                   { q: 'What is included in your SEO packages?',
  //                       a: 'Our packages include keyword research, on-page optimization, technical SEO, content strategy, link building, and regular performance reporting.' },
  //                   { q: 'Do you work with local businesses?',
  //                       a: 'Yes! We specialize in local SEO to help businesses attract customers in their area.' }
  //               ],
  //               testimonials: [
  //                   { name: 'Lisa Wang', role: 'Marketing Director, EcoStore',
  //                       text: '"Our organic traffic grew by 320% within 6 months. CodeStack\'s SEO expertise transformed our online presence."',
  //                       rating: 5 },
  //                   { name: 'David Kim', role: 'CEO, HealthTech Solutions',
  //                       text: '"CodeStack helped us rank #1 for our most important keywords. Their strategic approach delivered measurable results."',
  //                       rating: 5 },
  //                   { name: 'Rachel Stevens', role: 'Founder, UrbanMarket',
  //                       text: '"The SEO campaign from CodeStack increased our qualified leads by 180%. Their team is truly exceptional."',
  //                       rating: 5 }
  //               ],
  //               cta: {
  //                   title: 'Ready to Rank Higher on Google?',
  //                   desc: 'Let\'s create an SEO strategy that drives targeted traffic and grows your business.',
  //                   btnText: 'Start Your SEO Journey'
  //               }
  //           },
  //           mobile: {
  //               id: 'mobile',
  //               name: 'Mobile App Development',
  //               icon: 'fa-mobile-alt',
  //               heroTag: '<i class="fas fa-mobile-alt me-1"></i> Mobile App Development',
  //               heroTitle: 'Build World-Class <br /><span style="background:linear-gradient(135deg,#4cc9f0,#4361ee);-webkit-background-clip:text;background-clip:text;color:transparent;">Mobile Applications</span>',
  //               heroDesc: 'We design and develop native and cross-platform mobile apps that deliver exceptional user experiences and drive business growth.',
  //               heroStats: ['<strong>30+</strong> Apps Launched', '<strong>96%</strong> User Satisfaction',
  //                   '<strong>4.8</strong> Avg. App Store Rating'
  //               ],
  //               benefits: [
  //                   { icon: 'fa-mobile-screen', color: '#4cc9f0', title: 'Native Performance',
  //                       desc: 'Optimized apps that deliver smooth, fast, and responsive experiences.' },
  //                   { icon: 'fa-layer-group', color: '#4361ee', title: 'Cross-Platform',
  //                       desc: 'Reach both iOS and Android users with a single codebase using Flutter or React Native.' },
  //                   { icon: 'fa-cloud-arrow-up', color: '#f72585', title: 'App Store Deployment',
  //                       desc: 'Full support for publishing your app on the App Store and Google Play Store.' }
  //               ],
  //               overview: {
  //                   image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
  //                   title: 'Mobile Apps That Users Love',
  //                   desc: 'We create mobile applications that combine beautiful design with powerful functionality. Our focus is on delivering apps that users love to use and that achieve your business objectives.',
  //                   list: [
  //                       'Native iOS and Android development',
  //                       'Cross-platform solutions with Flutter and React Native',
  //                       'Intuitive UI/UX design',
  //                       'Backend integration and API development'
  //                   ]
  //               },
  //               features: [
  //                   { icon: 'fa-apple', title: 'iOS Development',
  //                       desc: 'Native iOS apps with Swift and the latest Apple frameworks.' },
  //                   { icon: 'fa-android', title: 'Android Development',
  //                       desc: 'Native Android apps with Kotlin and Jetpack Compose.' },
  //                   { icon: 'fa-layer-group', title: 'Cross-Platform',
  //                       desc: 'Build once, deploy everywhere with Flutter or React Native.' },
  //                   { icon: 'fa-cloud', title: 'Backend Integration',
  //                       desc: 'Seamless integration with cloud services and APIs.' },
  //                   { icon: 'fa-shield', title: 'Security',
  //                       desc: 'Enterprise-grade security for data protection and user privacy.' },
  //                   { icon: 'fa-rocket', title: 'App Store Optimization',
  //                       desc: 'Optimize your app listing for better visibility and downloads.' }
  //               ],
  //               process: [
  //                   { number: '01', title: 'Discovery & Strategy',
  //                       desc: 'We define your app idea, target audience, and key features to create a detailed product roadmap.' },
  //                   { number: '02', title: 'Design & Development',
  //                       desc: 'Our designers create stunning UI, and our developers build a robust, scalable app.' },
  //                   { number: '03', title: 'Testing & Launch',
  //                       desc: 'We rigorously test your app and guide you through the App Store and Play Store submission process.' }
  //               ],
  //               portfolio: [
  //                   { image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
  //                       tag: 'iOS/Android', title: 'TaskFlow AI',
  //                       desc: 'Cross-platform productivity app used by 500+ enterprise teams.' },
  //                   { image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
  //                       tag: 'iOS', title: 'HealthTrack Mobile',
  //                       desc: 'Patient management app serving 45+ healthcare providers.' },
  //                   { image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop',
  //                       tag: 'Android', title: 'EcoStore Mobile',
  //                       desc: 'Shopping app with 4.8-star rating on Google Play.' }
  //               ],
  //               techs: [
  //                   { icon: 'fab fa-swift', color: '#fa7343', name: 'Swift' },
  //                   { icon: 'fab fa-android', color: '#3ddc84', name: 'Kotlin' },
  //                   { icon: 'fab fa-flutter', color: '#02569b', name: 'Flutter' },
  //                   { icon: 'fab fa-react', color: '#61dafb', name: 'React Native' },
  //                   { icon: 'fas fa-cloud', color: '#4285f4', name: 'Firebase' },
  //                   { icon: 'fas fa-database', color: '#336791', name: 'PostgreSQL' },
  //                   { icon: 'fas fa-aws', color: '#ff9900', name: 'AWS' },
  //                   { icon: 'fab fa-apple', color: '#a5b4fc', name: 'iOS SDK' }
  //               ],
  //               pricing: [
  //                   { price: '$15,000', period: '/project', title: 'Basic App', desc: 'Simple app with core features',
  //                       features: ['5 Screens', 'Basic Backend', 'App Store Submission', '1 Month Support'],
  //                       btnText: 'Get Started', popular: false },
  //                   { price: '$35,000', period: '/project', title: 'Professional App',
  //                       desc: 'Full-featured app with advanced capabilities',
  //                       features: ['10+ Screens', 'Custom Backend', 'Push Notifications', '3 Months Support'],
  //                       btnText: 'Get Started', popular: true },
  //                   { price: '$65,000+', period: '/project', title: 'Enterprise App',
  //                       desc: 'Complex app with enterprise features',
  //                       features: ['Unlimited Screens', 'AI/ML Integration', 'Real-time Sync', '12 Months Support'],
  //                       btnText: 'Contact Sales', popular: false }
  //               ],
  //               faq: [
  //                   { q: 'How much does it cost to build a mobile app?',
  //                       a: 'The cost varies based on complexity, features, and platforms. A basic app can start from $15,000, while complex enterprise apps can range from $50,000 to $150,000+.' },
  //                   { q: 'Do you build apps for both iOS and Android?',
  //                       a: 'Yes! We build native apps for both platforms and cross-platform apps using Flutter and React Native.' },
  //                   { q: 'How long does it take to develop a mobile app?',
  //                       a: 'Timeline varies based on complexity. A simple app takes 2-3 months, while complex apps can take 4-6 months or more.' },
  //                   { q: 'Do you help with app store submission?',
  //                       a: 'Yes, we guide you through the entire App Store and Google Play Store submission process.' }
  //               ],
  //               testimonials: [
  //                   { name: 'James Wilson', role: 'CTO, TaskFlow Inc.',
  //                       text: '"CodeStack delivered a high-quality cross-platform app that our users love. The performance is exceptional."',
  //                       rating: 5 },
  //                   { name: 'Amanda Lee', role: 'Product Manager, HealthTech',
  //                       text: '"Our mobile app from CodeStack has a 4.8-star rating on both app stores. Users love the intuitive design."',
  //                       rating: 5 },
  //                   { name: 'Robert Park', role: 'CEO, EcoStore',
  //                       text: '"The mobile app exceeded our expectations. CodeStack\'s team was professional, responsive, and highly skilled."',
  //                       rating: 5 }
  //               ],
  //               cta: {
  //                   title: 'Ready to Build Your Mobile App?',
  //                   desc: 'Let\'s discuss your app idea and create a solution that users will love.',
  //                   btnText: 'Start Your App Project'
  //               }
  //           }
  //       };

  //       // ================================================================
  //       // RENDER SERVICE CONTENT
  //       // ================================================================
  //       function renderService(serviceId) {
  //           const data = serviceData[serviceId];
  //           if (!data) return;

  //           // Update active tab
  //           document.querySelectorAll('.service-tab').forEach(tab => {
  //               tab.classList.toggle('active', tab.dataset.service === serviceId);
  //           });

  //           // Update breadcrumb
  //           document.getElementById('breadcrumbServiceName').innerHTML = `<i class="fas ${data.icon}"></i> ${data.name}`;

  //           // ---- 1. HERO ----
  //           document.getElementById('heroTag').innerHTML = data.heroTag;
  //           document.getElementById('heroTitle').innerHTML = data.heroTitle;
  //           document.getElementById('heroDesc').textContent = data.heroDesc;
  //           const heroStats = document.getElementById('heroStats');
  //           heroStats.innerHTML = data.heroStats.map(s => `<span>${s}</span>`).join('');

  //           // ---- 2. BENEFITS ----
  //           const benefitsGrid = document.getElementById('benefitsGrid');
  //           benefitsGrid.innerHTML = data.benefits.map(b => `
  //                       <div class="col-md-4">
  //                           <div class="benefit-card">
  //                               <span class="benefit-icon"><i class="fas ${b.icon}" style="color:${b.color};"></i></span>
  //                               <h4>${b.title}</h4>
  //                               <p>${b.desc}</p>
  //                           </div>
  //                       </div>
  //                   `).join('');

  //           // ---- 3. OVERVIEW ----
  //           document.getElementById('overviewImage').src = data.overview.image;
  //           document.getElementById('overviewTitle').textContent = data.overview.title;
  //           document.getElementById('overviewDesc').textContent = data.overview.desc;
  //           document.getElementById('overviewList').innerHTML = data.overview.list.map(item =>
  //               `<li><i class="fas fa-check-circle"></i> ${item}</li>`
  //           ).join('');

  //           // ---- 4. FEATURES ----
  //           const featuresGrid = document.getElementById('featuresGrid');
  //           featuresGrid.innerHTML = data.features.map(f => `
  //                       <div class="col-md-4">
  //                           <div class="feature-card">
  //                               <span class="feature-icon"><i class="fas ${f.icon}"></i></span>
  //                               <h4>${f.title}</h4>
  //                               <p>${f.desc}</p>
  //                           </div>
  //                       </div>
  //                   `).join('');

  //           // ---- 5. PROCESS ----
  //           const processGrid = document.getElementById('processGrid');
  //           processGrid.innerHTML = data.process.map(p => `
  //                       <div class="col-md-4">
  //                           <div class="process-step">
  //                               <span class="step-number">${p.number}</span>
  //                               <div class="step-content">
  //                                   <h4>${p.title}</h4>
  //                                   <p>${p.desc}</p>
  //                               </div>
  //                           </div>
  //                       </div>
  //                   `).join('');

  //           // ---- 6. PORTFOLIO ----
  //           const portfolioGrid = document.getElementById('portfolioGrid');
  //           portfolioGrid.innerHTML = data.portfolio.map(p => `
  //                       <div class="col-md-4">
  //                           <div class="proof-card">
  //                               <img src="${p.image}" alt="${p.title}" />
  //                               <div class="proof-body">
  //                                   <span class="proof-tag">${p.tag}</span>
  //                                   <h4>${p.title}</h4>
  //                                   <p>${p.desc}</p>
  //                               </div>
  //                           </div>
  //                       </div>
  //                   `).join('');

  //           // ---- 7. TECHNOLOGIES ----
  //           const techGrid = document.getElementById('techGrid');
  //           techGrid.innerHTML = data.techs.map(t => `
  //                       <span class="tech-badge-service">
  //                           <i class="${t.icon}" style="color:${t.color};"></i> ${t.name}
  //                       </span>
  //                   `).join('');

  //           // ---- 8. PRICING ----
  //           const pricingGrid = document.getElementById('pricingGrid');
  //           pricingGrid.innerHTML = data.pricing.map((p, index) => `
  //                       <div class="col-md-4">
  //                           <div class="pricing-card ${p.popular ? 'popular' : ''}">
  //                               ${p.popular ? '<span class="popular-badge">Most Popular</span>' : ''}
  //                               <div class="price">${p.price}<span>${p.period}</span></div>
  //                               <h4 style="font-weight:700;color:#0f172a;">${p.title}</h4>
  //                               <p style="color:#64748b;font-size:0.85rem;">${p.desc}</p>
  //                               <ul class="pricing-features">
  //                                   ${p.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
  //                               </ul>
  //                               <button class="btn-pricing ${p.popular ? 'primary' : 'outline'}">${p.btnText}</button>
  //                           </div>
  //                       </div>
  //                   `).join('');

  //           // ---- 9. FAQ ----
  //           const faqContainer = document.getElementById('faqServiceAccordion');
  //           faqContainer.innerHTML = data.faq.map((f, index) => `
  //                       <div class="accordion-item">
  //                           <h2 class="accordion-header">
  //                               <button class="accordion-button ${index > 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#faqS${index}">
  //                                   ${f.q}
  //                               </button>
  //                           </h2>
  //                           <div id="faqS${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" data-bs-parent="#faqServiceAccordion">
  //                               <div class="accordion-body">${f.a}</div>
  //                           </div>
  //                       </div>
  //                   `).join('');

  //           // ---- 10. TESTIMONIALS ----
  //           const testimonialsGrid = document.getElementById('testimonialsGrid');
  //           testimonialsGrid.innerHTML = data.testimonials.map(t => `
  //                       <div class="col-md-4">
  //                           <div class="testimonial-card-service">
  //                               <div class="quote-icon"><i class="fas fa-quote-right"></i></div>
  //                               <p class="testimonial-text">${t.text}</p>
  //                               <div class="rating">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
  //                               <div class="testimonial-author">
  //                                   <div class="avatar">${t.name.split(' ').map(n => n[0]).join('')}</div>
  //                                   <div class="author-info">
  //                                       <div class="name">${t.name}</div>
  //                                       <div class="role">${t.role}</div>
  //                                   </div>
  //                               </div>
  //                           </div>
  //                       </div>
  //                   `).join('');

  //           // ---- 11. CTA ----
  //           document.getElementById('ctaTitle').textContent = data.cta.title;
  //           document.getElementById('ctaDesc').textContent = data.cta.desc;
  //           document.getElementById('ctaBtnText').textContent = data.cta.btnText;
  //       }

        

       

  //       // ================================================================
  //       // INIT — Load Web Development by default
  //       // ================================================================
  //       renderService('web');
})