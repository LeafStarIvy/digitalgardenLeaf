/**
 * Digital Garden Fullscreen Note Functionality
 * Provides immersive reading experience with smooth animations
 */

class FullscreenNote {
    constructor() {
        this.isFullscreen = false;
        this.content = null;
        this.toggleButton = null;
        this.readingProgress = null;
        this.shortcutsHint = null;
        this.focusMode = false;
        
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.content = document.querySelector('.content');
        if (!this.content) return;

        this.createToggleButton();
        this.createReadingProgress();
        this.createShortcutsHint();
        this.bindEvents();
        
        // Check for URL parameter to auto-enter fullscreen
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('fullscreen') === 'true') {
            setTimeout(() => this.enterFullscreen(), 100);
        }
    }

    createToggleButton() {
        this.toggleButton = document.createElement('button');
        this.toggleButton.className = 'fullscreen-toggle';
        this.toggleButton.innerHTML = `
            <svg class="fullscreen-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M16 21h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
            </svg>
            <span class="fullscreen-text">Fullscreen</span>
        `;
        this.toggleButton.title = 'Toggle fullscreen mode (F)';
        document.body.appendChild(this.toggleButton);
    }

    createReadingProgress() {
        this.readingProgress = document.createElement('div');
        this.readingProgress.className = 'reading-progress';
        document.body.appendChild(this.readingProgress);
    }

    createShortcutsHint() {
        this.shortcutsHint = document.createElement('div');
        this.shortcutsHint.className = 'fullscreen-shortcuts';
        this.shortcutsHint.innerHTML = `
            <strong>F</strong> Fullscreen • <strong>Esc</strong> Exit • <strong>Space</strong> Focus Mode
        `;
        document.body.appendChild(this.shortcutsHint);
    }

    bindEvents() {
        // Toggle button click
        this.toggleButton.addEventListener('click', () => this.toggle());

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ignore if user is typing in an input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            switch(e.key) {
                case 'f':
                case 'F':
                    if (!e.ctrlKey && !e.metaKey) {
                        e.preventDefault();
                        this.toggle();
                    }
                    break;
                case 'Escape':
                    if (this.isFullscreen) {
                        e.preventDefault();
                        this.exitFullscreen();
                    }
                    break;
                case ' ':
                    if (this.isFullscreen) {
                        e.preventDefault();
                        this.toggleFocusMode();
                    }
                    break;
            }
        });

        // Reading progress on scroll
        if (this.content) {
            document.addEventListener('scroll', () => this.updateReadingProgress());
        }

        // Show shortcuts hint when entering fullscreen
        document.addEventListener('fullscreenEnter', () => {
            this.shortcutsHint.classList.add('visible');
            setTimeout(() => {
                this.shortcutsHint.classList.remove('visible');
            }, 3000);
        });

        // Window resize handling
        window.addEventListener('resize', () => {
            if (this.isFullscreen) {
                this.optimizeForViewport();
            }
        });

        // Handle browser back/forward
        window.addEventListener('popstate', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const shouldBeFullscreen = urlParams.get('fullscreen') === 'true';
            
            if (shouldBeFullscreen && !this.isFullscreen) {
                this.enterFullscreen(false); // Don't update URL again
            } else if (!shouldBeFullscreen && this.isFullscreen) {
                this.exitFullscreen(false); // Don't update URL again
            }
        });
    }

    toggle() {
        if (this.isFullscreen) {
            this.exitFullscreen();
        } else {
            this.enterFullscreen();
        }
    }

    enterFullscreen(updateUrl = true) {
        if (this.isFullscreen || !this.content) return;

        this.isFullscreen = true;
        
        // Add classes
        this.content.classList.add('fullscreen-mode');
        document.body.classList.add('fullscreen-active');
        this.toggleButton.classList.add('fullscreen-active');
        
        // Update button
        this.updateToggleButton();
        
        // Optimize for current viewport
        this.optimizeForViewport();
        
        // Update URL
        if (updateUrl) {
            const url = new URL(window.location);
            url.searchParams.set('fullscreen', 'true');
            window.history.pushState({}, '', url);
        }
        
        // Smooth scroll to top
        this.content.scrollTop = 0;
        
        // Dispatch custom event
        document.dispatchEvent(new CustomEvent('fullscreenEnter'));
        
        // Focus management
        this.content.setAttribute('tabindex', '-1');
        this.content.focus();
    }

    exitFullscreen(updateUrl = true) {
        if (!this.isFullscreen) return;

        // Add exit animation class
        this.content.classList.add('fullscreen-exiting');
        
        setTimeout(() => {
            this.isFullscreen = false;
            this.focusMode = false;
            
            // Remove classes
            this.content.classList.remove('fullscreen-mode', 'fullscreen-exiting', 'focus-mode');
            document.body.classList.remove('fullscreen-active');
            this.toggleButton.classList.remove('fullscreen-active');
            
            // Update button
            this.updateToggleButton();
            
            // Update URL
            if (updateUrl) {
                const url = new URL(window.location);
                url.searchParams.delete('fullscreen');
                window.history.pushState({}, '', url);
            }
            
            // Dispatch custom event
            document.dispatchEvent(new CustomEvent('fullscreenExit'));
            
            // Restore focus
            this.content.removeAttribute('tabindex');
        }, 300);
    }

    toggleFocusMode() {
        if (!this.isFullscreen) return;
        
        this.focusMode = !this.focusMode;
        
        if (this.focusMode) {
            this.content.classList.add('focus-mode');
        } else {
            this.content.classList.remove('focus-mode');
        }
    }

    updateToggleButton() {
        const icon = this.toggleButton.querySelector('.fullscreen-icon');
        const text = this.toggleButton.querySelector('.fullscreen-text');
        
        if (this.isFullscreen) {
            icon.innerHTML = `<path d="M8 3v3a2 2 0 0 1-2 2H3M18 3v3a2 2 0 0 0 2 2h3M8 21v-3a2 2 0 0 1-2-2H3M18 21v-3a2 2 0 0 0 2-2h3"/>`;
            text.textContent = 'Exit';
            this.toggleButton.title = 'Exit fullscreen (Esc)';
        } else {
            icon.innerHTML = `<path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M16 21h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>`;
            text.textContent = 'Fullscreen';
            this.toggleButton.title = 'Toggle fullscreen mode (F)';
        }
    }

    optimizeForViewport() {
        if (!this.isFullscreen) return;
        
        const viewportWidth = window.innerWidth;
        const content = this.content;
        
        // Create content wrapper for column layout if it doesn't exist
        let contentWrapper = content.querySelector('.content-wrapper');
        if (viewportWidth >= 1600 && !contentWrapper) {
            contentWrapper = document.createElement('div');
            contentWrapper.className = 'content-wrapper';
            
            // Move all content except header into wrapper
            const header = content.querySelector('header');
            const children = Array.from(content.children).filter(child => child !== header);
            
            children.forEach(child => {
                if (!child.classList.contains('fullscreen-toggle') && 
                    !child.classList.contains('reading-progress') && 
                    !child.classList.contains('fullscreen-shortcuts')) {
                    contentWrapper.appendChild(child);
                }
            });
            
            content.appendChild(contentWrapper);
        } else if (viewportWidth < 1600 && contentWrapper) {
            // Remove wrapper for smaller screens
            const children = Array.from(contentWrapper.children);
            children.forEach(child => content.appendChild(child));
            contentWrapper.remove();
        }
    }

    updateReadingProgress() {
        if (!this.isFullscreen || !this.content) return;
        
        const scrollTop = this.content.scrollTop;
        const scrollHeight = this.content.scrollHeight - this.content.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        
        this.readingProgress.style.width = `${Math.min(progress, 100)}%`;
    }

    // Public API methods
    getState() {
        return {
            isFullscreen: this.isFullscreen,
            focusMode: this.focusMode
        };
    }

    // Method to programmatically enter fullscreen (for external scripts)
    enter() {
        this.enterFullscreen();
    }

    // Method to programmatically exit fullscreen (for external scripts)
    exit() {
        this.exitFullscreen();
    }
}

// Initialize when script loads
const fullscreenNote = new FullscreenNote();

// Expose to global scope for external access
window.FullscreenNote = fullscreenNote;