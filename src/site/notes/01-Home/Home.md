---
{"dg-publish":true,"permalink":"/01-home/home/","tags":["dashboard","home","gardenEntry"],"noteIcon":"","created":"2025-08-28T23:54:20.501+02:00","updated":"2025-09-11T16:52:11.433+02:00"}
---

#  ✨Main Page✨

> [!INFO]  
> Welcome to my **Personal Vault**—this is the place where I store all information I collect and preserve. Things could get eddited or dissapear, this is for personal storage and for others too see and look into. I hope you find something that interests you or that you enjoy. 

---

[[06-Streams/signals/Music Artist Dashboard\|Music Artist Dashboard]]

[[05-Studio/showcases/Me\|Me]]

[[05-Studio/showcases/Room Design Display\|Room Design Display]]


# Flash Card System Implementation Guide

## 📁 File Structure Setup

First, create these folders in your Obsidian vault:

```
your-vault/
├── assets/
│   ├── artists/
│   ├── playlists/
│   ├── categories/
│   └── icons/
└── pages/
    ├── artists.md
    ├── playlists.md
    └── navigation.md
```

## 🖼️ Image Setup

Save images in your `assets` folder. The Digital Garden plugin will automatically sync these to GitHub and make them accessible via URLs like:

- `https://yourusername.github.io/your-repo/assets/artists/artist-name.jpg`
- `https://yourusername.github.io/your-repo/assets/playlists/playlist-cover.jpg`

## 🎯 Basic Usage Examples

### 1. Artists Page (3 columns)


<!-- In your artists.md file -->
<div class="flash-container cols-3">
    
    <!-- Artist Card 1 -->
    <a href="[[Artist - Taylor Swift\|Artist - Taylor Swift]]" class="flash-card artist-card accent-purple shimmer">
        <img src="assets/artists/taylor-swift.jpg" alt="Taylor Swift" class="card-image">
        <div class="card-content">
            <h3 class="card-title">Taylor Swift</h3>
            <p class="card-subtitle">Pop, Country</p>
            <div class="card-tags">
                <span class="tag">Grammy Winner</span>
                <span class="tag">Songwriter</span>
            </div>
        </div>
        <div class="card-badge">⭐</div>
    </a>

    <!-- Artist Card 2 -->
    <a href="[[Artist - The Weeknd\|Artist - The Weeknd]]" class="flash-card artist-card accent-red glow">
        <img src="assets/artists/the-weeknd.jpg" alt="The Weeknd" class="card-image">
        <div class="card-content">
            <h3 class="card-title">The Weeknd</h3>
            <p class="card-subtitle">R&B, Pop</p>
            <div class="card-tags">
                <span class="tag">Multi-Platinum</span>
            </div>
        </div>
    </a>

    <!-- Artist Card 3 -->
    <a href="[[Artist - Daft Punk\|Artist - Daft Punk]]" class="flash-card artist-card accent-gold frosted">
        <img src="assets/artists/daft-punk.jpg" alt="Daft Punk" class="card-image">
        <div class="card-content">
            <h3 class="card-title">Daft Punk</h3>
            <p class="card-subtitle">Electronic, House</p>
            <div class="card-tags">
                <span class="tag">Legendary</span>
                <span class="tag">Robots</span>
            </div>
        </div>
        <div class="status-dot offline"></div>
    </a>

</div>


### 2. Playlists Page (4 columns)


