import './GallerySection.css'
import { useEffect } from "react";


function GallerySection() {

    useEffect(() => {
    // ================================================================
        // GALLERY DATA
        // ================================================================
        const images = [
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', title: 'FinTech Dashboard',
                tag: 'Web App' },
            { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', title: 'Analytics Platform',
                tag: 'Data Viz' },
            { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop', title: 'EcoStore Checkout',
                tag: 'E-commerce' },
            { src: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop', title: 'Mobile Wallet',
                tag: 'Mobile App' },
            { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop', title: 'HealthTrack UI',
                tag: 'HealthTech' },
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', title: 'TaskFlow App',
                tag: 'Productivity' },
            { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', title: 'EventHub Dashboard',
                tag: 'SaaS' },
            { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop', title: 'NeoBank Mobile',
                tag: 'Fintech' },
            { src: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop', title: 'Analytics Pro',
                tag: 'Data' },
            { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop', title: 'EcoStore Admin',
                tag: 'E-commerce' },
        ];

        // ================================================================
        // RENDER GRID (only once)
        // ================================================================
        const grid = document.getElementById('galleryGrid');
        const spanClasses = ['', 'span-2', 'span-w2', 'span-2x', ''];
        let allItems = [];

        function renderGrid() {
            grid.innerHTML = '';
            allItems = [];
            images.forEach((item, i) => {
                const div = document.createElement('div');
                div.className = `gallery-item-advanced ${spanClasses[i % spanClasses.length]}`;
                div.setAttribute('data-index', i);
                div.innerHTML = `
                    <img src="${item.src}" alt="${item.title}" loading="lazy" />
                    <div class="gallery-item-overlay">
                        <h5>${item.title}</h5>
                        <p>${item.tag}</p>
                        <span class="gallery-tag">${item.tag}</span>
                    </div>
                    <div class="drag-handle"><i class="fas fa-wand-magic-sparkles"></i> Drag</div>
                `;
                div.addEventListener('click', (e) => {
                    if (isDraggingGrid) return;
                    openLightbox(i);
                });
                div.addEventListener('mousedown', (e) => startGridDrag(e, i, div));
                div.addEventListener('touchstart', (e) => startGridDrag(e, i, div), { passive: false });
                grid.appendChild(div);
                allItems.push(div);
            });
        }

        // ================================================================
        // UPDATE ONLY TWO SWAPPED ITEMS (no full re-render)
        // ================================================================
        function swapItems(indexA, indexB) {
            // Swap in data
            [images[indexA], images[indexB]] = [images[indexB], images[indexA]];

            // Get the two DOM elements
            const itemA = allItems[indexA];
            const itemB = allItems[indexB];

            // Update data-index attributes
            itemA.setAttribute('data-index', indexA);
            itemB.setAttribute('data-index', indexB);

            // Swap images
            const imgA = itemA.querySelector('img');
            const imgB = itemB.querySelector('img');
            const tempSrc = imgA.src;
            const tempAlt = imgA.alt;
            imgA.src = imgB.src;
            imgA.alt = imgB.alt;
            imgB.src = tempSrc;
            imgB.alt = tempAlt;

            // Swap overlay content
            const overlayA = itemA.querySelector('.gallery-item-overlay');
            const overlayB = itemB.querySelector('.gallery-item-overlay');
            const titleA = overlayA.querySelector('h5');
            const titleB = overlayB.querySelector('h5');
            const tagA = overlayA.querySelector('p');
            const tagB = overlayB.querySelector('p');
            const tagSpanA = overlayA.querySelector('.gallery-tag');
            const tagSpanB = overlayB.querySelector('.gallery-tag');

            const tempTitle = titleA.textContent;
            const tempTag = tagA.textContent;
            const tempSpan = tagSpanA.textContent;

            titleA.textContent = titleB.textContent;
            tagA.textContent = tagB.textContent;
            tagSpanA.textContent = tagSpanB.textContent;

            titleB.textContent = tempTitle;
            tagB.textContent = tempTag;
            tagSpanB.textContent = tempSpan;

            // Swap span classes for masonry layout
            const baseClass = 'gallery-item-advanced';
            const spanA = itemA.className.replace(baseClass, '').trim();
            const spanB = itemB.className.replace(baseClass, '').trim();
            itemA.className = baseClass + ' ' + spanB;
            itemB.className = baseClass + ' ' + spanA;
        }

        // ================================================================
        // DRAG & SWAP LOGIC
        // ================================================================
        let isDraggingGrid = false;
        let dragStartIndex = null;
        let dragElement = null;
        let ghostElement = null;
        let offsetX = 0;
        let offsetY = 0;
        let currentHoverIndex = null;
        let swapTimeout = null;

        function startGridDrag(e, index, element) {
            const target = e.target;
            if (target.closest('.gallery-item-overlay')) return;
            e.preventDefault();

            const pos = getEventPos(e);
            const rect = element.getBoundingClientRect();
            offsetX = pos.x - rect.left;
            offsetY = pos.y - rect.top;

            dragStartIndex = index;
            dragElement = element;

            // Create magic ghost
            ghostElement = document.createElement('div');
            ghostElement.className = 'drag-ghost';
            ghostElement.style.width = rect.width + 'px';
            ghostElement.style.height = rect.height + 'px';
            ghostElement.style.left = (pos.x - offsetX) + 'px';
            ghostElement.style.top = (pos.y - offsetY) + 'px';
            ghostElement.innerHTML = `<img src="${images[index].src}" alt="${images[index].title}" />`;
            document.body.appendChild(ghostElement);

            element.classList.add('dragging');

            isDraggingGrid = true;
            currentHoverIndex = null;

            window.addEventListener('mousemove', onGridDragMove);
            window.addEventListener('touchmove', onGridDragMove, { passive: false });
            window.addEventListener('mouseup', onGridDragEnd);
            window.addEventListener('touchend', onGridDragEnd);
        }

        function onGridDragMove(e) {
            if (!isDraggingGrid || !ghostElement) return;
            e.preventDefault();
            const pos = getEventPos(e);
            ghostElement.style.left = (pos.x - offsetX) + 'px';
            ghostElement.style.top = (pos.y - offsetY) + 'px';

            let newHoverIndex = null;
            allItems.forEach((item) => {
                item.classList.remove('swap-ready');
                if (item === dragElement) return;
                const rect = item.getBoundingClientRect();
                if (pos.x >= rect.left && pos.x <= rect.right &&
                    pos.y >= rect.top && pos.y <= rect.bottom) {
                    const index = parseInt(item.getAttribute('data-index'));
                    if (index !== dragStartIndex) {
                        newHoverIndex = index;
                        item.classList.add('swap-ready');
                    }
                }
            });

            if (newHoverIndex !== null && newHoverIndex !== currentHoverIndex) {
                currentHoverIndex = newHoverIndex;
                allItems.forEach((item) => {
                    const idx = parseInt(item.getAttribute('data-index'));
                    if (idx === currentHoverIndex) {
                        item.classList.add('swap-ready');
                    } else {
                        item.classList.remove('swap-ready');
                    }
                });
            }
        }

        function onGridDragEnd(e) {
            if (!isDraggingGrid) return;
            isDraggingGrid = false;

            if (ghostElement) {
                ghostElement.remove();
                ghostElement = null;
            }

            const pos = getEventPos(e);
            let dropIndex = null;

            allItems.forEach((item) => {
                item.classList.remove('swap-ready');
                if (item === dragElement) return;
                const rect = item.getBoundingClientRect();
                if (pos.x >= rect.left && pos.x <= rect.right &&
                    pos.y >= rect.top && pos.y <= rect.bottom) {
                    dropIndex = parseInt(item.getAttribute('data-index'));
                }
            });

            if (dragElement) {
                dragElement.classList.remove('dragging');
            }

            // Perform MAGIC SWAP on only the two items
            if (dropIndex !== null && dropIndex !== dragStartIndex) {
                const fromIndex = dragStartIndex;
                const toIndex = dropIndex;

                // Get both elements
                const fromItem = allItems[fromIndex];
                const toItem = allItems[toIndex];

                // Animate both with magic swap
                if (fromItem) {
                    fromItem.classList.add('swap-animate');
                    spawnSwapParticles(fromItem);
                }
                if (toItem) {
                    toItem.classList.add('swap-animate');
                    spawnSwapParticles(toItem);
                }

                // Swap the data and DOM (without full re-render)
                swapItems(fromIndex, toIndex);

                // Remove animation classes after completion
                clearTimeout(swapTimeout);
                swapTimeout = setTimeout(() => {
                    if (fromItem) fromItem.classList.remove('swap-animate');
                    if (toItem) toItem.classList.remove('swap-animate');
                }, 800);
            } else {
                if (dragElement) {
                    dragElement.classList.remove('dragging');
                }
            }

            dragElement = null;
            dragStartIndex = null;
            currentHoverIndex = null;

            window.removeEventListener('mousemove', onGridDragMove);
            window.removeEventListener('touchmove', onGridDragMove);
            window.removeEventListener('mouseup', onGridDragEnd);
            window.removeEventListener('touchend', onGridDragEnd);
        }

        // ================================================================
        // ✨ SPAWN SWAP PARTICLES
        // ================================================================
        function spawnSwapParticles(element) {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const container = document.createElement('div');
            container.className = 'swap-particles';
            container.style.left = centerX + 'px';
            container.style.top = centerY + 'px';
            container.style.width = '0px';
            container.style.height = '0px';
            document.body.appendChild(container);

            const colors = ['#4361ee', '#4cc9f0', '#f72585', '#ffd700', '#a855f7', '#06b6d4'];
            const numParticles = 24;

            for (let i = 0; i < numParticles; i++) {
                const particle = document.createElement('div');
                particle.className = 'swap-particle';
                const size = 4 + Math.random() * 8;
                const angle = Math.random() * Math.PI * 2;
                const distance = 60 + Math.random() * 120;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                particle.style.setProperty('--tx', tx + 'px');
                particle.style.setProperty('--ty', ty + 'px');
                particle.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}80`;
                container.appendChild(particle);
            }

            setTimeout(() => {
                container.remove();
            }, 1000);
        }

        // ================================================================
        // LIGHTBOX
        // ================================================================
        const lightbox = document.getElementById('lightboxDrag');
        const track = document.getElementById('lightboxTrack');
        const dots = document.getElementById('lightboxDots');
        const counter = document.getElementById('lightboxCounterDrag');
        const closeBtn = document.getElementById('lightboxCloseDrag');
        const wrap = document.getElementById('lightboxTrackWrap');

        let currentIndex = 0;
        let isDraggingLightbox = false;
        let startXLightbox = 0;
        let currentTranslateLightbox = 0;
        let prevTranslateLightbox = 0;

        function buildLightbox(index) {
            track.innerHTML = '';
            images.forEach((img, i) => {
                const slide = document.createElement('div');
                slide.className = 'lightbox-slide';
                slide.innerHTML = `<img src="${img.src}" alt="${img.title}" />`;
                track.appendChild(slide);
            });
            dots.innerHTML = '';
            images.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = `lightbox-dot ${i === index ? 'active-dot' : ''}`;
                dot.addEventListener('click', () => goToLightbox(i));
                dots.appendChild(dot);
            });
            updateLightboxCounter(index);
            setLightboxPosition(index, false);
        }

        function setLightboxPosition(index, animate = true) {
            const slideWidth = wrap.clientWidth;
            const newTranslate = -index * slideWidth;
            track.style.transition = animate ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none';
            track.style.transform = `translateX(${newTranslate}px)`;
            currentTranslateLightbox = newTranslate;
            prevTranslateLightbox = newTranslate;
        }

        function updateLightboxCounter(index) {
            counter.textContent = `${index + 1} / ${images.length}`;
            document.querySelectorAll('.lightbox-dot').forEach((dot, i) => {
                dot.classList.toggle('active-dot', i === index);
            });
        }

        function goToLightbox(index) {
            currentIndex = index;
            setLightboxPosition(index, true);
            updateLightboxCounter(index);
        }

        function openLightbox(index) {
            currentIndex = index;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            buildLightbox(index);
            setTimeout(() => setLightboxPosition(index, false), 50);
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Lightbox drag
        function onLightboxDragStart(e) {
            isDraggingLightbox = true;
            startXLightbox = getEventPos(e).x;
            track.style.transition = 'none';
            const style = window.getComputedStyle(track);
            const matrix = new WebKitCSSMatrix(style.transform);
            currentTranslateLightbox = matrix.m41 || 0;
            prevTranslateLightbox = currentTranslateLightbox;
            lightbox.style.cursor = 'grabbing';
        }

        function onLightboxDragMove(e) {
            if (!isDraggingLightbox) return;
            e.preventDefault();
            const currentX = getEventPos(e).x;
            const diff = currentX - startXLightbox;
            const slideWidth = wrap.clientWidth;
            const maxTranslate = 0;
            const minTranslate = -(images.length - 1) * slideWidth;
            let newTranslate = prevTranslateLightbox + diff;
            if (newTranslate > maxTranslate) newTranslate = maxTranslate - (newTranslate - maxTranslate) * 0.3;
            if (newTranslate < minTranslate) newTranslate = minTranslate - (newTranslate - minTranslate) * 0.3;
            track.style.transform = `translateX(${newTranslate}px)`;
            currentTranslateLightbox = newTranslate;
        }

        function onLightboxDragEnd(e) {
            if (!isDraggingLightbox) return;
            isDraggingLightbox = false;
            lightbox.style.cursor = 'grab';
            const slideWidth = wrap.clientWidth;
            const totalSlides = images.length;
            let targetIndex = Math.round(-currentTranslateLightbox / slideWidth);
            targetIndex = Math.max(0, Math.min(targetIndex, totalSlides - 1));
            const offset = -currentTranslateLightbox - targetIndex * slideWidth;
            if (Math.abs(offset) > slideWidth * 0.3) {
                if (offset > 0) targetIndex = Math.min(targetIndex + 1, totalSlides - 1);
                else targetIndex = Math.max(targetIndex - 1, 0);
            }
            goToLightbox(targetIndex);
            currentIndex = targetIndex;
        }

        wrap.addEventListener('mousedown', onLightboxDragStart);
        window.addEventListener('mousemove', onLightboxDragMove);
        window.addEventListener('mouseup', onLightboxDragEnd);
        wrap.addEventListener('touchstart', onLightboxDragStart, { passive: true });
        window.addEventListener('touchmove', onLightboxDragMove, { passive: false });
        window.addEventListener('touchend', onLightboxDragEnd, { passive: true });

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') goToLightbox(Math.max(0, currentIndex - 1));
            if (e.key === 'ArrowRight') goToLightbox(Math.min(images.length - 1, currentIndex + 1));
        });

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (lightbox.classList.contains('active')) {
                    setLightboxPosition(currentIndex, false);
                }
            }, 200);
        });

        // ================================================================
        // UTILITY
        // ================================================================
        function getEventPos(e) {
            if (e.touches) {
                return { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
            return { x: e.clientX, y: e.clientY };
        }

        // ================================================================
        // INIT
        // ================================================================
        renderGrid();

       

        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('dragstart', (e) => e.preventDefault());
        });
  }, []);

    return (
        <>
            <section className="project-gallery-advanced">

                <div className="magic-orb orb-1"></div>
                <div className="magic-orb orb-2"></div>
                <div className="magic-orb orb-3"></div>
                <div className="magic-orb orb-4"></div>


                <div className="magic-sparkles">
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                    <div className="sparkle"></div>
                </div>

                <div className="container">
                    <div className="text-center mb-5">
                        <span className="section-badge"><i className="fas fa-images me-1"></i> Project Gallery</span>
                        <h2 className="section-title">UI Showcase</h2>
                        <p className="text-secondary">A glimpse of our design quality across desktop and mobile devices.</p>
                    </div>
                    <div className="gallery-grid-advanced" id="galleryGrid"></div>
                </div>
            </section>


            <div className="lightbox-drag" id="lightboxDrag">
                <button className="lightbox-close-drag" id="lightboxCloseDrag"><i className="fas fa-times"></i></button>
                <div className="lightbox-track-wrap" id="lightboxTrackWrap">
                    <div className="lightbox-track" id="lightboxTrack"></div>
                </div>
                <div className="lightbox-dots" id="lightboxDots"></div>
                <div className="lightbox-counter-drag" id="lightboxCounterDrag">1 / 10</div>
            </div>
        </>
    )
}

export default GallerySection