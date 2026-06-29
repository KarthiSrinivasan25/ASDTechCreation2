
import "./TechnologiesSection.css";
import { useEffect } from "react";
import htmlVideo from "../assets/videos/html.mp4";
import cssVideo from "../assets/videos/css.mp4";
import javascriptVideo from "../assets/videos/javascript.mp4";
import bootstrapVideo from "../assets/videos/bootstrap.mp4";
import phpVideo from "../assets/videos/php.mp4";
import reactVideo from "../assets/videos/react.mp4";
import javaVideo from "../assets/videos/java.mp4";
import androidVideo from "../assets/videos/android.mp4";
import mysqlVideo from "../assets/videos/mysql.mp4";
import springVideo from "../assets/videos/springboot.mp4";
import kotlinVideo from "../assets/videos/kotlin.mp4";
import pythonVideo from "../assets/videos/python.mp4";
import djangoVideo from "../assets/videos/django.mp4";
import flaskVideo from "../assets/videos/flask.mp4";
import firebaseVideo from "../assets/videos/firebase.mp4";


import springBootIcon from "../assets/icons/springboot.png";
import firebaseIcon from "../assets/icons/firebase.png";
import flaskIcon from "../assets/icons/flask.png";
import djangoIcon from "../assets/icons/django.png";
import kotlinIcon from "../assets/icons/kotlin.png";
import mysqlIcon from "../assets/icons/mysql.png";
import pythonIcon from "../assets/icons/python.png";
import javaIcon from "../assets/icons/java.png";