<!-- In your playlists.md file -->
<div class="flash-container cols-4">
    
    <!-- Playlist Card 1 -->
    <a href="https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M" class="flash-card playlist-card accent-green bounce">
        <img src="assets/playlists/chill-vibes.jpg" alt="Chill Vibes" class="card-image">
        <div class="card-content">
            <h3 class="card-title">Chill Vibes</h3>
            <p class="card-description">Perfect for studying and relaxation</p>
            <div class="card-meta">
                <span>47 songs</span>
                <span>3h 12m</span>
            </div>
        </div>
        <div class="card-badge">🎵</div>
    </a>

    <!-- Playlist Card 2 -->
    <a href="https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd" class="flash-card playlist-card accent-orange pulse">
        <img src="assets/playlists/workout-hits.jpg" alt="Workout Hits" class="card-image">
        <div class="card-content">
            <h3 class="card-title">Workout Hits</h3>
            <p class="card-description">High energy tracks to power your workout</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 75%;"></div>
            </div>
        </div>
        <div class="card-badge">🔥</div>
    </a>

    <!-- Playlist Card 3 -->
    <a href="[[My Jazz Collection\|My Jazz Collection]]" class="flash-card playlist-card accent-blue neon">
        <img src="assets/playlists/jazz-classics.jpg" alt="Jazz Classics" class="card-image">
        <div class="card-content">
            <h3 class="card-title">Jazz Classics</h3>
            <p class="card-description">Timeless jazz standards and modern interpretations</p>
            <div class="card-actions">
                <button class="action-btn">Play</button>
                <button class="action-btn">Share</button>
            </div>
        </div>
    </a>

    <!-- Playlist Card 4 -->
    <a href="https://music.apple.com/playlist/pl.example" class="flash-card playlist-card gradient-border">
        <img src="assets/playlists/indie-discoveries.jpg" alt="Indie Discoveries" class="card-image">
        <div class="card-content">
            <h3 class="card-title">Indie Discoveries</h3>
            <p class="card-description">Hidden gems from independent artists</p>
            <div class="card-tags">
                <span class="tag">New</span>
                <span class="tag">Curated</span>
            </div>
        </div>
        <div class="card-badges">
            <div class="card-badge">🎸</div>
            <div class="card-badge">✨</div>
        </div>
    </a>

</div>


### 3. Main Navigation Page (2 columns, wide cards)


<!-- In your navigation.md or home page -->
<div class="flash-container cols-2">
    
    <!-- Music Section -->
    <a href="[[Music Hub\|Music Hub]]" class="flash-card nav-card hero accent-purple shimmer">
        <img src="assets/categories/music-hub.jpg" alt="Music Hub" class="card-image">
        <div class="card-content">
            <h2 class="card-title">🎵 Music Universe</h2>
            <p class="card-description">Explore artists, playlists, album reviews, and concert memories. Dive into my musical journey across genres and decades.</p>
            <div class="card-tags">
                <span class="tag">500+ Artists</span>
                <span class="tag">50+ Playlists</span>
                <span class="tag">Reviews</span>
            </div>
        </div>
        <div class="card-overlay">
            <h3 class="card-title">Discover Music</h3>
            <p>Latest additions: Arctic Monkeys, Tame Impala, ODESZA</p>
        </div>
    </a>

    <!-- Knowledge Base -->
    <a href="[[Knowledge Garden\|Knowledge Garden]]" class="flash-card nav-card hero accent-green glow">
        <img src="assets/categories/knowledge-garden.jpg" alt="Knowledge Garden" class="card-image">
        <div class="card-content">
            <h2 class="card-title">🌱 Knowledge Garden</h2>
            <p class="card-description">Personal notes, learning resources, book summaries, and thoughts on technology, philosophy, and life.</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 60%;"></div>
            </div>
        </div>
        <div class="card-badge">Growing</div>
    </a>

    <!-- Projects Portfolio -->
    <a href="[[Projects\|Projects]]" class="flash-card nav-card feature-card accent-gold bounce">
        <div class="card-content">
            <img src="assets/icons/code-icon.svg" alt="Projects" class="card-icon">
            <h2 class="card-title">⚡ Projects & Code</h2>
            <p class="card-description">Web development projects, coding experiments, and technical documentation.</p>
            <div class="card-meta">
                <span>15 Projects</span>
                <span>Updated weekly</span>
            </div>
        </div>
    </a>

    <!-- Photography -->
    <a href="[[Photography\|Photography]]" class="flash-card nav-card minimal accent-cyan frosted">
        <div class="card-content">
            <img src="assets/icons/camera-icon.svg" alt="Photography" class="card-icon">
            <h2 class="card-title">📸 Visual Stories</h2>
            <p class="card-description">Travel photography, street art, and visual experiments.</p>
        </div>
        <div class="status-dot"></div>
    </a>

</div>


### 4. Quick Shortcuts (6 columns, compact)


