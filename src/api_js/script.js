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
    results: [
      { number: "200K+", label: "Monthly Active Users" },
      { number: "3x", label: "Faster Page Load" },
      { number: "85%", label: "Customer Satisfaction" },
      { number: "60%", label: "Increase in Online Orders" },
    ],
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
    results: [
      { number: "+310%", label: "Revenue Tracked Digitally" },
      { number: "0", label: "Data Loss Incidents" },
      { number: "100%", label: "Real-time Sync" },
      { number: "2min", label: "Average Entry Time" },
    ],
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
    results: [
      { number: "500+", label: "Teams Using App" },
      { number: "70%", label: "Faster Order Processing" },
      { number: "4.7★", label: "App Store Rating" },
      { number: "40%", label: "Reduction in Call Volume" },
    ],
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
    results: [
      { number: "100%", label: "Paperless Operations" },
      { number: "35%", label: "Improvement in Yield Tracking" },
      { number: "0", label: "Lost Records" },
      { number: "2hr", label: "Saved Daily on Admin" },
    ],
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