function TechnologiesSection(){
    useEffect(() => {
      const skillsData = [
            { id: 'html', name: 'HTML', sub: 'Markup Language', icon: 'fa-html5', category: 'frontend', hot: false,
                video: htmlVideo },
            { id: 'css', name: 'CSS', sub: 'Styling Language', icon: 'fa-css3-alt', category: 'frontend', hot: false,
                video: cssVideo },
            { id: 'js', name: 'JavaScript', sub: 'Programming Language', icon: 'fa-js', category: 'frontend', hot: true,
                video: javascriptVideo },
            { id: 'bootstrap', name: 'Bootstrap', sub: 'CSS Framework', icon: 'fa-bootstrap', category: 'frontend',
                hot: false, video: bootstrapVideo },
            { id: 'php', name: 'PHP', sub: 'Scripting Language', icon: 'fa-php', category: 'backend', hot: false,
                video: phpVideo },
            { id: 'java', name: 'Java', sub: 'Programming Language', image: javaIcon, category: 'backend', hot: true,
                video: javaVideo },
            { id: 'springboot', name: 'Spring Boot', sub: 'Java Framework', image: springBootIcon, category: 'framework',
                hot: true, video: springVideo },
            { id: 'android', name: 'Android', sub: 'Mobile Development', icon: 'fa-android', category: 'mobile', hot: true,
                video: androidVideo },
            { id: 'kotlin', name: 'Kotlin', sub: 'Android Language', image: kotlinIcon, category: 'mobile', hot: false,
                video: kotlinVideo },
            { id: 'react', name: 'React', sub: 'UI Library', icon: 'fa-react', category: 'frontend', hot: true,
                video: reactVideo },
            { id: 'mysql', name: 'MySQL', sub: 'Relational Database', image: mysqlIcon, category: 'database', hot: false,
                video: mysqlVideo },
            { id: 'firebase', name: 'Firebase', sub: 'Backend-as-a-Service', image: firebaseIcon, category: 'database',
                hot: true, video: firebaseVideo },
            { id: 'python', name: 'Python', sub: 'Programming Language', image: pythonIcon, category: 'backend', hot: true,
                video: pythonVideo },
            { id: 'flask', name: 'Flask', sub: 'Python Framework', image: flaskIcon, category: 'framework', hot: false,
                video: flaskVideo },
            { id: 'django', name: 'Django', sub: 'Python Framework', image: djangoIcon, category: 'framework', hot: false,
                video: djangoVideo }
        ];

        // ================================================================
        // RENDER SKILLS (maintains order)
        // ================================================================
        const grid = document.getElementById('skillsGrid');
        const noResults = document.getElementById('noResults');
        //const skillCount = document.getElementById('skillCount');

        function renderSkills(filter = 'all') {
            grid.innerHTML = '';

            // Filter data (preserving order)
            const filtered = skillsData.filter(skill => {
                return filter === 'all' || skill.category === filter;
            });

            // Update counter
           // skillCount.textContent = filtered.length;

            // if (filtered.length === 0) {
            //     noResults.style.display = 'block';
            //     grid.style.display = 'none';
            //     return;
            // }

            noResults.style.display = 'none';
            grid.style.display = 'grid';

            filtered.forEach(skill => {
                const card = document.createElement('div');
                card.className = 'skill-card';
                card.dataset.skill = skill.id;
                card.innerHTML = `
                    <span class="skill-category-badge">${skill.category}</span>
                    ${skill.hot ? '<span class="hot-badge">🔥 Hot</span>' : ''}
<span class="skill-icon">
    ${
      skill.image
        ? `<img src="${skill.image}" alt="${skill.name}" class="skill-image-icon" />`
        : `<i class="fab ${skill.icon}"></i>`
    }
</span>                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-sub">${skill.sub}</span>
                    <span class="play-indicator"><i class="fas fa-play-circle"></i> Watch</span>
                `;
                card.addEventListener('click', () => openVideoPreview(skill.id));
                grid.appendChild(card);
            });
        }

        // ================================================================
        // FILTER
        // ================================================================
        const filterPills = document.querySelectorAll('.filter-pill');
        let currentFilter = 'all';

        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                filterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                currentFilter = pill.dataset.filter;
                renderSkills(currentFilter);
            });
        });

        // ================================================================
        // RESET VIEW
        // ================================================================
        // document.getElementById('resetViewBtn').addEventListener('click', () => {
        //     // Reset filter to 'All'
        //     filterPills.forEach(p => p.classList.remove('active'));
        //     document.querySelector('.filter-pill[data-filter="all"]').classList.add('active');
        //     currentFilter = 'all';
        //     renderSkills('all');

        //     // Scroll to top of grid
        //     document.querySelector('.skills-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        // });

        // ================================================================
        // VIDEO PREVIEW
        // ================================================================
        const overlay = document.getElementById('videoOverlay');
        const video = document.getElementById('skillVideo');
        const videoPlaceholder = document.getElementById('videoPlaceholder');
        const progressBar = document.getElementById('progressBar');
        const videoTime = document.getElementById('videoTime');
        const videoIcon = document.getElementById('videoIcon');
        const videoName = document.getElementById('videoName');
        const videoSub = document.getElementById('videoSub');
        const closeBtn = document.getElementById('videoClose');
        const muteBtn = document.getElementById('videoMuteBtn');
        const replayBtn = document.getElementById('videoReplayBtn');
        const fullscreenBtn = document.getElementById('videoFullscreenBtn');
        const countdownDisplay = document.getElementById('countdownDisplay');
        const countdownCircle = document.getElementById('countdownCircle');

        let currentSkill = null;
        let autoCloseTimer = null;
        let progressInterval = null;
        let countdownInterval = null;
        let remainingSeconds = 11;
        const MAX_PLAY_TIME = 11;
        let isMuted = true;
        let videoLimiterInterval = null;
        

        function openVideoPreview(skillId) {
    const skill = skillsData.find(s => s.id === skillId);
    if (!skill) return;

    currentSkill = skillId;

    // reset old timers (VERY IMPORTANT)
    clearInterval(progressInterval);
    clearInterval(countdownInterval);
    clearInterval(videoLimiterInterval);

    video.currentTime = 0; // 🔥 always start fresh

    videoIcon.innerHTML = skill.image
  ? `<img src="${skill.image}" alt="${skill.name}" class="popup-tech-icon" />`
  : `<i class="fab ${skill.icon}"></i>`;
    videoName.textContent = skill.name;
    videoSub.textContent = skill.sub;

    video.src = skill.video;
    video.load();

    videoPlaceholder.style.display = 'flex';
    progressBar.style.width = '0%';
    videoTime.textContent = '0:00 / 0:00';

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // 🔥 ALWAYS RESET TIMER
    remainingSeconds = MAX_PLAY_TIME;

    countdownDisplay.textContent = remainingSeconds + 's';
    countdownCircle.style.strokeDashoffset = '100';

    setTimeout(() => {
        video.play().catch(() => {});
        videoPlaceholder.style.display = 'none';
    }, 500);

    // startProgressTracking();
    // startCountdown();

    let timersStarted = false;

video.onplaying = () => {
    if (timersStarted) return; // prevent multiple triggers
    timersStarted = true;

    startProgressTracking();
    startCountdown();

    videoLimiterInterval = setInterval(() => {
        if (video.currentTime >= MAX_PLAY_TIME) {
            closeVideoPreview();
        }
    }, 200);
};

    // 🔥 force stop at 15s
    videoLimiterInterval = setInterval(() => {
        if (video.currentTime >= MAX_PLAY_TIME) {
            closeVideoPreview();
        }
    }, 200);
}
        function startCountdown() {
            clearInterval(countdownInterval);
            const total = remainingSeconds;

            countdownInterval = setInterval(() => {
                remainingSeconds--;
                if (remainingSeconds <= 0) {
                    clearInterval(countdownInterval);
                    closeVideoPreview();
                    return;
                }
                countdownDisplay.textContent = remainingSeconds + 's';
                const progress = ((total - remainingSeconds) / total) * 100;
                countdownCircle.style.strokeDashoffset = 100 - progress;
            }, 1000);
        }

        function startProgressTracking() {
            clearInterval(progressInterval);
            progressInterval = setInterval(() => {
                if (video.duration && !isNaN(video.duration)) {
                    const progress = (video.currentTime / video.duration) * 100;
                    progressBar.style.width = Math.min(progress, 100) + '%';
                    videoTime.textContent = formatTime(video.currentTime) + ' / ' + formatTime(video.duration);
                }
            }, 100);
        }

        function formatTime(seconds) {
            if (!seconds || isNaN(seconds)) return '0:00';
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return mins + ':' + (secs < 10 ? '0' : '') + secs;
        }

        function closeVideoPreview() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';

    video.pause();
    video.currentTime = 0;

    clearInterval(progressInterval);
    clearInterval(countdownInterval);
    clearInterval(videoLimiterInterval);

    progressBar.style.width = '0%';
}

        // ===== VIDEO EVENTS =====
        video.addEventListener('loadedmetadata', () => {
            videoTime.textContent = '0:00 / ' + formatTime(video.duration);
        });

        video.addEventListener('ended', closeVideoPreview);

        // ===== CONTROLS =====
        muteBtn.addEventListener('click', () => {
            isMuted = !isMuted;
            video.muted = isMuted;
            muteBtn.innerHTML = isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
        });

        replayBtn.addEventListener('click', () => {
            video.currentTime = 0;
            video.play();
        });

        fullscreenBtn.addEventListener('click', () => {
            const container = document.querySelector('.video-preview-container');
            if (!document.fullscreenElement) {
                container.requestFullscreen().catch(() => {});
            } else {
                document.exitFullscreen();
            }
        });

        // ===== CLOSE HANDLERS =====
        closeBtn.addEventListener('click', closeVideoPreview);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeVideoPreview();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('active')) {
                closeVideoPreview();
            }
            if (e.key === ' ' && overlay.classList.contains('active')) {
                e.preventDefault();
                if (video.paused) video.play();
                else video.pause();
            }
        });

        // ================================================================
        // INIT
        // ================================================================
        renderSkills();
  video.addEventListener('dragstart', (e) => e.preventDefault());

    }, []);
 return(
   <>
   <section className="tech-section-interactive">
        <div className="container">
            <div className="text-center mb-4">
                <span className="section-badge"><i className="fas fa-microchip me-1"></i> Technologies</span>
                <h2 className="section-title">
  Technologies Powering Our Solutions
</h2>
                <p className="text-secondary">
                    Discover the cutting-edge technologies behind our successful projects and solutions.
                </p>
            </div>

           
            <div className="skill-controls">
                {/* <div className="skill-counter">
                    <i className="fas fa-code"></i>
                    <span>Skills:</span>
                    <span className="count-number" id="skillCount">15</span>
                </div>

                <button className="reset-btn" id="resetViewBtn">
                    <i className="fas fa-sync-alt"></i> Reset View
                </button> */}

                <div className="filter-pills" id="filterPills">
                    <span className="filter-pill active" data-filter="all"><i className="fas fa-th-large"></i> All</span>
                    <span className="filter-pill" data-filter="frontend"><i className="fas fa-laptop-code"></i> Frontend</span>
                    <span className="filter-pill" data-filter="backend"><i className="fas fa-server"></i> Backend</span>
                    <span className="filter-pill" data-filter="mobile"><i className="fas fa-mobile-alt"></i> Mobile</span>
                    <span className="filter-pill" data-filter="database"><i className="fas fa-database"></i> Database</span>
                    <span className="filter-pill" data-filter="framework"><i className="fas fa-layer-group"></i> Framework</span>
                </div>
            </div>

            <div className="skills-grid" id="skillsGrid"></div>

            <div className="no-results" id="noResults">
                <i className="fas fa-search"></i>
                <p>No skills found matching your filter.</p>
            </div>
        </div>
    </section>

{/* Video show */}

  <div className="video-preview-overlay" id="videoOverlay">
        <div className="video-preview-container">
            <div className="video-preview-header">
                <div className="tech-info">
                    <span className="icon" id="videoIcon"><i className="fab fa-react"></i></span>
                    <div>
                        <div className="name" id="videoName">React</div>
                        <div className="sub" id="videoSub">UI Library</div>
                    </div>
                </div>
                <button className="video-preview-close" id="videoClose"><i className="fas fa-times"></i></button>
            </div>

            <div className="video-wrapper">
                <video id="skillVideo" playsinline muted>
                    <source src="" type="video/mp4" />
                </video>
                <div className="video-placeholder" id="videoPlaceholder">
                    <i className="fas fa-play-circle"></i>
                    <span>Loading demo video...</span>
                </div>
                <div className="autoplay-badge">
                    <i className="fas fa-clock"></i>
                    <span>Auto-closes in</span>
                    <span className="countdown" id="countdownDisplay">10s</span>
                </div>
                <div className="countdown-ring">
                    <svg viewBox="0 0 40 40" width="40" height="40">
                        <circle className="bg" cx="20" cy="20" r="17" />
                        <circle className="progress" id="countdownCircle" cx="20" cy="20" r="17" />
                    </svg>
                </div>
            </div>

            <div className="video-progress">
                <div className="progress-bar" id="progressBar"></div>
            </div>

            <div className="video-controls">
                <span className="time" id="videoTime">0:00 / 0:00</span>
                <div>
                    <button className="controls-btn" id="videoMuteBtn"><i className="fas fa-volume-mute"></i></button>
                    <button className="controls-btn" id="videoReplayBtn"><i className="fas fa-redo"></i></button>
                    <button className="controls-btn" id="videoFullscreenBtn"><i className="fas fa-expand"></i></button>
                </div>
            </div>
        </div>
    </div>

  </>
 )
}

export default TechnologiesSection;