<!-- Quick access shortcuts -->
<div class="flash-container cols-6">
    
    <a href="[[Daily Notes\|Daily Notes]]" class="flash-card compact minimal accent-blue">
        <img src="assets/icons/calendar.svg" alt="Daily Notes" class="card-icon">
        <div class="card-content">
            <span class="card-title">Daily Notes</span>
        </div>
    </a>

    <a href="[[Task Manager\|Task Manager]]" class="flash-card compact minimal accent-red">
        <img src="assets/icons/tasks.svg" alt="Tasks" class="card-icon">
        <div class="card-content">
            <span class="card-title">Tasks</span>
            <span class="card-badge">3</span>
        </div>
    </a>

    <a href="[[Reading List\|Reading List]]" class="flash-card compact minimal accent-green">
        <img src="assets/icons/book.svg" alt="Reading" class="card-icon">
        <div class="card-content">
            <span class="card-title">Reading List</span>
        </div>
    </a>

    <a href="[[Ideas Inbox\|Ideas Inbox]]" class="flash-card compact minimal accent-purple pulse">
        <img src="assets/icons/lightbulb.svg" alt="Ideas" class="card-icon">
        <div class="card-content">
            <span class="card-title">Ideas</span>
        </div>
    </a>

    <a href="[[Bookmarks\|Bookmarks]]" class="flash-card compact minimal accent-gold">
        <img src="assets/icons/bookmark.svg" alt="Bookmarks" class="card-icon">
        <div class="card-content">
            <span class="card-title">Bookmarks</span>
        </div>
    </a>

    <a href="[[Archive\|Archive]]" class="flash-card compact minimal accent-cyan">
        <img src="assets/icons/archive.svg" alt="Archive" class="card-icon">
        <div class="card-content">
            <span class="card-title">Archive</span>
        </div>
    </a>

</div>


### 5. Stats Dashboard (auto-responsive)


<!-- Dashboard with statistics -->
<div class="flash-container cols-auto">
    
    <div class="flash-card stats-card accent-green">
        <div class="card-content">
            <div class="card-number">127</div>
            <div class="card-label">Notes Created</div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 85%;"></div>
            </div>
        </div>
    </div>

    <div class="flash-card stats-card accent-blue">
        <div class="card-content">
            <div class="card-number">43</div>
            <div class="card-label">Artists Discovered</div>
        </div>
        <div class="card-badge">This Month</div>
    </div>

    <div class="flash-card stats-card accent-purple">
        <div class="card-content">
            <div class="card-number">8</div>
            <div class="card-label">Projects Active</div>
        </div>
        <div class="status-dot"></div>
    </div>

</div>


## 🎨 Style Combinations

### Available Classes:

**Container Options:**

- `cols-1` to `cols-8` - Fixed columns
- `cols-auto` - Responsive (min 250px)
- `cols-wide` - Responsive (min 350px)
- `cols-narrow` - Responsive (min 180px)

**Card Variants:**

- `minimal` - Clean, subtle
- `hero` - Large, prominent
- `compact` - Small, horizontal
- `tall` - Extra height
- `wide` - Spans 2 columns
- `full-width` - Spans all columns

**Card Types:**

- `artist-card` - Circular image, centered
- `playlist-card` - Music note decoration
- `nav-card` - Arrow indicator
- `category-card` - Large icon
- `stats-card` - Number display
- `profile-card` - Avatar style
- `feature-card` - Star decoration

**Colors:**

- `accent-blue` - Blue gradient
- `accent-purple` - Purple gradient
- `accent-green` - Green gradient
- `accent-gold` - Gold gradient
- `accent-red` - Red gradient
- `accent-pink` - Pink gradient
- `accent-cyan` - Cyan gradient
- `accent-orange` - Orange gradient

**Effects:**

- `glow` - Subtle glow effect
- `shimmer` - Shimmer on hover
- `pulse` - Pulsing animation
- `bounce` - Bounce on hover
- `gradient-border` - Rainbow border
- `frosted` - Enhanced glass effect
- `neon` - Neon glow border

## 🔗 Linking Options

1. **Internal Obsidian Links:** `[[Note Name]]`
2. **External URLs:** `https://example.com`
3. **Email Links:** `mailto:email@example.com`
4. **File Downloads:** `assets/files/document.pdf`

## 📱 Responsive Behavior

- **Desktop (1200px+):** Full column count
- **Tablet (768-1199px):** Reduced columns automatically
- **Mobile (<768px):** Maximum 2 columns
- **Small Mobile (<480px):** Single column

## 🎯 Pro Tips

1. **Image Optimization:** Use 300x200px images for best results
2. **Consistent Naming:** Use kebab-case for asset files
3. **Badge System:** Use emojis or short text for visual hierarchy
4. **Color Coding:** Assign consistent colors per category
5. **Progressive Enhancement:** Start minimal, add effects as needed

## 🚀 Advanced Examples

### Full-width feature card with overlay:


<div class="flash-container cols-1">
    <a href="[[Featured Content\|Featured Content]]" class="flash-card hero full-width gradient-border shimmer">
        <img src="assets/featured/hero-image.jpg" alt="Featured" class="card-image">
        <div class="card-content">
            <h1 class="card-title">✨ Featured: Digital Garden Evolution</h1>
            <p class="card-description">How I transformed my note-taking system into a living, breathing knowledge ecosystem.</p>
        </div>
        <div class="card-overlay">
            <h2>Read the Story</h2>
            <p>Published: December 2024 • 8 min read</p>
        </div>
        <div class="card-badges">
            <div class="card-badge">Featured</div>
            <div class="card-badge">New</div>
        </div>
    </a>
</div>


This system gives you infinite flexibility while maintaining the glassy, adaptive aesthetic of your digital garden. Each card seamlessly integrates with your existing design and works perfectly across all devices!




 <div class="demo-section"> <div class="flash-container cols-1"> <a href="#" class="flash-card-link"> <div class="flash-card hero gradient-border glow"> <div class="card-content"> <div class="card-title">Digital Garden</div> <div class="card-subtitle">Explore My Thoughts</div> <div class="card-description"> A curated collection of interconnected ideas, notes, and discoveries growing organically over time. </div> </div> </div> </a> </div> </div>



<a href="#" class="flash-card-link"> <div class="flash-card hero accent-purple shimmer"> <div class="card-content"> <div class="card-title">Creative Works</div> <div class="card-subtitle">Art & Projects</div> <div class="card-description"> Visual experiments, generative art, and creative coding projects that blur the line between art and technology. </div> </div> </div> </a>
<a href="#" class="flash-card-link"> <div class="flash-card hero accent-blue pulse"> <div class="card-content"> <div class="card-title">Knowledge Base</div> <div class="card-subtitle">Learning Resources</div> <div class="card-description"> Structured guides, tutorials, and reference materials for continuous learning and skill development. </div> </div> </div> </a>

<div class="demo-section"> <div class="flash-container cols-2"> <div class="flash-card artist-card shimmer"> <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff6b6b'/%3E%3Cstop offset='100%25' style='stop-color:%234ecdc4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23g1)'/%3E%3C/svg%3E" class="card-image" alt="Artist"> <div class="card-content"> <div class="card-title">Aurora Blake</div> <div class="card-subtitle">Digital Artist</div> <div class="card-tags"> <span class="tag">3D Art</span> <span class="tag">Surreal</span> </div> </div>  </div></div></div>

<h2>Hero Cards - Main Navigation</h2> <div class="demo-section"> <div class="flash-container cols-3"> <a href="#" class="flash-card-link"> <div class="flash-card hero gradient-border glow"> <div class="card-content"> <div class="card-title">Digital Garden</div> <div class="card-subtitle">Explore My Thoughts</div> <div class="card-description"> A curated collection of interconnected ideas, notes, and discoveries growing organically over time. </div> </div> </div> </a> <a href="#" class="flash-card-link"> <div class="flash-card hero accent-purple shimmer"> <div class="card-content"> <div class="card-title">Creative Works</div> <div class="card-subtitle">Art & Projects</div> <div class="card-description"> Visual experiments, generative art, and creative coding projects that blur the line between art and technology. </div> </div> </div> </a> <a href="#" class="flash-card-link"> <div class="flash-card hero accent-blue pulse"> <div class="card-content"> <div class="card-title">Knowledge Base</div> <div class="card-subtitle">Learning Resources</div> <div class="card-description"> Structured guides, tutorials, and reference materials for continuous learning and skill development. </div> </div> </div> </a> </div> </div> <h2>Artist Cards Gallery</h2> <div class="demo-section"> <div class="flash-container cols-4"> <div class="flash-card artist-card shimmer"> <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff6b6b'/%3E%3Cstop offset='100%25' style='stop-color:%234ecdc4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23g1)'/%3E%3C/svg%3E" class="card-image" alt="Artist"> <div class="card-content"> <div class="card-title">Aurora Blake</div> <div class="card-subtitle">Digital Artist</div> <div class="card-tags"> <span class="tag">3D Art</span> <span class="tag">Surreal</span> </div> </div> </div> <div class="flash-card artist-card shimmer"> <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%239b59b6'/%3E%3Cstop offset='100%25' style='stop-color:%233498db'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23g2)'/%3E%3C/svg%3E" class="card-image" alt="Artist"> <div class="card-content"> <div class="card-title">Neo Kintsugi</div> <div class="card-subtitle">Generative Artist</div> <div class="card-tags"> <span class="tag">AI Art</span> <span class="tag">Abstract</span> </div> </div> </div> <div class="flash-card artist-card shimmer"> <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f39c12'/%3E%3Cstop offset='100%25' style='stop-color:%23e74c3c'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23g3)'/%3E%3C/svg%3E" class="card-image" alt="Artist"> <div class="card-content"> <div class="card-title">Pixel Dreams</div> <div class="card-subtitle">Pixel Artist</div> <div class="card-tags"> <span class="tag">Retro</span> <span class="tag">Games</span> </div> </div> </div> <div class="flash-card artist-card shimmer"> <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='g4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%232ecc71'/%3E%3Cstop offset='100%25' style='stop-color:%2327ae60'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23g4)'/%3E%3C/svg%3E" class="card-image" alt="Artist"> <div class="card-content"> <div class="card-title">Luna Wave</div> <div class="card-subtitle">Motion Designer</div> <div class="card-tags"> <span class="tag">Animation</span> <span class="tag">VFX</span> </div> </div> </div> </div> </div> <h2>Playlist Cards</h2> <div class="demo-section"> <div class="flash-container cols-3"> <div class="flash-card playlist-card with-image glow"> <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='pg1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231DB954'/%3E%3Cstop offset='100%25' style='stop-color:%23191414'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23pg1)'/%3E%3Ctext x='200' y='100' font-family='Arial' font-size='60' fill='white' text-anchor='middle' dominant-baseline='middle'%3E♪%3C/text%3E%3C/svg%3E" class="card-image" alt="Playlist"> <div class="card-content"> <div class="card-badge">42 tracks</div> <div class="card-title">Midnight Focus</div> <div class="card-description">Deep concentration beats for late night coding sessions</div> </div> </div> <div class="flash-card playlist-card with-image glow"> <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='pg2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B6B'/%3E%3Cstop offset='100%25' style='stop-color:%234ECDC4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23pg2)'/%3E%3Ctext x='200' y='100' font-family='Arial' font-size='60' fill='white' text-anchor='middle' dominant-baseline='middle'%3E♫%3C/text%3E%3C/svg%3E" class="card-image" alt="Playlist"> <div class="card-content"> <div class="card-badge">38 tracks</div> <div class="card-title">Morning Energy</div> <div class="card-description">Uplifting tracks to start your day with positive vibes</div> </div> </div> <div class="flash-card playlist-card with-image glow"> <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='pg3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%239B59B6'/%3E%3Cstop offset='100%25' style='stop-color:%232C3E50'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23pg3)'/%3E%3Ctext x='200' y='100' font-family='Arial' font-size='60' fill='white' text-anchor='middle' dominant-baseline='middle'%3E♬%3C/text%3E%3C/svg%3E" class="card-image" alt="Playlist"> <div class="card-content"> <div class="card-badge">56 tracks</div> <div class="card-title">Flow State</div> <div class="card-description">Ambient soundscapes for deep work and meditation</div> </div> </div> </div> </div> <h2>Navigation Shortcuts</h2> <div class="demo-section"> <div class="flash-container cols-4"> <div class="flash-card nav-card compact accent-blue"> <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M12 2L2 7l10 5 10-5-10-5z"/> <path d="M2 17l10 5 10-5"/> <path d="M2 12l10 5 10-5"/> </svg> <div class="card-content"> <div class="card-title">Stack</div> </div> </div> <div class="flash-card nav-card compact accent-purple"> <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <circle cx="12" cy="12" r="10"/> <path d="M12 6v6l4 2"/> </svg> <div class="card-content"> <div class="card-title">Recent</div> </div> </div> <div class="flash-card nav-card compact accent-green"> <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/> </svg> <div class="card-content"> <div class="card-title">Archive</div> </div> </div> <div class="flash-card nav-card compact accent-gold"> <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/> </svg> <div class="card-content"> <div class="card-title">Favorites</div> </div> </div> </div> </div> <h2>Minimal Cards</h2> <div class="demo-section"> <div class="flash-container cols-2"> <div class="flash-card minimal"> <div class="card-content"> <div class="card-title">Quick Note</div> <div class="card-subtitle">Simple and clean design for basic information</div> </div> </div> <div class="flash-card minimal"> <div class="card-content"> <div class="card-title">Reference Link</div> <div class="card-subtitle">Lightweight card for external resources</div> </div> </div> </div> </div>



























## 🌟 Constellations (Main Sections)
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f
f

test


